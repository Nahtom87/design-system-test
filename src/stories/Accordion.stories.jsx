import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=1779-758';

export default {
  title: 'Design System/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
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
        <AccordionTrigger>Punkt 1</AccordionTrigger>
        <AccordionContent>Indhold for punkt 1 — kan åbnes samtidig med andre.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Punkt 2</AccordionTrigger>
        <AccordionContent>Indhold for punkt 2.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Punkt 3</AccordionTrigger>
        <AccordionContent>Indhold for punkt 3.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
