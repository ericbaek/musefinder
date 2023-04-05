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
      default: 'White',
      values: [
        {
          name: 'White',
          value: 'hsl(0, 0%, 100%)',
        },
        {
          name: 'Black',
          value: 'hsl(0, 0%, 0%)',
        },
        {
          name: 'Muse',
          value: 'hsl(270, 88%, 70%)',
        },
        {
          name: 'Water',
          value: 'hsl(211, 100%, 67%)',
        },
        {
          name: 'Sand',
          value: 'hsl(39, 94%, 63%)',
        },
        {
          name: 'Coral',
          value: 'hsl(0, 86%, 69%)',
        },
      ],
    },
  },
};



export default preview;
