import Component from "../src/icon";
import iconItems from "../utils/iconItems";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    color: { control: "color", description: "Цвет заливки иконки" },
    textIcon: {
      options: iconItems.map((item) => item.caption),
      control: { type: "select" },
      description: "Иконка",
    },
    className: {
      description: "Тип отображение для компонента",
    },
    help: {
      description: "Подсказка при наведении",
    },
    enterDelay: {
      description: "Задержка появления подсказки",
    },
    timeout: {
      description: "Время до скрытия подсказки",
    },
    size: {
      description: "Размер иконки и/или индикатора загрузки",
    },
    withOutAnimate: {
      description: "Без анимации при показе",
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
