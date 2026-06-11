import * as React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from '@/components/ui/sidebar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  LayoutDashboard, Wind, FileText, Bell, Settings, LogOut,
  TrendingUp, TrendingDown, ChevronRight, AlertTriangle,
} from 'lucide-react';

export default {
  title: 'Patterns/Fleet Overview',
  parameters: { layout: 'fullscreen' },
};

/* ── Data ────────────────────────────────────────────────────────────────── */

const SPARK_GREEN  = [140,143,142,146,144,148,147,150].map(v => ({ v }));
const SPARK_YELLOW = [50, 48, 47, 49, 47, 46, 46, 45].map(v => ({ v }));
const SPARK_RED    = [3,  4,  5,  3,  4,  4,  5,  5].map(v => ({ v }));

const WIND_FARMS = [
  { name: 'Horns Rev 3',   type: 'Offshore', assets: 49, ok: 36, warn: 11, urgent: 2 },
  { name: 'Horns Rev 2',   type: 'Offshore', assets: 40, ok: 30, warn:  9, urgent: 1 },
  { name: 'Anholt',        type: 'Offshore', assets: 35, ok: 26, warn:  8, urgent: 1 },
  { name: 'Middelgrunden', type: 'Offshore', assets: 20, ok: 15, warn:  5, urgent: 0 },
  { name: 'Rødsand 2',     type: 'Offshore', assets: 25, ok: 19, warn:  5, urgent: 1 },
  { name: 'Nysted',        type: 'Offshore', assets: 15, ok: 11, warn:  4, urgent: 0 },
  { name: 'Nørrekær Enge', type: 'Onshore',  assets:  8, ok:  6, warn:  2, urgent: 0 },
  { name: 'Klim',          type: 'Onshore',  assets:  8, ok:  7, warn:  1, urgent: 0 },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Fleet overview', active: true },
  { icon: Wind,            label: 'Assets' },
  { icon: FileText,        label: 'Reports' },
  { icon: Bell,            label: 'Alerts',   badge: 3 },
  { icon: Settings,        label: 'Settings' },
];

const font = "'IBM Plex Sans', system-ui, sans-serif";
const mono = "'IBM Plex Mono', monospace";

/* ── Sub-components ─────────────────────────────────────────────────────── */

