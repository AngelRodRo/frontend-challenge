import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonVariants } from "../components/Button";

const meta = {
  title: "Basics/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello World",
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariants.secondary,
    children: "Hello World",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Hello World",
    fullWidth: true,
  },
};
