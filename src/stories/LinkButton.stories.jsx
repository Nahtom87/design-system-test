import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=162-17323';

// Link Button — fra Figma: transparent bg, px-2 py-1, rounded-4px
// IBM Plex Sans Medium 12px, #0a0a0a
// Bruges som inline tekst-link med optional ikoner

const LinkBtn = ({ children, showLeftIcon, showRightIcon, disabled }) => (
  <button
    disabled={disabled}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      background: 'transparent', border: 'none',
      padding: '4px 8px', borderRadius: '4px',
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      fontWeight: 500, fontSize: '12px', lineHeight: '16px',
      color: disabled ? '#a3a3a3' : '#0a0a0a',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none', opacity: disabled ? 0.5 : 1,
    }}
    onMouseEnter={e => !disabled && (e.target.style.textDecoration = 'underline')}
    onMouseLeave={e => (e.target.style.textDecoration = 'none')}
  >
    {showLeftIcon && <ArrowLeft size={14} />}
    {children}
    {showRightIcon && <ArrowRight size={14} />}
  </button>
);

export default {
  title: 'Design System/Link Button',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Default = {
  render: () => <LinkBtn>Læs mere</LinkBtn>,
};

export const MedIkoner = {
  name: 'Med ikoner',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <LinkBtn showLeftIcon>Tilbage</LinkBtn>
      <LinkBtn showRightIcon>Næste</LinkBtn>
      <LinkBtn showRightIcon><ExternalLink size={14} />Åbn ekstern</LinkBtn>
    </div>
  ),
};

export const States = {
  name: 'States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <LinkBtn>Normal</LinkBtn>
      <LinkBtn disabled>Deaktiveret</LinkBtn>
    </div>
  ),
};
