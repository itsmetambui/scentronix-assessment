"use client";

import Popover from "@mui/material/Popover";
import Backdrop from "@mui/material/Backdrop";
import { createContext, useContext, useRef, useState } from "react";
import { Box, Button, ButtonProps, Fab, Theme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Slot } from "@radix-ui/react-slot";

type ActionMenuContextType = {
  id?: string;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (e: HTMLButtonElement | null) => void;
};

const ActionMenuContext = createContext<ActionMenuContextType>({
  anchorEl: null,
  setAnchorEl: (e: HTMLButtonElement | null) => {},
});

const useActionMenuContext = () => {
  const actionMenuContext = useContext(ActionMenuContext);

  if (!actionMenuContext) {
    throw new Error(
      "useActionMenuContext has to be used within <ActionMenuContext.Provider>"
    );
  }

  return actionMenuContext;
};

type ActionMenuProps = {
  id?: string;
  children: React.ReactNode;
};

export const ActionMenu: React.FC<ActionMenuProps> = ({
  id: propsId,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? propsId : undefined;

  return (
    <ActionMenuContext.Provider
      value={{
        id,
        anchorEl,
        setAnchorEl,
      }}
    >
      {children}
    </ActionMenuContext.Provider>
  );
};

type ActionMenuTriggerProps = ButtonProps & {
  asChild?: boolean;
};

export const ActionMenuTrigger = ({
  asChild = false,
  children,
  ...props
}: ActionMenuTriggerProps) => {
  const anchorRef = useRef<HTMLButtonElement>(null);

  const { id, anchorEl, setAnchorEl } = useActionMenuContext();
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setAnchorEl(anchorRef.current);
  };

  const Comp = asChild ? Slot : Button;

  return (
    <Box ref={anchorRef}>
      <Comp
        {...props}
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          display: !open ? "inline-flex" : "none",
        }}
      >
        {children}
      </Comp>
      <Fab
        onClick={() => setAnchorEl(null)}
        color="secondary"
        size="small"
        sx={{
          zIndex: (theme: Theme) => theme.zIndex.modal + 1,
          display: open ? "inline-flex" : "none",
        }}
      >
        <Close />
      </Fab>
    </Box>
  );
};

type ActionMenuContent = {
  children: React.ReactNode;
};

export const ActionMenuContent = ({ children }: ActionMenuContent) => {
  const { id, anchorEl, setAnchorEl } = useActionMenuContext();
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  return (
    <Backdrop
      open={open}
      onClick={handleClose}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {open && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: "none",
                background: "transparent",
              },
            },
          }}
        >
          {children}
        </Popover>
      )}
    </Backdrop>
  );
};
