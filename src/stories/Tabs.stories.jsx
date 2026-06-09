import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=9-997';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    defaultValue: {
      control: 'radio',
      options: ['konto', 'adgangskode', 'indstillinger'],
      description: 'Aktiv tab som standard',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Tabs vandret eller lodret',
    },
  },
  args: {
    defaultValue: 'konto',
    orientation: 'horizontal',
  },
};

export const Playground = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} orientation={args.orientation} style={{ width: '460px' }}>
      <TabsList>
        <TabsTrigger value="konto">Konto</TabsTrigger>
        <TabsTrigger value="adgangskode">Adgangskode</TabsTrigger>
        <TabsTrigger value="indstillinger">Indstillinger</TabsTrigger>
      </TabsList>

      <TabsContent value="konto">
        <Card>
          <CardHeader><CardTitle>Konto</CardTitle></CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Label htmlFor="navn">Navn</Label>
                <Input id="navn" placeholder="Anders Andersen" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="anders@eksempel.dk" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="adgangskode">
        <Card>
          <CardHeader><CardTitle>Adgangskode</CardTitle></CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Label htmlFor="nuvaerende">Nuværende adgangskode</Label>
                <Input id="nuvaerende" type="password" placeholder="••••••••" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Label htmlFor="ny">Ny adgangskode</Label>
                <Input id="ny" type="password" placeholder="••••••••" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Label htmlFor="bekraeft">Bekræft ny adgangskode</Label>
                <Input id="bekraeft" type="password" placeholder="••••••••" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="indstillinger">
        <Card>
          <CardHeader><CardTitle>Indstillinger</CardTitle></CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label htmlFor="email-notif">E-mail notifikationer</Label>
                <Switch id="email-notif" defaultChecked />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label htmlFor="sms-notif">SMS notifikationer</Label>
                <Switch id="sms-notif" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label htmlFor="nyhedsbrev">Nyhedsbrev</Label>
                <Switch id="nyhedsbrev" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Default = {
  render: () => (
    <Tabs defaultValue="konto" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="konto">Konto</TabsTrigger>
        <TabsTrigger value="adgangskode">Adgangskode</TabsTrigger>
        <TabsTrigger value="indstillinger">Indstillinger</TabsTrigger>
      </TabsList>
      <TabsContent value="konto">
        <Card>
          <CardHeader><CardTitle>Konto</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Kontoindhold her.</p></CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="adgangskode">
        <Card>
          <CardHeader><CardTitle>Adgangskode</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Skift adgangskode her.</p></CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="indstillinger">
        <Card>
          <CardHeader><CardTitle>Indstillinger</CardTitle></CardHeader>
          <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Indstillinger her.</p></CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs = {
  name: 'Mange tabs',
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: '480px' }}>
      <TabsList>
        <TabsTrigger value="tab1">Oversigt</TabsTrigger>
        <TabsTrigger value="tab2">Aktivitet</TabsTrigger>
        <TabsTrigger value="tab3">Dokumenter</TabsTrigger>
        <TabsTrigger value="tab4">Indstillinger</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-muted-foreground pt-3">Oversigt over systemets status og nøgletal.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-muted-foreground pt-3">Seneste aktivitet og hændelseslog.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-muted-foreground pt-3">Dokumenter og vedhæftede filer.</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-sm text-muted-foreground pt-3">Konfiguration og systemindstillinger.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const LodretLayout = {
  name: 'Lodret layout',
  render: () => (
    <Tabs defaultValue="profil" orientation="vertical" style={{ display: 'flex', gap: '16px', width: '560px' }}>
      <TabsList style={{ flexDirection: 'column', alignItems: 'stretch', height: 'fit-content' }}>
        <TabsTrigger value="profil">Profil</TabsTrigger>
        <TabsTrigger value="sikkerhed">Sikkerhed</TabsTrigger>
        <TabsTrigger value="fakturering">Fakturering</TabsTrigger>
        <TabsTrigger value="integrationer">Integrationer</TabsTrigger>
      </TabsList>
      <div style={{ flex: 1 }}>
        <TabsContent value="profil">
          <Card>
            <CardHeader><CardTitle>Profil</CardTitle></CardHeader>
            <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Rediger dine profiloplysninger her.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sikkerhed">
          <Card>
            <CardHeader><CardTitle>Sikkerhed</CardTitle></CardHeader>
            <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Administrer to-faktor-godkendelse og sessioner.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fakturering">
          <Card>
            <CardHeader><CardTitle>Fakturering</CardTitle></CardHeader>
            <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Se og download fakturaer og betalingsmetoder.</p></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrationer">
          <Card>
            <CardHeader><CardTitle>Integrationer</CardTitle></CardHeader>
            <CardContent><p style={{ fontSize: '14px', color: '#404040' }}>Tilslut tredjeparts apps og API-nøgler.</p></CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
