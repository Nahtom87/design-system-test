import { Button } from '@/components/ui/button';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';
import { useState } from 'react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=784-87344';

// Button Group — knapper grupperet i en sammenhængende bjælke
// Fra Figma: samme variant, ingen gap, delte borders

const BtnGroup = ({ children }) => (
  <div style={{ display: 'inline-flex' }}>
    {children}
  </div>
);

const GroupBtn = ({ children, active, first, last, ...props }) => (
  <button
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
      padding: '7px 12px', minHeight: '36px',
      fontFamily: "'IBM Plex Sans', system-ui", fontWeight: 500, fontSize: '14px',
      background: active ? '#f5f5f5' : 'white',
      color: '#0a0a0a',
      border: '1px solid #e5e5e5',
      borderLeft: first ? '1px solid #e5e5e5' : 'none',
      borderRadius: first ? '8px 0 0 8px' : last ? '0 8px 8px 0' : '0',
      cursor: 'pointer', transition: 'background 0.15s',
    }}
    {...props}
  >
    {children}
  </button>
);

export default {
  title: 'Design System/Button Group',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

export const Justering = {
  name: 'Tekstjustering',
  render: () => {
    const [active, setActive] = useState('center');
    return (
      <BtnGroup>
        <GroupBtn first active={active === 'left'} onClick={() => setActive('left')}><AlignLeft size={16} /></GroupBtn>
        <GroupBtn active={active === 'center'} onClick={() => setActive('center')}><AlignCenter size={16} /></GroupBtn>
        <GroupBtn last active={active === 'right'} onClick={() => setActive('right')}><AlignRight size={16} /></GroupBtn>
      </BtnGroup>
    );
  },
};

export const Formatering = {
  name: 'Tekstformatering',
  render: () => {
    const [active, setActive] = useState(new Set(['bold']));
    const toggle = (key) => setActive(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
    return (
      <BtnGroup>
        <GroupBtn first active={active.has('bold')} onClick={() => toggle('bold')}><Bold size={16} /></GroupBtn>
        <GroupBtn active={active.has('italic')} onClick={() => toggle('italic')}><Italic size={16} /></GroupBtn>
        <GroupBtn last active={active.has('underline')} onClick={() => toggle('underline')}><Underline size={16} /></GroupBtn>
      </BtnGroup>
    );
  },
};

export const MedTekst = {
  name: 'Med tekst',
  render: () => (
    <BtnGroup>
      <GroupBtn first>Dag</GroupBtn>
      <GroupBtn active>Uge</GroupBtn>
      <GroupBtn>Måned</GroupBtn>
      <GroupBtn last>År</GroupBtn>
    </BtnGroup>
  ),
};
