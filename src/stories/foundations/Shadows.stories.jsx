export default {
  title: 'Foundations/Shadows',
  parameters: { layout: 'padded' },
};

const fontMono = "'IBM Plex Mono', monospace";
const fontBase = "'IBM Plex Sans', system-ui, sans-serif";

const ShadowCard = ({ name, token, value, description }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '200px' }}>
    <div style={{
      width: '200px', height: '100px',
      background: 'white',
      borderRadius: '10px',
      border: '1px solid #f5f5f5',
      boxShadow: value,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontFamily: fontBase, fontSize: '12px', color: '#737373' }}>{name}</span>
    </div>
    <div>
      <p style={{ fontFamily: fontMono, fontSize: '12px', fontWeight: 500, color: '#0a0a0a', margin: '0 0 2px' }}>{token}</p>
      <p style={{ fontFamily: fontBase, fontSize: '12px', color: '#737373', margin: 0 }}>{description}</p>
    </div>
  </div>
);

export const AlleSkygger = {
  name: 'Alle shadow tokens',
  render: () => (
    <div>
      <p style={{ fontFamily: fontBase, fontSize: '14px', color: '#737373', marginTop: 0, marginBottom: '32px' }}>
        Shadows bruges konsekvent i KK Group design systemet til at skabe dybde og hierarki.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
        <ShadowCard
          name="shadow-xs"
          token="--shadow-xs"
          value="0px 1px 2px 0px rgba(0,0,0,0.05)"
          description="Input, Checkbox, Switch — subtil løftning"
        />
        <ShadowCard
          name="shadow-sm"
          token="--shadow-sm"
          value="0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)"
          description="Tabs aktiv state, badges"
        />
        <ShadowCard
          name="shadow-md"
          token="--shadow-md"
          value="0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)"
          description="HoverCard, Popover, Card"
        />
        <ShadowCard
          name="shadow-lg"
          token="--shadow-lg"
          value="0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)"
          description="Dialog, Sheet, Drawer"
        />
        <ShadowCard
          name="focus-ring"
          token="--focus/ring"
          value="0 0 0 3px #d4d4d4"
          description="Focus state — alle interaktive elementer"
        />
        <ShadowCard
          name="focus-ring-error"
          token="--focus/ring-error"
          value="0 0 0 3px #fca5a5"
          description="Focus state ved fejl (destructive)"
        />
      </div>
    </div>
  ),
};

export const ShadowKontekst = {
  name: 'Brug i kontekst',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      <div>
        <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', marginBottom: '12px', marginTop: 0 }}>shadow-xs — Input, Switch</p>
        <input
          style={{
            width: '300px', height: '40px', padding: '0 16px',
            border: '1px solid #e5e5e5', borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
            fontFamily: fontBase, fontSize: '14px', color: '#0a0a0a',
            outline: 'none',
          }}
          placeholder="Input med shadow-xs"
        />
      </div>
      <div>
        <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', marginBottom: '12px', marginTop: 0 }}>shadow-md — Card, HoverCard</p>
        <div style={{
          width: '300px', padding: '16px',
          background: 'white', borderRadius: '10px',
          border: '1px solid #e5e5e5',
          boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
          fontFamily: fontBase, fontSize: '14px', color: '#0a0a0a',
        }}>
          Card med shadow-md
        </div>
      </div>
      <div>
        <p style={{ fontFamily: fontMono, fontSize: '11px', color: '#737373', marginBottom: '12px', marginTop: 0 }}>focus-ring — ved fokus på knapper/inputs</p>
        <button style={{
          padding: '8px 16px',
          background: '#171717', color: 'white',
          border: 'none', borderRadius: '8px',
          fontFamily: fontBase, fontSize: '14px',
          boxShadow: '0 0 0 3px #d4d4d4',
          cursor: 'pointer',
        }}>
          Knap med focus ring
        </button>
      </div>
    </div>
  ),
};
