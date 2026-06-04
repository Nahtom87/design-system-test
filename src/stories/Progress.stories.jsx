import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=843-105647';

export default {
  title: 'Design System/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
};

export const Playground = { args: { value: 33, style: { width: '342px' } } };

export const AlleVærdier = {
  name: 'Alle værdier',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '342px' }}>
      {[0, 10, 25, 50, 75, 90, 100].map((v) => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#737373', fontFamily: 'IBM Plex Mono', width: '32px' }}>{v}%</span>
          <Progress value={v} style={{ flex: 1 }} />
        </div>
      ))}
    </div>
  ),
};

export const Animeret = {
  name: 'Animeret',
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const t = setInterval(() => setValue(v => v >= 100 ? 0 : v + 5), 200);
      return () => clearInterval(t);
    }, []);
    return <Progress value={value} style={{ width: '342px' }} />;
  },
};
