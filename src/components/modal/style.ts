import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  boxStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
    overflow: "scroll",
    background: "white",
    border: "2px solid #000",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (max-width: 400px)": {
    boxStyle: {
      width: 320,
    },
  },
});

export { useStyles };
