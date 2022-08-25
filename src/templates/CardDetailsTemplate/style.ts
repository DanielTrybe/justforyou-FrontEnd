import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  fatherClass: {
    marginTop: 15,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  childClass: {
    margin: 1,
    maxWidth: 320,
    minWidth: 320,
    minHeight: 165,
    maxHeight: 165,
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { useStyles };
