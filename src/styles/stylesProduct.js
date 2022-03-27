import { makeStyles } from "@material-ui/core/styles";

// another callback function inside of there with an instant return
// wrapped in parantheses and then return an object
export default makeStyles(() => ({
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  root: {
    maxWidth: "100%",
  },
}));
