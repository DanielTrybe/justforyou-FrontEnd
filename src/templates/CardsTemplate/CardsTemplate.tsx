import { Grid, Typography } from "@mui/material";
import { useGitHubContext } from "hooks";
import { CardShow } from "components/Items";
import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

function CardsTemplate() {
  const classes = useStyles();
  const { cardsList, loading } = useGitHubContext();

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Repositories
      </Typography>
      <Grid className={classes.cards}>
        {loading ? (
          <SkeletonCustom
            length={12}
            childClass={classes.childClass}
            fatherClass={classes.cards}
          />
        ) : cardsList?.length > 0 ? (
          cardsList.map((card, index) => (
            <Grid key={index}>
              <CardShow card={card} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" className={classes.notFoundText}>
            Não encontrei nenhum usuário do GitHub com o termo pesquisado, tente
            novamente.
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default CardsTemplate;
