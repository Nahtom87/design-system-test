import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
} from '@/components/ui/input-group';
import { Search, Mail } from 'lucide-react';

export default {
  title: 'Design System/Input Group',
  component: InputGroup,
  argTypes: {
    addonAlign: {
      control: 'radio',
      options: ['inline-start', 'inline-end'],
      description: 'Addon placering (start/slut)',
      name: 'Addon position',
    },
    addonType: {
      control: 'radio',
      options: ['icon', 'text', 'button'],
      description: 'Type af addon',
    },
  },
  args: { addonAlign: 'inline-start', addonType: 'icon' },
};

export const Playground = {
  render: ({ addonAlign, addonType }) => {
    const addon = addonType === 'icon'
      ? <Search />
      : addonType === 'text'
      ? <InputGroupText>https://</InputGroupText>
      : <InputGroupButton>Søg</InputGroupButton>;

    return (
      <InputGroup style={{ maxWidth: 320 }}>
        <InputGroupAddon align={addonAlign}>{addon}</InputGroupAddon>
        <InputGroupInput placeholder="Søg her..." />
      </InputGroup>
    );
  },
};

export const DefaultSearch = {
  name: 'Søgefelt med ikon',
  render: () => (
    <InputGroup style={{ maxWidth: 320 }}>
      <InputGroupAddon align="inline-start"><Search /></InputGroupAddon>
      <InputGroupInput placeholder="Søg..." />
    </InputGroup>
  ),
};

export const WithTextAddon = {
  name: 'With text addon',
  render: () => (
    <InputGroup style={{ maxWidth: 320 }}>
      <InputGroupAddon align="inline-start"><InputGroupText>https://</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
};

export const WithButton = {
  name: 'With trailing button',
  render: () => (
    <InputGroup style={{ maxWidth: 320 }}>
      <InputGroupAddon align="inline-start"><Mail /></InputGroupAddon>
      <InputGroupInput placeholder="name@example.com" />
      <InputGroupAddon align="inline-end"><InputGroupButton>Send</InputGroupButton></InputGroupAddon>
    </InputGroup>
  ),
};
