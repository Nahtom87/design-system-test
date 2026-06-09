import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=1779-758';

export default {
  title: 'Design System/Accordion',
  component: Accordion,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at a time.',
      table: { defaultValue: { summary: 'single' } },
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow closing the open item by clicking its trigger (only applies when type="single").',
      table: { defaultValue: { summary: 'false' } },
      if: { arg: 'type', eq: 'single' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all accordion items.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    type: 'single',
    collapsible: true,
    disabled: false,
  },
  render: ({ type, collapsible, disabled }) => (
    <Accordion type={type} collapsible={collapsible} style={{ width: '480px' }}>
      <AccordionItem value="item-1" disabled={disabled}>
        <AccordionTrigger>Hvad er KK Group?</AccordionTrigger>
        <AccordionContent>
          KK Group er en ledende teknologivirksomhed med fokus på bæredygtige løsninger.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled={disabled}>
        <AccordionTrigger>Hvordan kontakter jeg support?</AccordionTrigger>
        <AccordionContent>
          Du kan kontakte support via email, telefon eller chat på vores hjemmeside.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" disabled={disabled}>
        <AccordionTrigger>Hvad er jeres åbningstider?</AccordionTrigger>
        <AccordionContent>
          Vi er åbne mandag til fredag fra 08:00 til 17:00.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Default = {
  name: 'Default (enkelt åben)',
  render: () => (
    <Accordion type="single" collapsible style={{ width: '480px' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Hvad er KK Group?</AccordionTrigger>
        <AccordionContent>
          KK Group er en ledende teknologivirksomhed med fokus på bæredygtige løsninger.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Hvordan kontakter jeg support?</AccordionTrigger>
        <AccordionContent>
          Du kan kontakte support via email, telefon eller chat på vores hjemmeside.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Hvad er jeres åbningstider?</AccordionTrigger>
        <AccordionContent>
          Vi er åbne mandag til fredag fra 08:00 til 17:00.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen = {
  name: 'Multiple (flere åbne)',
  render: () => (
    <Accordion type="multiple" style={{ width: '480px' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Hvad er KK Groups digitale strategi?</AccordionTrigger>
        <AccordionContent>KK Group fokuserer på digitalisering af borgerservice med sikre, tilgængelige løsninger på tværs af alle platforme.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Hvordan anmelder jeg en sag?</AccordionTrigger>
        <AccordionContent>Sager kan anmeldes via selvbetjeningsportalen, telefonisk på 33 66 33 66 eller ved personligt fremmøde.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Hvad er sagsbehandlingstiden?</AccordionTrigger>
        <AccordionContent>Standard sagsbehandlingstid er 4 uger. For akutte sager kan der søges om ekspederet behandling.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
