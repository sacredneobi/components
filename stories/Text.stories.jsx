import { BrowserRouter } from "react-router-dom";
import Component from "../src/text";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    navigation: {
      description: "Ссылка для перехода по Router",
    },
    color: {
      description: "Цвет из MUI перечислимое используется цвета темы",
    },
    caption: {
      description: "Заголовок отображаемый внутри",
    },
    help: {
      description: "Подсказка при наведении",
    },
    allowSelect: {
      description: "Возможность выделать текст мышкой",
    },
    bold: {
      description: "Выделение текста жирным",
    },
    enterDelay: {
      description: "Задержка появления подсказки",
    },
    timeout: {
      description: "Время до скрытия подсказки",
    },
    noWrap: {
      description: "Запрет переноса текста на новую строку",
    },
    fontSize: {
      description: "Высота шрифта",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Component {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  ...Component.defaultProps,
};
