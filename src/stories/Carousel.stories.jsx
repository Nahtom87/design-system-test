import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18291';

export default {
  title: 'Design System/Carousel',
  component: Carousel,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Scroll retning',
    },
    loop: {
      control: 'boolean',
      description: 'Loop slides (kræver opts.loop)',
    },
  },
  args: {
    orientation: 'horizontal',
    loop: false,
  },
};

const slides = [
  { label: 'Slide 1', title: 'Borgerservice', beskrivelse: 'Selvbetjeningsløsninger' },
  { label: 'Slide 2', title: 'Teknik & Miljø', beskrivelse: 'Byggesager og tilladelser' },
  { label: 'Slide 3', title: 'Kultur & Fritid', beskrivelse: 'Faciliteter og tilbud' },
  { label: 'Slide 4', title: 'Økonomi', beskrivelse: 'Budget og regnskab' },
  { label: 'Slide 5', title: 'HR & Personale', beskrivelse: 'Medarbejder administration' },
];

export const Playground = {
  name: 'Playground',
  render: ({ orientation, loop }) => (
    <div style={{ padding: '48px' }}>
      <Carousel orientation={orientation} opts={{ loop }} style={{ width: '320px' }}>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '180px', gap: '8px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a' }}>{slide.title}</span>
                  <span style={{ fontSize: '14px', color: '#737373' }}>{slide.beskrivelse}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Default = {
  render: () => (
    <div style={{ padding: '48px' }}>
      <Carousel style={{ width: '320px' }}>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '180px' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: '#0a0a0a' }}>{i}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const FlerePerVisning = {
  name: 'Flere slides per visning',
  render: () => (
    <div style={{ padding: '48px' }}>
      <Carousel opts={{ align: 'start' }} style={{ width: '320px' }}>
        <CarouselContent style={{ marginLeft: '-8px' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <CarouselItem key={i} style={{ paddingLeft: '8px', flexBasis: '50%' }}>
              <Card>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 600 }}>{i}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Lodret = {
  name: 'Lodret',
  render: () => (
    <div style={{ padding: '48px' }}>
      <Carousel orientation="vertical" style={{ width: '260px', height: '300px' }}>
        <CarouselContent style={{ height: '300px' }}>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '260px', gap: '8px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#0a0a0a' }}>{slide.title}</span>
                  <span style={{ fontSize: '13px', color: '#737373' }}>{slide.beskrivelse}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
