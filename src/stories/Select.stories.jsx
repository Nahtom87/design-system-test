import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=28-6831';

export default {
  title: 'Design System/Select',
  component: Select,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    disabled: { control: 'boolean', description: 'Deaktiver select' },
    placeholder: { control: 'text', description: 'Placeholder tekst når intet er valgt' },
  },
  args: {
    disabled: false,
    placeholder: 'Vælg en mulighed',
  },
};

export const Playground = {
  render: ({ disabled, placeholder }) => (
    <Select disabled={disabled}>
      <SelectTrigger style={{ width: '240px' }}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Mulighed 1</SelectItem>
        <SelectItem value="option2">Mulighed 2</SelectItem>
        <SelectItem value="option3">Mulighed 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Default = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: '240px' }}>
        <SelectValue placeholder="Vælg en mulighed" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Mulighed 1</SelectItem>
        <SelectItem value="option2">Mulighed 2</SelectItem>
        <SelectItem value="option3">Mulighed 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel = {
  name: 'Med label',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '240px' }}>
      <Label>Land</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Vælg land" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dk">Danmark</SelectItem>
          <SelectItem value="se">Sverige</SelectItem>
          <SelectItem value="no">Norge</SelectItem>
          <SelectItem value="fi">Finland</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const MedGrupper = {
  name: 'Med grupper',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '240px' }}>
      <Label>Land</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Vælg land" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Nordiske lande</SelectLabel>
            <SelectItem value="dk">Danmark</SelectItem>
            <SelectItem value="se">Sverige</SelectItem>
            <SelectItem value="no">Norge</SelectItem>
            <SelectItem value="fi">Finland</SelectItem>
            <SelectItem value="is">Island</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Øvrige Europa</SelectLabel>
            <SelectItem value="de">Tyskland</SelectItem>
            <SelectItem value="fr">Frankrig</SelectItem>
            <SelectItem value="nl">Holland</SelectItem>
            <SelectItem value="be">Belgien</SelectItem>
            <SelectItem value="pl">Polen</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
