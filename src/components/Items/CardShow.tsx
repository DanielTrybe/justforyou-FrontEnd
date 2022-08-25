import { Card } from "services/context/types";
import { Grid } from "@mui/material";

import { CompactCard } from "components/Items";

type CardProps = {
  index: number;
  card: any;
};

function CardShow({ card, index }: CardProps) {
  return (
    <Grid>
      <CompactCard card={card} index={index} />
    </Grid>
  );
}

export default CardShow;
