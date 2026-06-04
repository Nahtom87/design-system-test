import { Skeleton } from '@/components/ui/skeleton';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=303-246698';

export default {
  title: 'Design System/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => <Skeleton style={{ width: '200px', height: '20px' }} />,
};

// Matcher Figma — avatar + tekst linjer
export const KortSkeleton = {
  name: 'Kort-skeleton (som Figma)',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', width: '320px', alignItems: 'flex-start' }}>
      <Skeleton style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Skeleton style={{ height: '16px', width: '100%' }} />
        <Skeleton style={{ height: '132px', width: '100%' }} />
      </div>
    </div>
  ),
};

export const TabellSkeleton = {
  name: 'Tabel-skeleton',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '400px' }}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} style={{ display: 'flex', gap: '12px' }}>
          <Skeleton style={{ height: '38px', width: '30%' }} />
          <Skeleton style={{ height: '38px', width: '40%' }} />
          <Skeleton style={{ height: '38px', width: '20%' }} />
        </div>
      ))}
    </div>
  ),
};
