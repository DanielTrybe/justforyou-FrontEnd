import { Grid } from "@mui/material";
import { useGitHubContext } from "hooks";
import { CardShow } from "components/Items";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    gap: 10,
    padding: 5,
    marginTop: 5,
  },
});

// criar icones e colocar nos ataques

function CardsTemplate() {
  const classes = useStyles();
  const { cardsList, loading } = useGitHubContext();

  return (
    <Grid className={classes.cards}>
      {loading ? (
        <p>carregando...</p>
      ) : cardsList?.length > 0 ? (
        cardsList.map((card, index) => (
          <Grid key={index}>
            <CardShow card={card} />
          </Grid>
        ))
      ) : (
        <p>procure por um usuário do GitHub</p>
      )}
    </Grid>
  );
}

export default CardsTemplate;
