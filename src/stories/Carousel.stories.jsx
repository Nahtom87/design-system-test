import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=164-18291';

export default {
  title: 'Design System/Carousel',
  component: Carousel,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => (
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
  ),
};

export const FlerePerVisning = {
  name: 'Flere slides per visning',
  render: () => (
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
  ),
};
