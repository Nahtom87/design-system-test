export default {
  title: 'Foundations/Farver',
  parameters: { layout: 'padded' },
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', margin: '0 0 16px 0' }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {children}
    </div>
  </div>
);

const Swatch = ({ name, value, textColor = '#0a0a0a', border }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100px' }}>
    <div style={{
      width: '100px', height: '64px', borderRadius: '8px',
      background: value,
      border: border || (value === '#ffffff' || value === 'white' ? '1px solid #e5e5e5' : 'none'),
      display: 'flex', alignItems: 'flex-end', padding: '6px',
    }} />
    <div>
      <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: '12px', fontWeight: 500, color: '#0a0a0a', margin: 0 }}>{name}</p>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: '#737373', margin: 0 }}>{value}</p>
    </div>
  </div>
);

export const Brandfarver = {
  name: 'Brand palette (Orange)',
  render: () => (
    <Section title="KK Brand — Orange">
      {[
        { name: 'brand-50',  value: '#FFF4ED' },
        { name: 'brand-100', value: '#FFE6D5' },
        { name: 'brand-200', value: '#FFCAA8' },
        { name: 'brand-300', value: '#FFA471' },
        { name: 'brand-400', value: '#FF7133' },
        { name: 'brand-500', value: '#FE4F11' },
        { name: 'brand-600', value: '#EF3407', textColor: '#fff' },
        { name: 'brand-700', value: '#C62408', textColor: '#fff' },
        { name: 'brand-800', value: '#9D1E0F', textColor: '#fff' },
        { name: 'brand-900', value: '#7E1C10', textColor: '#fff' },
        { name: 'brand-950', value: '#440A06', textColor: '#fff' },
      ].map(s => <Swatch key={s.name} {...s} />)}
    </Section>
  ),
};

export const NeutralePalette = {
  name: 'Neutral palette',
  render: () => (
    <Section title="Neutral">
      {[
        { name: 'neutral-50',  value: '#FAFAFA' },
        { name: 'neutral-100', value: '#F5F5F5' },
        { name: 'neutral-200', value: '#E5E5E5' },
        { name: 'neutral-300', value: '#D4D4D4' },
        { name: 'neutral-400', value: '#A3A3A3' },
        { name: 'neutral-500', value: '#737373' },
        { name: 'neutral-600', value: '#525252', textColor: '#fff' },
        { name: 'neutral-700', value: '#404040', textColor: '#fff' },
        { name: 'neutral-800', value: '#262626', textColor: '#fff' },
        { name: 'neutral-900', value: '#171717', textColor: '#fff' },
        { name: 'neutral-950', value: '#0A0A0A', textColor: '#fff' },
      ].map(s => <Swatch key={s.name} {...s} />)}
    </Section>
  ),
};

export const SemanticeFarver = {
  name: 'Semantiske farver (Light tema)',
  render: () => (
    <div>
      <Section title="Overflader">
        {[
          { name: 'background', value: '#FFFFFF', border: '1px solid #e5e5e5' },
          { name: 'card', value: '#FFFFFF', border: '1px solid #e5e5e5' },
          { name: 'muted', value: '#F5F5F5' },
        ].map(s => <Swatch key={s.name} {...s} />)}
      </Section>
      <Section title="Tekst">
        {[
          { name: 'foreground', value: '#0A0A0A', textColor: '#fff' },
          { name: 'muted-fg', value: '#737373', textColor: '#fff' },
        ].map(s => <Swatch key={s.name} {...s} />)}
      </Section>
      <Section title="Handlinger">
        {[
          { name: 'primary', value: '#171717', textColor: '#fff' },
          { name: 'primary-fg', value: '#FAFAFA' },
          { name: 'secondary', value: '#F5F5F5' },
          { name: 'secondary-fg', value: '#171717', textColor: '#fff' },
          { name: 'destructive', value: '#DC2626', textColor: '#fff' },
        ].map(s => <Swatch key={s.name} {...s} />)}
      </Section>
      <Section title="Grænser">
        {[
          { name: 'border', value: '#E5E5E5' },
          { name: 'focus-ring', value: '#D4D4D4' },
          { name: 'focus-ring-err', value: '#FCA5A5' },
        ].map(s => <Swatch key={s.name} {...s} />)}
      </Section>
    </div>
  ),
};

export const KKOrangeTema = {
  name: 'KK Orange tema',
  render: () => (
    <div data-theme="kk-orange" style={{ background: '#0A0A0A', padding: '24px', borderRadius: '10px' }}>
      <Section title="KK Orange tema — primær">
        {[
          { name: 'primary', value: '#EF3407', textColor: '#fff' },
          { name: 'primary-fg', value: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' },
          { name: 'background', value: '#0A0A0A', textColor: '#fff', border: '1px solid #333' },
          { name: 'foreground', value: '#FAFAFA', border: '1px solid rgba(255,255,255,0.2)' },
          { name: 'border', value: 'rgba(255,255,255,0.1)', border: '1px solid #555' },
          { name: 'ring', value: '#FF7133', textColor: '#fff' },
        ].map(s => <Swatch key={s.name} {...s} />)}
      </Section>
    </div>
  ),
};
