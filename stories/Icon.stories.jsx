import Component from "../src/icon";
import iconItems from "../utils/iconItems";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    color: { control: "color" },
    textIcon: {
      options: iconItems.map((item) => item.caption),
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...Component.defaultProps,
  withOutAnimate: false,
  textIcon: "blur_circular",
};

export const Close = Template.bind({});

Close.args = {
  ...Component.defaultProps,
  textIcon: "close",
  withOutAnimate: false,
};
