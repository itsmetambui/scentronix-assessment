"use client";

import { Button, Container, Stack, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ActionMenu, ActionMenuContent, ActionMenuTrigger } from "./ActionMenu";
import { AddShoppingCart } from "@mui/icons-material";
import { ProductItem } from "./ProductItem";
import React from "react";
import { Product } from "@/types/product";

type AddToCartProps = {
  options: Product[];
};
const AddToCart = ({ options }: AddToCartProps) => {
  const [open, setOpen] = React.useState(false);

  const handleItemClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <ActionMenu>
        <ActionMenuTrigger asChild>
          <Button
            variant="contained"
            size="medium"
            startIcon={<AddShoppingCart />}
          >
            Buy
          </Button>
        </ActionMenuTrigger>
        <ActionMenuContent>
          <Container
            maxWidth="md"
            sx={{
              paddingX: { xs: 2 },
              minWidth: {
                md: 400,
              },
            }}
          >
            <Stack gap={1}>
              {options.map(({ id, ...item }) => (
                <ProductItem key={id} {...item} onClick={handleItemClick} />
              ))}
            </Stack>
          </Container>
        </ActionMenuContent>
      </ActionMenu>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item added to cart"
        action={action}
      />
    </>
  );
};

export { AddToCart };
