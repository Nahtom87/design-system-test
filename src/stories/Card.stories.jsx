import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC';

export default {
  title: 'Design System/Card',
  component: Card,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    showHeader: { control: 'boolean', description: 'Vis header sektion' },
    showDescription: { control: 'boolean', description: 'Vis description i header' },
    showFooter: { control: 'boolean', description: 'Vis footer med handlingsknapper' },
  },
  args: {
    showHeader: true,
    showDescription: true,
    showFooter: true,
  },
};

export const Playground = {
  name: 'Playground',
  render: ({ showHeader, showDescription, showFooter }) => (
    <Card style={{ width: '360px' }}>
      {showHeader && (
        <CardHeader>
          <CardTitle>Brugerprofil</CardTitle>
          {showDescription && (
            <CardDescription>Administrer dine profiloplysninger og præferencer.</CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent>
        <p className="text-sm text-muted-foreground leading-5">
          Her kan du se og redigere dine personlige oplysninger, herunder navn, e-mail og rolletildeling i KK Group systemet.
        </p>
      </CardContent>
      {showFooter && (
        <CardFooter>
          <Button variant="outline">Annuller</Button>
          <Button>Gem</Button>
        </CardFooter>
      )}
    </Card>
  ),
};

export const Default = {
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardHeader>
        <CardTitle>Kortoverskrift</CardTitle>
        <CardDescription>En kort beskrivelse af indholdet i kortet.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#404040] leading-5">
          Her er selve indholdet i kortet.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Annuller</Button>
        <Button>Gem</Button>
      </CardFooter>
    </Card>
  ),
};

export const UdenFooter = {
  name: 'Uden footer',
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardHeader>
        <CardTitle>Simpelt kort</CardTitle>
        <CardDescription>Uden footer-sektion.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#404040]">Indhold her.</p>
      </CardContent>
    </Card>
  ),
};

export const MedBadge = {
  name: 'Med badge i header',
  render: () => (
    <Card style={{ width: '360px' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Projekt status</CardTitle>
          <Badge variant="secondary">Aktiv</Badge>
        </div>
        <CardDescription>Opdateret i dag kl. 14:32</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[#404040]">Projektet kører planmæssigt.</p>
      </CardContent>
    </Card>
  ),
};
