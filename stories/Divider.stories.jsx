import Component from "../src/divider";
import MUIButton from "../src/button";
import MUIText from "../src/text";
import { BrowserRouter } from "react-router-dom";

export default {
  component: Component,
  subComponent: { MUIButton, MUIText },
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    fix: {
      description: "Исправление при разметке помещает его в Box",
    },
    flexItem: {
      description: "Поддержка Flex box",
    },
    light: {
      description: "Толщина",
    },
    orientation: {
      description: "Направление выравнивания",
    },
    textAlign: {
      description: "Расположение элемента",
    },
    variant: {
      description: "Вариант отображение",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...Component.defaultProps,
};

const TemplateButton = (args) => (
  <BrowserRouter>
    <Component {...args}>
      <MUIButton {...args} variant={args.variantButton} />
    </Component>
  </BrowserRouter>
);

export const Button = TemplateButton.bind({});

const { variant, ...other } = MUIButton.defaultProps;

Button.args = {
  ...Component.defaultProps,
  ...other,
  variantButton: variant,
};

Button.argTypes = {
  variantButton: {
    control: { type: "select" },
    options: ["contained", "outlined", "text"],
  },
  help: { control: { type: "text" } },
  color: {
    control: { type: "select" },
    options: [
      "inherit",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning",
    ],
  },
};

const TemplateText = (args) => (
  <BrowserRouter>
    <Component {...args}>
      <MUIText {...args} />
    </Component>
  </BrowserRouter>
);

export const Text = TemplateText.bind({});

Text.args = {
  ...Component.defaultProps,
  ...MUIText.defaultProps,
  caption: "Пример строки",
};

Text.argTypes = {
  color: {
    control: { type: "select" },
    options: [
      "inherit",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning",
    ],
  },
};
