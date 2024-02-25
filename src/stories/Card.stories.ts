import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../components/Card";

const meta = {
  title: "Basics/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello World",
  },
};

export const Selected: Story = {
  args: {
    children: "Hello World",
    selected: true,
  },
};
