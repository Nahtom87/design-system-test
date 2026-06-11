import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'KK Group tema',
      defaultValue: 'light',
      toolbar: {
        title: 'Tema',
        icon: 'paintbrush',
        items: [
          { value: 'light',     title: 'Light',     left: '☀️' },
          { value: 'dark',      title: 'Dark',      left: '🌙' },
          { value: 'kk-group', title: 'KK Group', left: '🟠' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const bg = theme === 'light' ? '#ffffff' : '#0a0a0a';
      // In docs, each Canvas should fit its content; only fill the viewport
      // in the standalone story view.
      const isDocs = context.viewMode === 'docs';
      return (
        <div
          data-theme={theme}
          style={{ background: bg, padding: '24px', minHeight: isDocs ? 'auto' : '100vh' }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Getting Started', 'Foundations', 'Design System', 'Patterns'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
