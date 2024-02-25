import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge";

const meta = {
  title: "Basics/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Hello World",
  },
};
