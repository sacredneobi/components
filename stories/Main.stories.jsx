import { BrowserRouter } from "react-router-dom";
import Component from "../src/main";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    transitionDelay: {
      description: "Время анимации появления",
    },
    caption: {
      description: "Заголовок отображаемый внутри",
    },
    error: {
      description: "Тип сообщения ошибка",
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
