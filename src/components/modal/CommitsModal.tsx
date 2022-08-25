import { useEffect } from "react";
import { useCardDetailsContext } from "hooks";
import { Typography, Box, Backdrop, Fade, Modal, Grid } from "@mui/material";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";

type PopupDetails = {
  modalInfo: {
    owner: string;
    repository: string;
    sha: string;
  };
  setOpen: (value: boolean) => void;
  open: boolean;
};

function CommitModal({ modalInfo, setOpen, open }: PopupDetails) {
  const classes = useStyles();
  const { getCommits, commits, loadingCommits } = useCardDetailsContext();

  useEffect(() => {
    if (open) {
      const { owner, repository, sha } = modalInfo;
      getCommits(owner, repository, sha);
    }
  }, [modalInfo?.sha]);

  const handleClose = () => setOpen(false);

  const validDate = (date: string) => {
    const valid = isValid(new Date(date));
    return valid
      ? format(new Date(date), "dd/MM/yyyy hh:mm:ss")
      : "Data inválida";
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      keepMounted={false}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {loadingCommits ? (
        <p>carregando</p>
      ) : (
        <Fade in={open}>
          <Box className={classes.boxStyle}>
            {commits.length > 0 ? (
              commits.map((commit) => (
                <>
                  <Typography variant="h6" component="h2">
                    {commit?.commit?.author?.name} -{" "}
                    {validDate(commit?.commit?.author?.date)}
                  </Typography>

                  <Typography
                    sx={{
                      mb: 2,
                    }}
                  >
                    {commit?.commit?.message}
                  </Typography>
                </>
              ))
            ) : (
              <Typography variant="h6" className={classes.notFoundText}>
                Não encontrei nenhum commit para esta branch, tente novamente.
              </Typography>
            )}
          </Box>
        </Fade>
      )}
    </Modal>
  );
}

export default CommitModal;
