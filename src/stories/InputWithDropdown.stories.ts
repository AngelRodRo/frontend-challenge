import type { Meta, StoryObj } from "@storybook/react";

import { InputWithDropdown } from "../components/InputWithDropdown";

const meta = {
  title: "Basics/InputWithDropdown",
  component: InputWithDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputWithDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    options: ['Option 1']
  },
};
