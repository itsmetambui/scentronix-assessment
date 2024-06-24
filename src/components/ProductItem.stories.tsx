import type { Meta, StoryObj } from "@storybook/react";
import { ProductItem } from "./ProductItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ProductItem",
  component: ProductItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const products = [
  {
    id: 1,
    title: "50ml",
    price: "$80.00",
  },
  {
    id: 2,
    title: "30ml",
    price: "$60.00",
    description: "An optional description",
  },
  {
    id: 3,
    title: "20ml",
    price: "$40.00",
    description: "An optional description",
    tag: "2 x 20ml for $70.00",
  },
  {
    id: 4,
    title: "5ml",
    price: "$15.00",
    tag: "3 x 5ml for $40.00",
  },
];

export const Default: Story = {
  args: {
    ...products[0],
  },
};

export const WithDescription: Story = {
  args: {
    ...products[1],
  },
};

export const WithTag: Story = {
  args: {
    ...products[3],
  },
};

export const WithDescriptionAndTag: Story = {
  args: {
    ...products[2],
  },
};
