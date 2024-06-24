"use client";

import { Product } from "@/types/product";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Button, Chip, styled } from "@mui/material";
import { MouseEventHandler } from "react";

type ProductItemProps = Omit<Product, "id"> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ProductItemHeader = styled("span")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  fontSize: 16,
});

const ProductItemDescription = styled("span")({
  display: "block",
  marginTop: 8,
  fontWeight: "lighter",
  fontSize: 14,
});

export const ProductItem: React.FC<ProductItemProps> = ({
  onClick,
  ...product
}) => {
  return (
    <Button
      sx={{
        paddingX: 3,
        paddingY: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: "300px",
      }}
      color="secondary"
      variant="contained"
      onClick={onClick}
    >
      <ProductItemHeader>
        <Box
          component={"span"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ShoppingBagOutlined fontSize="small" />
          {product.title}
        </Box>
        <span>{product.price}</span>
      </ProductItemHeader>
      {product.description && (
        <ProductItemDescription>{product.description}</ProductItemDescription>
      )}
      {product.tag && (
        <Chip
          sx={{
            marginTop: 2,
            fontSize: 12,
            fontWeight: "normal",
            borderRadius: 1,
          }}
          label={product.tag}
        />
      )}
    </Button>
  );
};
