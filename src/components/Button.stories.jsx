import { Button } from './Button';
import '../tokens.css';

// Tema-decorator: wrapper der sætter data-theme og baggrundsfarve
const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'shadcn';
  const bg = theme === 'shadcn' ? '#ffffff' : '#0a0a0a';
  return (
    <div data-theme={theme} style={{ background: bg, padding: '24px', minHeight: '100px' }}>
      <Story />
    </div>
  );
};

export default {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [withTheme],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'default', 'large', 'extra-large'],
      description: 'Size of the button',
    },
    roundness: {
      control: 'select',
      options: ['default', 'round'],
      description: 'Border radius style',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show icon on the left',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Show icon on the right',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

// Interaktiv sandbox
export const Playground = {
  args: {
    variant: 'primary',
    size: 'default',
    roundness: 'default',
    disabled: false,
    label: 'Label',
    showLeftIcon: false,
    showRightIcon: false,
  },
};

// Alle varianter — skift tema i toolbar øverst for at se orange vs. neutral
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary"     label="Primary" />
      <Button variant="secondary"   label="Secondary" />
      <Button variant="outline"     label="Outline" />
      <Button variant="ghost"       label="Ghost" />
      <Button variant="destructive" label="Destructive" />
    </div>
  ),
};

// Alle størrelser
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="mini"        label="Mini" />
      <Button size="small"       label="Small" />
      <Button size="default"     label="Default" />
      <Button size="large"       label="Large" />
      <Button size="extra-large" label="Extra Large" />
    </div>
  ),
};

// Roundness
export const Roundness = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button roundness="default" label="Default" />
      <Button roundness="round"   label="Round" />
    </div>
  ),
};

// Disabled state
export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary"     label="Primary"     disabled />
      <Button variant="secondary"   label="Secondary"   disabled />
      <Button variant="outline"     label="Outline"     disabled />
      <Button variant="ghost"       label="Ghost"       disabled />
      <Button variant="destructive" label="Destructive" disabled />
    </div>
  ),
};

// Med ikoner
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button label="Left icon"   showLeftIcon />
      <Button label="Right icon"  showRightIcon />
      <Button label="Both icons"  showLeftIcon showRightIcon />
    </div>
  ),
};

// Side om side: alle tre temaer
export const AllThemes = {
  decorators: [],
  render: () => (
    <div style={{ display: 'flex', gap: '0', flexDirection: 'column' }}>
      {['shadcn', 'shadcn-dark', 'kk-orange'].map((theme) => (
        <div
          key={theme}
          data-theme={theme}
          style={{
            background: theme === 'shadcn' ? '#ffffff' : '#0a0a0a',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: theme === 'shadcn' ? '#0a0a0a' : '#fafafa', fontSize: '12px', width: '110px', flexShrink: 0 }}>
            {theme}
          </span>
          <Button variant="primary"     label="Primary" />
          <Button variant="secondary"   label="Secondary" />
          <Button variant="outline"     label="Outline" />
          <Button variant="ghost"       label="Ghost" />
          <Button variant="destructive" label="Destructive" />
        </div>
      ))}
    </div>
  ),
};
