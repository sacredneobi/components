import { BrowserRouter } from "react-router-dom";
import Component from "../src/button";
import iconItems from "../utils/iconItems";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    textIcon: {
      options: iconItems.map((item) => item.caption),
      control: { type: "select" }, // Automatically inferred when 'options' is defined
      description: "Иконка из набора google font icons",
    },
    navigation: {
      description: "Ссылка для перехода по Router",
    },
    color: {
      description: "Цвет из MUI перечислимое используется цвета темы",
    },
    caption: {
      description: "Заголовок отображаемый внутри",
    },
    variant: {
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
    onClick: {
      table: {
        disable: true,
      },
    },
    // height: {
    //   control: { type: "range", min: 200, max: 1500, step: 50 },
    // },
    // width: {
    //   control: { type: "number", min: 400, max: 1200, step: 50 },
    // },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Component {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

// Default.parameters = { controls: { exclude: ["onClick"] } };

Default.args = {
  ...Component.defaultProps,
};
