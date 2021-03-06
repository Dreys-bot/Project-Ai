import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "20px",
    width: "90%",
    height: "45vh",
    borderRadius: 10,
    color: "white",
    padding: "2%"
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
});
