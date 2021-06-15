import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import React from "react";
  import MenuIcon from "@material-ui/icons/Menu";
  import {Link} from "react-router-dom";
  import logo from "../images/logo.png"
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Header = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Link to="/">
                <img src={logo} alt ="logo"/>
            </Link>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              MTD BANK
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default Header;