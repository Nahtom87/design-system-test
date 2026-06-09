import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=58-5414';

const variantIcon = {
  default: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertCircle,
};

const variantTitle = {
  default: 'Information',
  success: 'Succes',
  warning: 'Advarsel',
  destructive: 'Fejl',
};

const variantDescription = {
  default: 'Her er en neutral informationsbesked til brugeren.',
  success: 'Handlingen blev gennemført uden fejl.',
  warning: 'Tjek venligst dine oplysninger, inden du fortsætter.',
  destructive: 'Noget gik galt. Prøv igen eller kontakt support.',
};

export default {
  title: 'Design System/Alert',
  component: Alert,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning'],
    },
    showDescription: {
      control: 'boolean',
      description: 'Vis beskrivelsestekst under titlen',
    },
    showIcon: {
      control: 'boolean',
      description: 'Vis ikon til venstre',
    },
  },
  args: {
    variant: 'default',
    showDescription: true,
    showIcon: true,
  },
};

export const Playground = {
  render: (args) => {
    const { variant, showDescription, showIcon, ...alertProps } = args;
    const Icon = variantIcon[variant] ?? Info;
    return (
      <Alert variant={variant} style={{ width: '400px' }} {...alertProps}>
        {showIcon && <Icon className="size-4 shrink-0 mt-0.5" />}
        <div>
          <AlertTitle>{variantTitle[variant]}</AlertTitle>
          {showDescription && (
            <AlertDescription>{variantDescription[variant]}</AlertDescription>
          )}
        </div>
      </Alert>
    );
  },
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
