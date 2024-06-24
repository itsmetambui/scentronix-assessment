import type { Meta, StoryObj } from "@storybook/react";
import { ActionMenu, ActionMenuTrigger, ActionMenuContent } from "./ActionMenu";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ActionMenu",
  component: ActionMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-action-menu",
    children: [
      <ActionMenuTrigger>Open Action Menu</ActionMenuTrigger>,
      <ActionMenuContent>
        <Box
          sx={{
            p: 2,
            backgroundColor: "white",
            marginRight: 2,
            border: "none",
          }}
        >
          Action Menu Content
        </Box>
      </ActionMenuContent>,
    ],
  },
};
