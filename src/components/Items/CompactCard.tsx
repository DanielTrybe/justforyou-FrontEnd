import {
  Typography,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

import { Card as CardType } from "services/context/types";
import { PopoverCustom } from "components/Items";

function CompactCard({ card }: CardType) {
  const navigate = useNavigate();

  const content = (
    <Typography style={{ padding: 5 }}>
      <Grid
        style={{
          border: "1px solid lightgray",
          borderRadius: 5,
          marginBottom: 5,
        }}
      >
        <Typography sx={{ p: 1 }}>Watchers: {card?.watchers}</Typography>

        <Typography sx={{ p: 1 }}>Starred: {card?.stargazers_count}</Typography>
      </Grid>
    </Typography>
  );

  return (
    <Paper elevation={2}>
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          minHeight: 200,
          maxHeight: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          action={
            <IconButton
              onClick={() => navigate(`/${card?.owner?.login}/${card?.name}`)}
              aria-label="settings"
            >
              <InfoIcon />
            </IconButton>
          }
          title={card.name}
          sx={{ maxHeight: 200, overflow: "hidden" }}
          // subheader={card.name}
        />
        {/* <CardMedia
          component="img"
          height="475"
          image={card.images.small}
          alt=""
        /> */}
        <Grid>
          <CardContent>
            <Typography align="center" variant="body2" color="text.secondary">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${card?.owner?.login}/${card?.name}`}
              >
                Click here to navigate to GitHub page
              </a>
            </Typography>
          </CardContent>

          <Grid style={{ textAlign: "center", marginBottom: 10 }}>
            <PopoverCustom card={card} children={content} />
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
}

export default CompactCard;
