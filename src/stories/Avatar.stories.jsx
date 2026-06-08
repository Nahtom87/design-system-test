import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=1805-29466';

const sizes = ['regular', 'small', 'tiny', 'extra-tiny'];
const sizeLabels = { regular: 'Regular (40px)', small: 'Small (32px)', tiny: 'Tiny (24px)', 'extra-tiny': 'Extra Tiny (20px)' };

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
  },
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      description: 'Størrelse — Regular/Small/Tiny/Extra Tiny',
    },
    roundness: {
      control: 'select',
      options: ['round', 'roundrect'],
      description: 'Round = cirkel, Roundrect = afrundede hjørner',
    },
  },
};

// Interaktiv sandbox
export const Playground = {
  render: (args) => (
    <Avatar size={args.size} roundness={args.roundness}>
      <AvatarFallback size={args.size}>CN</AvatarFallback>
    </Avatar>
  ),
  args: { size: 'regular', roundness: 'round' },
};

// Alle størrelser — Round (cirkel)
export const AllSizesRound = {
  name: 'Alle størrelser — Round',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {sizes.map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Avatar size={s} roundness="round">
            <AvatarFallback size={s}>CN</AvatarFallback>
          </Avatar>
          <span style={{ fontSize: '10px', color: '#737373' }}>{sizeLabels[s]}</span>
        </div>
      ))}
    </div>
  ),
};

// Alle størrelser — Roundrect
export const AllSizesRoundrect = {
  name: 'Alle størrelser — Roundrect',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {sizes.map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <Avatar size={s} roundness="roundrect">
            <AvatarFallback size={s}>CN</AvatarFallback>
          </Avatar>
          <span style={{ fontSize: '10px', color: '#737373' }}>{sizeLabels[s]}</span>
        </div>
      ))}
    </div>
  ),
};

// Med billede
export const WithImage = {
  name: 'Med billede',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {sizes.map((s) => (
        <Avatar key={s} size={s} roundness="round">
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback size={s}>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
};

// Fuld oversigt — matcher Figma-screenshottet (Picture off/on × Round/Roundrect × alle størrelser)
export const FullOverview = {
  name: 'Fuld oversigt (alle kombinationer)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {['round', 'roundrect'].map((r) => (
        <div key={r}>
          <p style={{ fontSize: '11px', color: '#737373', marginBottom: '12px' }}>Roundness: {r}</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '10px', color: '#9747ff', marginBottom: '8px' }}>Picture: Off</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {sizes.map((s) => (
                  <Avatar key={s} size={s} roundness={r}>
                    <AvatarFallback size={s}>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '10px', color: '#9747ff', marginBottom: '8px' }}>Picture: On</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {sizes.map((s) => (
                  <Avatar key={s} size={s} roundness={r}>
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback size={s}>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// Avatar gruppe
export const Group = {
  name: 'Avatar gruppe',
  render: () => (
    <AvatarGroup>
      {['CN', 'AB', 'MK', 'JL'].map((initials) => (
        <Avatar key={initials} size="small" roundness="round">
          <AvatarFallback size="small">{initials}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  ),
};
