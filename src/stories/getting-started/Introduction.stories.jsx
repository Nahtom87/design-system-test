export default {
  title: 'Getting Started/Introduction',
  parameters: { layout: 'padded' },
};

const fontBase = "'IBM Plex Sans', system-ui, sans-serif";
const fontMono = "'IBM Plex Mono', monospace";

export const Introduction = {
  name: 'Introduction',
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: fontBase }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#0a0a0a', margin: '0 0 8px' }}>
        KK Group Design System
      </h1>
      <p style={{ fontSize: '16px', color: '#737373', margin: '0 0 40px', lineHeight: '24px' }}>
        A shared component library and visual language for KK Group products.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
        {[
          {
            title: 'Foundations',
            desc: 'Colors, typography, spacing, border radii, and shadow tokens that define the visual language.',
            href: '#',
          },
          {
            title: 'Design System',
            desc: 'Production-ready UI components built on shadcn/ui and Tailwind CSS v4.',
            href: '#',
          },
          {
            title: 'Patterns',
            desc: 'Composed UI patterns and page layouts assembled from design system components.',
            href: '#',
          },
          {
            title: 'Themes',
            desc: 'Three themes ship out of the box: light (default), dark, and kk-group (brand orange).',
            href: '#',
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            style={{
              padding: '20px',
              border: '1px solid #e5e5e5',
              borderRadius: '10px',
              background: '#fafafa',
            }}
          >
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', margin: '0 0 6px' }}>{title}</p>
            <p style={{ fontSize: '13px', color: '#737373', margin: 0, lineHeight: '20px' }}>{desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', margin: '0 0 12px' }}>Tech stack</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
        {['React', 'Vite', 'Tailwind CSS v4', 'shadcn/ui', 'Radix UI', 'IBM Plex Sans', 'Storybook 9'].map((t) => (
          <span
            key={t}
            style={{
              fontFamily: fontMono,
              fontSize: '12px',
              color: '#525252',
              background: '#f5f5f5',
              border: '1px solid #e5e5e5',
              borderRadius: '6px',
              padding: '3px 8px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', margin: '0 0 12px' }}>Theming</h2>
      <p style={{ fontSize: '14px', color: '#737373', lineHeight: '20px', margin: '0 0 12px' }}>
        Set <code style={{ fontFamily: fontMono, background: '#f5f5f5', padding: '1px 5px', borderRadius: '4px', fontSize: '12px' }}>data-theme</code> on any ancestor element to switch themes:
      </p>
      <div
        style={{
          fontFamily: fontMono,
          fontSize: '13px',
          background: '#171717',
          color: '#f5f5f5',
          borderRadius: '8px',
          padding: '16px 20px',
          lineHeight: '22px',
        }}
      >
        {'<html data-theme="dark">'}<br />
        {'<html data-theme="kk-group">'}
      </div>
    </div>
  ),
};
