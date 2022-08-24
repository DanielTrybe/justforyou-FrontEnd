import { useEffect } from "react";
import { useCardDetailsContext } from "hooks";
import { Typography, Box, Backdrop, Fade, Modal } from "@mui/material";

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  height: "80%",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function CommitModal({ modalInfo, setOpen, open }: PopupDetails) {
  const { getCommits, commits, loadingCommits } = useCardDetailsContext();
  console.log(commits);

  useEffect(() => {
    const { owner, repository, sha } = modalInfo;
    getCommits(owner, repository, sha);
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
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {commits.length > 0 ? (
            commits.map((commit) => (
              <>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {commit?.commit?.author?.name} -{" "}
                  {validDate(commit?.commit?.author?.date)}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mb: 2 }}>
                  {commit?.commit?.message}
                </Typography>
              </>
            ))
          ) : (
            <p>deu ruim</p>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default CommitModal;
