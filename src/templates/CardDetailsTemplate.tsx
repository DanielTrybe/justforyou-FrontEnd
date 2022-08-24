import { useEffect } from "react";
import { useCardDetailsContext } from "hooks";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

type BrachDetails = {
  owner: string;
  repo: string;
};

function CardDetailsTemplate({ owner, repo }: BrachDetails) {
  const { getOneRepo, cardDetail, loading } = useCardDetailsContext();

  useEffect(() => {
    getOneRepo(owner, repo);
  }, []);
  // .
  return (
    <Grid>
      {loading ? (
        <p>carregando</p>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          style={{ marginTop: 15 }}
        >
          {cardDetail.length > 0 ? (
            cardDetail.map((card) => (
              <Card
                sx={{ margin: 1, maxWidth: 320, minWidth: 320 }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card?.name}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ wordBreak: "break-all" }}
                  >
                    Branch ID: {card?.commit?.sha}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">See commits</Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>não achei</p>
          )}
        </Grid>
      )}
    </Grid>
  );
}

export default CardDetailsTemplate;
