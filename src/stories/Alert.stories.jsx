import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=58-5414';

export default {
  title: 'Design System/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'success', 'warning'] },
  },
};

export const Playground = {
  args: { variant: 'default' },
  render: (args) => (
    <Alert {...args} style={{ width: '400px' }}>
      <Info className="size-4 shrink-0 mt-0.5" />
      <div>
        <AlertTitle>Information</AlertTitle>
      </div>
    </Alert>
  ),
};

export const AllVariants = {
  name: 'Alle varianter',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '400px' }}>
      <Alert variant="default">
        <Info className="size-4 shrink-0 mt-0.5" />
        <div><AlertTitle>Info</AlertTitle><AlertDescription>Neutral informationsbesked.</AlertDescription></div>
      </Alert>
      <Alert variant="success">
        <CheckCircle className="size-4 shrink-0 mt-0.5" />
        <div><AlertTitle>Succes</AlertTitle><AlertDescription>Handlingen blev gennemført.</AlertDescription></div>
      </Alert>
      <Alert variant="warning">
        <AlertTriangle className="size-4 shrink-0 mt-0.5" />
        <div><AlertTitle>Advarsel</AlertTitle><AlertDescription>Tjek venligst dine oplysninger.</AlertDescription></div>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="size-4 shrink-0 mt-0.5" />
        <div><AlertTitle>Fejl</AlertTitle><AlertDescription>Noget gik galt. Prøv igen.</AlertDescription></div>
      </Alert>
    </div>
  ),
};
