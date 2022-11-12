import Component from "../src/skeleton";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    widthFull: {
      description: "Полная ширина",
    },
    width: {
      description: "Ширина елемента",
    },
    height: {
      description: "Высота элемента",
    },
    animation: { description: "Типа анимации" },
    variant: { description: "Вариант отображение анимации" },
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
