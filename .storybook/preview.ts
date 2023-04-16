import type { Preview } from "@storybook/react";
import '/stories/Import.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: 'hsl(240, 24%, 96%)',
        },
        {
          name: 'Dark',
          value: 'hsl(0, 0%, 5%)',
        },
      ],
    },
  },
};

export default preview;
