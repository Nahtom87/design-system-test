import { Kbd, KbdGroup } from '@/components/ui/kbd';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=780-42511';

export default {
  title: 'Design System/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => <Kbd>K</Kbd>,
};

export const Genveje = {
  name: 'Tastaturgenveje',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {[
        { label: 'Gem', keys: ['⌘', 'S'] },
        { label: 'Kopier', keys: ['⌘', 'C'] },
        { label: 'Sæt ind', keys: ['⌘', 'V'] },
        { label: 'Fortryd', keys: ['⌘', 'Z'] },
        { label: 'Søg', keys: ['⌘', 'K'] },
      ].map(({ label, keys }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px' }}>
          <span style={{ fontSize: '14px', color: '#0a0a0a', fontFamily: 'IBM Plex Sans' }}>{label}</span>
          <KbdGroup>
            {keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
          </KbdGroup>
        </div>
      ))}
    </div>
  ),
};

export const ITooltip = {
  name: 'I tooltip kontekst',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#0a0a0a', padding: '6px 8px', borderRadius: '8px', width: 'fit-content' }}>
      <span style={{ fontSize: '12px', color: 'white', fontFamily: 'IBM Plex Sans' }}>Søg</span>
      <KbdGroup>
        <Kbd style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>⌘</Kbd>
        <Kbd style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>K</Kbd>
      </KbdGroup>
    </div>
  ),
};
