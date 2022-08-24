import { useEffect, useState } from "react";
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
import CommitsModal from "components/modal/CommitsModal";

type BrachDetails = {
  owner: string;
  repo: string;
};

type BranchDetails = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
};

type ModalInfo = {
  owner: string;
  repository: string;
  sha: string;
};

function CardDetailsTemplate({ owner, repo }: BrachDetails) {
  const { getOneRepo, cardDetail, loading } = useCardDetailsContext();

  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({} as ModalInfo);

  const openDetailsPopUp = (card: BranchDetails) => {
    setModalInfo({
      owner: owner,
      repository: repo,
      sha: card?.commit?.sha,
    });
    setOpenModal(true);
  };

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
                  <Button onClick={() => openDetailsPopUp(card)} size="small">
                    See commits
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p>não achei</p>
          )}
        </Grid>
      )}
      <CommitsModal
        modalInfo={modalInfo}
        setOpen={setOpenModal}
        open={openModal}
      />
    </Grid>
  );
}

export default CardDetailsTemplate;
