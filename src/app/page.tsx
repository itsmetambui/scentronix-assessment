import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { AddToCart } from "@/components/AddToCart";
import { ExampleCodeBlock } from "@/components/ExampleCodeBlock";
import { Stack } from "@mui/material";

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

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      <Stack
        sx={{
          border: "2px dashed gray",
          borderRadius: { xs: 2, md: 4 },
          width: "100%",
          p: { xs: 2, md: 4 },
          gap: 2,
        }}
      >
        <Box
          sx={{
            height: "100%",
            flex: 1,
            overflow: "auto",
            position: "relative",
            fontSize: { xs: 12, md: 16 },
          }}
        >
          <ExampleCodeBlock />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AddToCart options={products} />
            <AddToCart options={products} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
