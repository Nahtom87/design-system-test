export default {
  title: 'Patterns/Overview',
  parameters: { layout: 'padded' },
};

const fontBase = "'IBM Plex Sans', system-ui, sans-serif";
const fontMono = "'IBM Plex Mono', monospace";

export const Overview = {
  name: 'Overview',
  render: () => (
    <div style={{ maxWidth: '600px', fontFamily: fontBase }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', margin: '0 0 8px' }}>
        Patterns
      </h1>
      <p style={{ fontSize: '14px', color: '#737373', lineHeight: '20px', margin: '0 0 32px' }}>
        Composed UI patterns assembled from design system components. Coming soon.
      </p>
      <div style={{
        padding: '24px',
        border: '1px dashed #e5e5e5',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: fontMono, fontSize: '12px', color: '#a3a3a3', margin: 0 }}>
          No patterns yet
        </p>
      </div>
    </div>
  ),
};
