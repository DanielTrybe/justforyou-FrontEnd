import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useStyles, CustomTextField } from "./style";
import GitHubLogo from "images/github-logo.png";
import { useGitHubContext } from "hooks";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const history = useLocation();
  const navigate = useNavigate();
  console.log(history);
  const { search, setSearch, getUserGitHub } = useGitHubContext();
  const classes = useStyles();

  const searchUser = () => {
    if (history.pathname !== "/") {
      navigate("/");
    }
    getUserGitHub();
  };

  return (
    <Grid className={classes.header}>
      <Box
        sx={{
          width: 100,
        }}
      >
        <img
          data-testid="header-logo"
          src={GitHubLogo}
          width="100px"
          alt="logo"
        />
      </Box>
      <CustomTextField
        label="Search for a user"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "100%" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="header-input"
      />
      <Button data-testid="header-btn" onClick={() => searchUser()}>
        Buscar
      </Button>
    </Grid>
  );
}
