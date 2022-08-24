import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useStyles, CustomTextField } from "./style";
import GitHubLogo from "images/github-logo.png";
import { useGitHubContext } from "hooks";

export default function Header() {
  const { search, setSearch, getUserGitHub } = useGitHubContext();

  const classes = useStyles();
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
      <Button data-testid="header-btn" onClick={() => getUserGitHub()}>
        Buscar
      </Button>
    </Grid>
  );
}
