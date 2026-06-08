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
};

export const Playground = {
  render: () => (
    <InputGroup style={{ maxWidth: 320 }}>
      <InputGroupAddon align="inline-start"><Search /></InputGroupAddon>
      <InputGroupInput placeholder="Search…" />
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
