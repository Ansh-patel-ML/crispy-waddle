import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import "./ProductDetails.css";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId;
  const productIdData = useSelector((state) =>
    state.allProducts.products.filter((val) => val.id === parseInt(productId))
  );
  console.log(productIdData);
  return (
    <div className="Product">
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={productIdData[0].image}
          title="Ansh"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productIdData[0].title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            category: {productIdData[0].category}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Price: {productIdData[0].price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Rating: {productIdData[0].rating.rate}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            No of Purchased: {productIdData[0].rating.count}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
