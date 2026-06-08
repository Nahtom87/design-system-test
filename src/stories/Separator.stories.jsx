import { Separator } from '@/components/ui/separator';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=176-26207';

export default {
  title: 'Design System/Separator',
  component: Separator,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Horisontal = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p style={{ fontSize: '14px', color: '#404040' }}>Indhold over</p>
      <Separator style={{ margin: '16px 0' }} />
      <p style={{ fontSize: '14px', color: '#404040' }}>Indhold under</p>
    </div>
  ),
};

export const Vertikal = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
      <span style={{ fontSize: '14px', color: '#404040' }}>Sektion 1</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: '14px', color: '#404040' }}>Sektion 2</span>
      <Separator orientation="vertical" />
      <span style={{ fontSize: '14px', color: '#404040' }}>Sektion 3</span>
    </div>
  ),
};
