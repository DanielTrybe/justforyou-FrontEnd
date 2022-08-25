import {
  Typography,
  Grid,
  Paper,
  Card,
  CardHeader,
  Tooltip,
  CardContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Card as CardType } from "services/context/types";
import { PopoverCustom } from "components/Items";
import { useStyles } from "./style";

function CompactCard({ card, index }: CardType) {
  const classes = useStyles();
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
      <div data-testid={`card-${index}-card`}>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton
                onClick={() => navigate(`/${card?.owner?.login}/${card?.name}`)}
                aria-label="settings"
              >
                <Tooltip title="See branch Details" placement="left-start">
                  <InfoIcon />
                </Tooltip>
              </IconButton>
            }
            title={<span data-testid={`card-${index}-name`}>{card.name}</span>}
            className={classes.cardHeader}
          />

          <Grid>
            <CardContent>
              <button className={classes.btnLinks}>
                <a
                  href={`https://github.com/${card?.owner?.login}/${card?.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                  data-testid={`card-${index}-githubBtn`}
                >
                  Navigate to GitHub page
                </a>
              </button>

              <button
                onClick={() => navigate(`/${card?.owner?.login}/${card?.name}`)}
                className={classes.btnLinks}
                data-testid={`card-${index}-detailBranchBtn`}
              >
                Navigate to branch details page
              </button>
            </CardContent>

            <Grid style={{ textAlign: "center", marginBottom: 10 }}>
              <span data-testid={`card-${index}-pop`}>
                <PopoverCustom card={card} children={content} />
              </span>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Paper>
  );
}

export default CompactCard;
