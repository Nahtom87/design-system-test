/* Shared presentational helpers for component documentation pages.
   Keeps every *.mdx page consistent and concise. Import in MDX:
     import { Guidelines, Do, Dont } from '../stories/_doc';
*/

export const Guidelines = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '16px',
      margin: '16px 0',
    }}
  >
    {children}
  </div>
);

const Card = ({ accent, label, items }) => (
  <div
    style={{
      border: `1px solid ${accent}`,
      borderRadius: '8px',
      padding: '16px',
      background: `color-mix(in oklch, ${accent} 7%, transparent)`,
    }}
  >
    <strong style={{ color: accent, display: 'block', marginBottom: '8px' }}>{label}</strong>
    <ul style={{ margin: 0, paddingLeft: '18px' }}>
      {items.map((t, i) => (
        <li key={i} style={{ marginBottom: '6px', lineHeight: 1.4 }}>{t}</li>
      ))}
    </ul>
  </div>
);

export const Do = ({ items = [] }) => (
  <Card accent="#16a34a" label="✅ Do" items={items} />
);

export const Dont = ({ items = [] }) => (
  <Card accent="#dc2626" label="🚫 Don't" items={items} />
);
