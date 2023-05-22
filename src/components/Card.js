import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function ImgCard(props) {
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_m.jpg`;
  return (
    <Card sx={{ width: "20%" }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={url} alt={props.title} />
      </CardActionArea>
    </Card>
  );
}
