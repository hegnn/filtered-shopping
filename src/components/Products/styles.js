import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 0.9,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
    marginTop: "20px",
    fontWeight: "bolder",
    fontSize: "55px"
  }
  
}));