function Sparkline({ data, stroke, fill }) {
  return (
    <ResponsiveContainer width="100%" height={48}>
      <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`grad-${stroke}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={stroke} stopOpacity={0.25} />
            <stop offset="95%" stopColor={stroke} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={stroke}
          strokeWidth={1.5}
          fill={`url(#grad-${stroke})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function KpiCard({ label, value, pct, trend, trendPositive, spark, stroke }) {
  const TrendIcon = trendPositive ? TrendingUp : TrendingDown;
  const trendColor = trendPositive ? '#16a34a' : '#dc2626';
  return (
    <div style={{
      flex: '1 1 0', minWidth: 0,
      background: '#ffffff',
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      padding: '20px 20px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div>
          <p style={{ fontFamily: font, fontSize: '12px', fontWeight: 500, color: '#737373', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {label}
          </p>
          <p style={{ fontFamily: font, fontSize: '36px', fontWeight: 700, color: '#0a0a0a', margin: 0, lineHeight: 1 }}>
            {value}
          </p>
          <p style={{ fontFamily: font, fontSize: '13px', color: '#737373', margin: '4px 0 0' }}>
            {pct} of fleet
          </p>
        </div>
        <div style={{ width: '96px', flexShrink: 0, marginTop: '4px' }}>
          <Sparkline data={spark} stroke={stroke} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid #f5f5f5' }}>
        <TrendIcon size={13} color={trendColor} />
        <span style={{ fontFamily: font, fontSize: '12px', color: trendColor, fontWeight: 500 }}>{trend}</span>
        <span style={{ fontFamily: font, fontSize: '12px', color: '#a3a3a3' }}>vs. last month</span>
      </div>
    </div>
  );
}

function StatusBar({ ok, warn, urgent, total }) {
  const segments = [
    { count: ok,     color: '#22c55e' },
    { count: warn,   color: '#f59e0b' },
    { count: urgent, color: '#ef4444' },
  ];
  return (
    <div style={{ display: 'flex', gap: '2px', height: '20px', borderRadius: '4px', overflow: 'hidden', width: '160px' }}>
      {segments.map(({ count, color }, i) =>
        count > 0 ? (
          <div
            key={i}
            title={`${count} assets`}
            style={{ background: color, flex: count / total, minWidth: count > 0 ? '6px' : 0, borderRadius: i === 0 ? '4px 0 0 4px' : i === segments.length - 1 ? '0 4px 4px 0' : 0 }}
          />
        ) : null
      )}
    </div>
  );
}

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
          <div style={{
            width: '28px', height: '28px', flexShrink: 0,
            background: 'linear-gradient(135deg, #FF7133, #EF3407)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Wind size={14} color="#fff" />
          </div>
          <span style={{ fontFamily: font, fontWeight: 600, fontSize: '14px', color: '#0a0a0a', whiteSpace: 'nowrap' }}>
            KK Wind
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map(({ icon: Icon, label, active, badge }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton isActive={active} asChild>
                    <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon size={16} />
                        <span>{label}</span>
                      </span>
                      {badge && (
                        <span style={{
                          fontFamily: mono, fontSize: '10px', fontWeight: 600,
                          background: '#dc2626', color: '#fff',
                          borderRadius: '10px', padding: '1px 6px', lineHeight: '16px',
                        }}>
                          {badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter style={{ borderTop: '1px solid #f0f0f0', padding: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar size="small" roundness="round">
            <AvatarFallback size="small">AM</AvatarFallback>
          </Avatar>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <p style={{ fontFamily: font, fontSize: '13px', fontWeight: 500, color: '#0a0a0a', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Anna Moth</p>
            <p style={{ fontFamily: font, fontSize: '11px', color: '#737373', margin: 0 }}>ann@kk-wind.dk</p>
          </div>
          <LogOut size={14} style={{ color: '#a3a3a3', flexShrink: 0 }} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function FleetOverviewPage() {
  return (
    <SidebarProvider style={{ minHeight: '100vh', fontFamily: font }}>
      <AppSidebar />

      <SidebarInset style={{ background: '#f8f8f8' }}>
        {/* ── Top bar ─────────────────────────────────────────────────── */}
        <header style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px', height: '56px',
          background: '#ffffff', borderBottom: '1px solid #e5e5e5',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <SidebarTrigger />
            <Separator orientation="vertical" style={{ height: '20px' }} />
            <div>
              <p style={{ fontFamily: font, fontSize: '15px', fontWeight: 700, color: '#0a0a0a', margin: 0 }}>
                Fleet overview
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Badge variant="secondary">200 assets</Badge>
            <Badge variant="outline" style={{ borderColor: '#fca5a5', color: '#dc2626', background: '#fff5f5' }}>
              <AlertTriangle size={11} style={{ marginRight: '4px' }} />
              3 active events
            </Badge>
            <Avatar size="small" roundness="round">
              <AvatarFallback size="small">AM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* ── Page body ────────────────────────────────────────────────── */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* ── KPI cards ──────────────────────────────────────────────── */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <KpiCard
              label="No inspection needed"
              value="150"
              pct="75%"
              trend="+3.2%"
              trendPositive
              spark={SPARK_GREEN}
              stroke="#22c55e"
            />
            <KpiCard
              label="Inspection needed"
              value="45"
              pct="22.5%"
              trend="−1.5%"
              trendPositive
              spark={SPARK_YELLOW}
              stroke="#f59e0b"
            />
            <KpiCard
              label="Urgent inspection"
              value="5"
              pct="2.5%"
              trend="+0.5%"
              trendPositive={false}
              spark={SPARK_RED}
              stroke="#ef4444"
            />
          </div>

          {/* ── Tabs ───────────────────────────────────────────────────── */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden' }}>
            <Tabs defaultValue="mechanical">
              <div style={{ padding: '16px 20px 0', borderBottom: '1px solid #e5e5e5' }}>
                <TabsList>
                  <TabsTrigger value="mechanical">Mechanical status</TabsTrigger>
                  <TabsTrigger value="reports">Monthly reports</TabsTrigger>
                </TabsList>
              </div>

              {/* ── Mechanical status tab ──────────────────────────────── */}
              <TabsContent value="mechanical" style={{ margin: 0 }}>
                <div style={{ padding: '0 20px 16px' }}>
                  {/* Legend */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 0', borderBottom: '1px solid #f5f5f5' }}>
                    {[
                      { color: '#22c55e', label: 'No inspection needed' },
                      { color: '#f59e0b', label: 'Inspection needed' },
                      { color: '#ef4444', label: 'Urgent inspection' },
                    ].map(({ color, label }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color }} />
                        <span style={{ fontFamily: font, fontSize: '12px', color: '#737373' }}>{label}</span>
                      </div>
                    ))}
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead style={{ width: '36px' }}></TableHead>
                        <TableHead>Wind farm</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead style={{ textAlign: 'right' }}>Assets</TableHead>
                        <TableHead>Status distribution</TableHead>
                        <TableHead style={{ width: '80px', textAlign: 'right' }}>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {WIND_FARMS.map((farm) => (
                        <TableRow key={farm.name}>
                          <TableCell style={{ fontSize: '20px', paddingRight: 0 }}>🇩🇰</TableCell>
                          <TableCell>
                            <div>
                              <p style={{ fontFamily: font, fontWeight: 600, fontSize: '14px', color: '#0a0a0a', margin: 0 }}>{farm.name}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={farm.type === 'Offshore' ? 'secondary' : 'outline'} style={{ fontSize: '11px' }}>
                              {farm.type}
                            </Badge>
                          </TableCell>
                          <TableCell style={{ textAlign: 'right', fontFamily: mono, fontSize: '13px', color: '#0a0a0a', fontWeight: 600 }}>
                            {farm.assets}
                          </TableCell>
                          <TableCell>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <StatusBar ok={farm.ok} warn={farm.warn} urgent={farm.urgent} total={farm.assets} />
                              <p style={{ fontFamily: mono, fontSize: '10px', color: '#a3a3a3', margin: 0 }}>
                                {farm.ok} / {farm.warn} / {farm.urgent}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell style={{ textAlign: 'right' }}>
                            <button style={{
                              display: 'inline-flex', alignItems: 'center', gap: '2px',
                              fontFamily: font, fontSize: '12px', color: '#737373',
                              background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px',
                              borderRadius: '6px',
                            }}>
                              View <ChevronRight size={13} />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* ── Monthly reports tab ────────────────────────────────── */}
              <TabsContent value="reports" style={{ margin: 0 }}>
                <div style={{ padding: '32px 24px', textAlign: 'center' }}>
                  <FileText size={32} style={{ color: '#d4d4d4', marginBottom: '12px' }} />
                  <p style={{ fontFamily: font, fontSize: '14px', color: '#737373', margin: 0 }}>
                    Monthly reports coming soon
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

/* ── Story ───────────────────────────────────────────────────────────────── */

export const FleetOverview = {
  name: 'Fleet Overview',
  render: () => (
    <div style={{ margin: '-24px' }}>
      <FleetOverviewPage />
    </div>
  ),
};
