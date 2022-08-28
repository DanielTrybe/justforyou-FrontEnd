import { Card } from "services/context/types";
import { Grid } from "@mui/material";

import { CompactCard } from "components/Items";
import { DataCards } from "services/context/types";

type CardProps = {
  index: number;
  card: DataCards;
};

function CardShow({ card, index }: CardProps) {
  return (
    <Grid>
      <CompactCard card={card} index={index} />
    </Grid>
  );
}

export default CardShow;
