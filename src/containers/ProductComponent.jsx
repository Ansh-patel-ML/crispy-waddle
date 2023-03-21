import React from "react";
import { useSelector } from "react-redux";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <ImageList
      sx={{ width: "100vw", height: "100vh" }}
      cols={4}
      rowHeight={500}
    >
      {products.map((item) => (
        <Link to={`/product/${item.id}`}>
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=164&h=164&fit=cover&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
