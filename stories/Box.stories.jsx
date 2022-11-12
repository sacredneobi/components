import Component from "../src/box";

export default {
  component: Component,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    defFlex: {
      description:
        "Включение Flex по умолчанию flexDirection=column flexWrap=nowrap",
    },
    flex: {
      description: "Включение Flex",
    },
    column: {
      description: "Направление flexDirection",
    },
    row: {
      description: "Направление flexDirection",
    },
    grow: {
      description: "Занимаемость контейнера Flex",
    },
    nowrap: {
      description: "Перенос элементов",
    },
    alignItems: {
      description: "Выравнивание контейнера",
    },
    name: {
      description: "Название компонента",
    },
    center: {
      description: "Выравнивание по вертикали и горизонтали",
    },
    overflow: {
      description: "Скрытие элементов за пределами контейнера",
    },
    gap: {
      description: "Расстояние между элементами",
    },
    heightFull: {
      description: "Полная высота 100%",
    },
    heightVH: {
      description: "Полная высота 100vh",
    },
    widthFull: {
      description: "Полная ширина 100%",
    },
    justifyContent: {
      description: "Выравнивание компонента",
    },
    mT: {
      description: "Отступ с верху",
    },
    mB: {
      description: "Отступ с низу",
    },
    mL: {
      description: "Отступ с лева",
    },
    mR: {
      description: "Отступ с права",
    },
    m: {
      description: "Отступ по периметру",
    },
    p: {
      description: "Тиснение по периметру",
    },
    pT: {
      description: "Тиснение с верху",
    },
    pB: {
      description: "Тиснение с низу",
    },
    pL: {
      description: "Тиснение с лева",
    },
    pR: {
      description: "Тиснение с права",
    },
  },
};

const Template = (args) => (
  <div style={{ width: 400, height: 400, border: "1px solid #fff" }}>
    <Component
      {...args}
      sx={{ backgroundColor: "#fff", width: 100, height: 100 }}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...Component.defaultProps,
};
