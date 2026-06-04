import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=11-422';

// Loading Button — fra Figma: outline style, spinner + label IBM Plex Sans Bold
// Bruges som button i loading state

export default {
  title: 'Design System/Loading Button',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
    <Button variant="outline" disabled>
      <Spinner size="sm" />
      Indlæser...
    </Button>
  ),
};

export const AlleVarianter = {
  name: 'Loading state i alle varianter',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled><Spinner size="sm" />Gemmer...</Button>
      <Button variant="secondary" disabled><Spinner size="sm" />Henter...</Button>
      <Button variant="outline" disabled><Spinner size="sm" />Indlæser...</Button>
      <Button variant="ghost" disabled><Spinner size="sm" />Behandler...</Button>
    </div>
  ),
};

export const AlleStoerelser = {
  name: 'Alle størrelser',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="mini" variant="outline" disabled><Spinner size="sm" />Mini</Button>
      <Button size="small" variant="outline" disabled><Spinner size="sm" />Small</Button>
      <Button size="default" variant="outline" disabled><Spinner size="sm" />Default</Button>
      <Button size="large" variant="outline" disabled><Spinner size="sm" />Large</Button>
    </div>
  ),
};
