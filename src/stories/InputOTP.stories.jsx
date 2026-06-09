import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';

const FIGMA_URL = 'https://www.figma.com/design/6IyBOQAD2rysMi9SzXmzFX/Design-system-POC?node-id=140-12046';

export default {
  title: 'Design System/Input OTP',
  component: InputOTP,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  argTypes: {
    maxLength: {
      control: 'radio',
      options: [4, 6],
      description: 'Antal cifre i koden',
    },
    disabled: {
      control: 'boolean',
      description: 'Deaktiver input',
    },
  },
  args: { maxLength: 6, disabled: false },
};

export const Playground = {
  render: ({ maxLength, disabled }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Label>Bekræftelseskode</Label>
      {maxLength === 4 ? (
        <InputOTP maxLength={4} disabled={disabled}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      ) : (
        <InputOTP maxLength={6} disabled={disabled}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      )}
      <p style={{ fontSize: '12px', color: '#737373' }}>
        Indtast den {maxLength}-cifrede kode fra din email.
      </p>
    </div>
  ),
};

export const Default = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Label>Bekræftelseskode</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p style={{ fontSize: '12px', color: '#737373' }}>Indtast den 6-cifrede kode fra din email.</p>
    </div>
  ),
};

export const FireCifre = {
  name: '4-cifret kode',
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const MedFejlstatus = {
  name: 'Med fejlstatus',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Label>Bekræftelseskode</Label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} aria-invalid="true" />
          <InputOTPSlot index={4} aria-invalid="true" />
          <InputOTPSlot index={5} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
      <p style={{ fontSize: '12px', color: '#ef4444' }}>Koden er forkert. Prøv igen eller anmod om en ny kode.</p>
    </div>
  ),
};
