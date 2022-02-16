import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>
        {/*title*/}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/*numberofcases*/}
        <h2 className="infoBox__cases">{cases}</h2>
        {/*total*/}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
