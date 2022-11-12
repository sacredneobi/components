import { themes } from "@storybook/theming";
import { muiTheme } from "storybook-addon-material-ui5";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const argTypes = {
  loading: {
    description: "Индикатор загрузки и блокировка элемента",
  },
};

export const decorators = [muiTheme()];
