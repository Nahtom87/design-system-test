import { Button } from '@/components/ui/button';
import { Settings, Plus, X, Search, MoreHorizontal, Edit, Trash2, Heart } from 'lucide-react';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=153-17169';

// Icon Button bruger den eksisterende Button-komponent med kun ikon
// Fra Figma: ghost variant, 36x36px, 8px padding, rounded-8px

export default {
  title: 'Design System/Icon Button',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
};

const IconBtn = ({ icon, variant = 'ghost', size = 'default', ...props }) => (
  <Button
    variant={variant}
    size={size}
    style={{ minWidth: '36px', minHeight: '36px', padding: '8px', width: '36px', height: '36px' }}
    {...props}
  >
    {icon}
  </Button>
);

export const Playground = {
  render: () => <IconBtn icon={<Settings className="size-4" />} />,
};

export const AlleVarianter = {
  name: 'Alle varianter',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <IconBtn variant="ghost"    icon={<Settings className="size-4" />} title="Ghost" />
      <IconBtn variant="outline"  icon={<Plus className="size-4" />}     title="Outline" />
      <IconBtn variant="secondary" icon={<Search className="size-4" />}  title="Secondary" />
      <IconBtn variant="primary"  icon={<Heart className="size-4" />}    title="Primary" />
      <IconBtn variant="destructive" icon={<Trash2 className="size-4" />} title="Destructive" />
    </div>
  ),
};

export const Ikoner = {
  name: 'Almindelige ikoner',
  render: () => (
    <div style={{ display: 'flex', gap: '4px' }}>
      <IconBtn icon={<Plus className="size-4" />} variant="ghost" />
      <IconBtn icon={<Edit className="size-4" />} variant="ghost" />
      <IconBtn icon={<Trash2 className="size-4" />} variant="ghost" />
      <IconBtn icon={<Search className="size-4" />} variant="ghost" />
      <IconBtn icon={<MoreHorizontal className="size-4" />} variant="ghost" />
      <IconBtn icon={<X className="size-4" />} variant="ghost" />
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <IconBtn icon={<Settings className="size-4" />} variant="ghost" disabled />
      <IconBtn icon={<Plus className="size-4" />} variant="outline" disabled />
    </div>
  ),
};
