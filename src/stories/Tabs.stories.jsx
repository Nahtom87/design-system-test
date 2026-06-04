import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=9-997';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
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
    <Tabs defaultValue="tab1">
      <TabsList>
        {['Oversigt', 'Aktivitet', 'Dokumenter', 'Indstillinger'].map((t, i) => (
          <TabsTrigger key={i} value={`tab${i+1}`}>{t}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};
