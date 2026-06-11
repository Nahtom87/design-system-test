import { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import {
  SidebarProvider, Sidebar, SidebarInset, SidebarTrigger,
  SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  LayoutDashboard, Wind, FileText, Bell, Settings, LogOut,
  TrendingUp, TrendingDown, ChevronRight, AlertTriangle,
  Download, RefreshCw, Filter, Info,
} from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const SPARK_GREEN  = [140,143,142,146,144,148,147,150].map(v => ({ v }));
const SPARK_YELLOW = [50, 48, 47, 49, 47, 46, 46, 45].map(v => ({ v }));
const SPARK_RED    = [3,  4,  5,  3,  4,  4,  5,  5].map(v => ({ v }));

const WIND_FARMS = [
  { name: 'Horns Rev 3',   type: 'Offshore', assets: 49, ok: 36, warn: 11, urgent: 2,  lastInspected: '2025-11-14' },
  { name: 'Horns Rev 2',   type: 'Offshore', assets: 40, ok: 30, warn:  9, urgent: 1,  lastInspected: '2025-11-10' },
  { name: 'Anholt',        type: 'Offshore', assets: 35, ok: 26, warn:  8, urgent: 1,  lastInspected: '2025-10-28' },
  { name: 'Middelgrunden', type: 'Offshore', assets: 20, ok: 15, warn:  5, urgent: 0,  lastInspected: '2025-11-02' },
  { name: 'Rødsand 2',     type: 'Offshore', assets: 25, ok: 19, warn:  5, urgent: 1,  lastInspected: '2025-10-19' },
  { name: 'Nysted',        type: 'Offshore', assets: 15, ok: 11, warn:  4, urgent: 0,  lastInspected: '2025-11-07' },
  { name: 'Nørrekær Enge', type: 'Onshore',  assets:  8, ok:  6, warn:  2, urgent: 0,  lastInspected: '2025-09-30' },
  { name: 'Klim',          type: 'Onshore',  assets:  8, ok:  7, warn:  1, urgent: 0,  lastInspected: '2025-10-15' },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Fleet overview', href: '#',  active: true },
  { icon: Wind,            label: 'Assets',         href: '#' },
  { icon: FileText,        label: 'Reports',        href: '#' },
  { icon: Bell,            label: 'Alerts',         href: '#', badge: 3 },
  { icon: Settings,        label: 'Settings',       href: '#' },
];

/* ── Small components ─────────────────────────────────────────────────────── */

function Sparkline({ data, stroke }) {
  return (
    <ResponsiveContainer width="100%" height={44}>
      <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`g${stroke.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={stroke} stopOpacity={0.3} />
            <stop offset="95%" stopColor={stroke} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <Area
          type="monotone" dataKey="v"
          stroke={stroke} strokeWidth={1.5}
          fill={`url(#g${stroke.replace('#','')})`}
          dot={false} isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function StatusBar({ ok, warn, urgent, total }) {
  return (
    <div style={{ display: 'flex', height: '6px', borderRadius: '3px', overflow: 'hidden', gap: '2px' }}>
      {ok     > 0 && <div style={{ flex: ok / total,     background: '#22c55e', borderRadius: '3px' }} />}
      {warn   > 0 && <div style={{ flex: warn / total,   background: '#f59e0b' }} />}
      {urgent > 0 && <div style={{ flex: urgent / total, background: '#ef4444', borderRadius: '3px' }} />}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function FleetOverview() {
  const [tab, setTab] = useState('mechanical');

  return (
    <div data-theme="kk-group" style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <TooltipProvider>
        <SidebarProvider>

          {/* ── Sidebar ───────────────────────────────────────────────── */}
          <Sidebar collapsible="icon">
            <SidebarHeader style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                <div style={{
                  width: '28px', height: '28px', flexShrink: 0, borderRadius: '7px',
                  background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Wind size={14} color="var(--primary-foreground)" />
                </div>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)', whiteSpace: 'nowrap' }}>
                  KK Wind
                </span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {NAV_ITEMS.map(({ icon: Icon, label, href, active, badge }) => (
                      <SidebarMenuItem key={label}>
                        <SidebarMenuButton isActive={active} asChild>
                          <a href={href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Icon size={16} />
                              <span>{label}</span>
                            </span>
                            {badge && (
                              <Badge variant="destructive" roundness="round" style={{ fontSize: '10px', padding: '0 5px', lineHeight: '16px' }}>
                                {badge}
                              </Badge>
                            )}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              <SidebarGroup>
                <SidebarGroupLabel>Fleet health</SidebarGroupLabel>
                <SidebarGroupContent style={{ padding: '0 8px 8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                      <span>Overall</span>
                      <span style={{ fontWeight: 600, color: '#22c55e' }}>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter style={{ borderTop: '1px solid var(--border)', padding: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Avatar size="small" roundness="round">
                  <AvatarFallback size="small">AM</AvatarFallback>
                </Avatar>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Anna Moth</p>
                  <p style={{ fontSize: '11px', color: 'var(--muted-foreground)', margin: 0 }}>ann@kk-wind.dk</p>
                </div>
                <Button variant="ghost" size="default" style={{ width: '28px', height: '28px', padding: '6px', flexShrink: 0 }} aria-label="Log out">
                  <LogOut size={14} />
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* ── Main content ──────────────────────────────────────────── */}
          <SidebarInset style={{ background: 'var(--background)' }}>

            {/* Top bar */}
            <header style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 24px', height: '56px',
              background: 'var(--background)', borderBottom: '1px solid var(--border)',
              position: 'sticky', top: 0, zIndex: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <SidebarTrigger />
                <Separator orientation="vertical" style={{ height: '20px' }} />
                <h1 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>
                  Fleet overview
                </h1>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Badge variant="secondary">200 assets</Badge>
                <Badge variant="outline">
                  <AlertTriangle size={11} style={{ marginRight: '4px', color: '#ef4444' }} />
                  3 active events
                </Badge>
                <Separator orientation="vertical" style={{ height: '20px' }} />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="default" style={{ width: '32px', height: '32px', padding: '6px' }} aria-label="Refresh">
                      <RefreshCw size={14} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Refresh data</TooltipContent>
                </Tooltip>
                <Button variant="outline" size="small">
                  <Download size={14} />
                  Export
                </Button>
                <Button variant="primary" size="small">
                  <Filter size={14} />
                  Filter
                </Button>
                <Avatar size="small" roundness="round">
                  <AvatarFallback size="small">AM</AvatarFallback>
                </Avatar>
              </div>
            </header>

            {/* Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Alert */}
              <Alert variant="warning">
                <AlertTriangle size={16} />
                <AlertTitle>2 turbines at Horns Rev 3 require urgent inspection</AlertTitle>
                <AlertDescription>
                  Vibration sensors exceeded threshold on WTG-14 and WTG-22. Inspection window opens 2025-12-01.
                </AlertDescription>
              </Alert>

              {/* KPI cards — use Card which is dark in kk-group */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>

                {/* Card 1 — No inspection needed */}
                <Card>
                  <CardHeader style={{ paddingBottom: '4px' }}>
                    <CardDescription style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '11px' }}>
                      No inspection needed
                    </CardDescription>
                  </CardHeader>
                  <CardContent style={{ paddingTop: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <div>
                        <p style={{ fontSize: '36px', fontWeight: 700, color: 'var(--card-foreground)', margin: 0, lineHeight: 1 }}>150</p>
                        <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', margin: '4px 0 0' }}>75% of fleet</p>
                      </div>
                      <div style={{ width: '88px', flexShrink: 0 }}>
                        <Sparkline data={SPARK_GREEN} stroke="#22c55e" />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                      <TrendingUp size={13} color="#22c55e" />
                      <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>+3.2%</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>vs. last month</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2 — Inspection needed */}
                <Card>
                  <CardHeader style={{ paddingBottom: '4px' }}>
                    <CardDescription style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '11px' }}>
                      Inspection needed
                    </CardDescription>
                  </CardHeader>
                  <CardContent style={{ paddingTop: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <div>
                        <p style={{ fontSize: '36px', fontWeight: 700, color: 'var(--card-foreground)', margin: 0, lineHeight: 1 }}>45</p>
                        <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', margin: '4px 0 0' }}>22.5% of fleet</p>
                      </div>
                      <div style={{ width: '88px', flexShrink: 0 }}>
                        <Sparkline data={SPARK_YELLOW} stroke="#f59e0b" />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                      <TrendingDown size={13} color="#22c55e" />
                      <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>−1.5%</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>vs. last month</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 3 — Urgent */}
                <Card>
                  <CardHeader style={{ paddingBottom: '4px' }}>
                    <CardDescription style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '11px' }}>
                      Urgent inspection
                    </CardDescription>
                  </CardHeader>
                  <CardContent style={{ paddingTop: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <div>
                        <p style={{ fontSize: '36px', fontWeight: 700, color: 'var(--card-foreground)', margin: 0, lineHeight: 1 }}>5</p>
                        <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', margin: '4px 0 0' }}>2.5% of fleet</p>
                      </div>
                      <div style={{ width: '88px', flexShrink: 0 }}>
                        <Sparkline data={SPARK_RED} stroke="#ef4444" />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                      <TrendingUp size={13} color="#ef4444" />
                      <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: 500 }}>+0.5%</span>
                      <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>vs. last month</span>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Tabs + table */}
              <div style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}>
                <Tabs value={tab} onValueChange={setTab}>
                  <div style={{ padding: '16px 20px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <TabsList>
                      <TabsTrigger value="mechanical">Mechanical status</TabsTrigger>
                      <TabsTrigger value="reports">Monthly reports</TabsTrigger>
                    </TabsList>
                    <div style={{ display: 'flex', gap: '6px', paddingBottom: '8px' }}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="small" style={{ width: '28px', height: '28px', padding: '6px' }} aria-label="Info">
                            <Info size={13} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Status reflects last 30 days of sensor data</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Mechanical status */}
                  <TabsContent value="mechanical" style={{ margin: 0 }}>
                    <div style={{ padding: '12px 20px 4px' }}>
                      {/* Legend */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                        {[
                          { color: '#22c55e', label: 'No inspection needed' },
                          { color: '#f59e0b', label: 'Inspection needed' },
                          { color: '#ef4444', label: 'Urgent' },
                        ].map(({ color, label }) => (
                          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: color, flexShrink: 0 }} />
                            <span style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead style={{ width: '32px' }}></TableHead>
                          <TableHead>Wind farm</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead style={{ textAlign: 'right' }}>Assets</TableHead>
                          <TableHead style={{ width: '180px' }}>Status</TableHead>
                          <TableHead>Last inspected</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {WIND_FARMS.map((farm) => (
                          <TableRow key={farm.name}>
                            <TableCell style={{ fontSize: '18px', paddingRight: 0 }}>🇩🇰</TableCell>
                            <TableCell>
                              <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)', margin: 0 }}>
                                {farm.name}
                              </p>
                            </TableCell>
                            <TableCell>
                              <Badge variant={farm.type === 'Offshore' ? 'secondary' : 'outline'} style={{ fontSize: '11px' }}>
                                {farm.type}
                              </Badge>
                            </TableCell>
                            <TableCell style={{ textAlign: 'right', fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', fontWeight: 600 }}>
                              {farm.assets}
                            </TableCell>
                            <TableCell>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <StatusBar ok={farm.ok} warn={farm.warn} urgent={farm.urgent} total={farm.assets} />
                                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: 'var(--muted-foreground)', margin: 0 }}>
                                  {farm.ok} / {farm.warn} / {farm.urgent}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell style={{ fontSize: '13px', color: 'var(--muted-foreground)', fontFamily: "'IBM Plex Mono', monospace" }}>
                              {farm.lastInspected}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="small" style={{ gap: '2px', fontSize: '12px', color: 'var(--muted-foreground)' }}>
                                View <ChevronRight size={13} />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>

                  {/* Monthly reports */}
                  <TabsContent value="reports" style={{ margin: 0 }}>
                    <div style={{ padding: '48px 24px', textAlign: 'center' }}>
                      <FileText size={32} style={{ color: 'var(--border)', marginBottom: '12px' }} />
                      <p style={{ fontSize: '14px', color: 'var(--muted-foreground)', margin: '0 0 16px' }}>
                        Monthly reports coming soon
                      </p>
                      <Button variant="outline" size="small">Request report</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

            </div>
          </SidebarInset>

        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
}
