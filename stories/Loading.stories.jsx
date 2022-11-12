import Component from "../src/loading";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    animation: {
      description: "Плавное появление",
    },
    width: {
      description: "Ширина",
    },
    height: {
      description: "Высота",
    },
    timeout: {
      description: "Время появления",
    },
    enterDelay: {
      description: "Задержка перед появлением",
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
