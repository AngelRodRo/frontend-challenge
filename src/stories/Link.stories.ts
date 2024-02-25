import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components/Link';

const meta = {
    title: 'Basics/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies  Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Some Link',
        href: '#'
    },
};