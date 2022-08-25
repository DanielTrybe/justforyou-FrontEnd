import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useStyles, CustomTextField } from "./style";
import GitHubLogo from "images/github-logo.png";
import { useGitHubContext } from "hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  searchTerm: string;
}

const schema = yup
  .object({
    searchTerm: yup.string().required("Por favor, digite um usuário válido"),
  })
  .required();

export default function Header() {
  const history = useLocation();
  const navigate = useNavigate();

  const { setSearch } = useGitHubContext();
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      searchTerm: "DanielTrybe",
    },
  });

  const onSubmit = (formData: IFormInputs) => {
    setSearch(formData.searchTerm);
    if (history.pathname !== "/") {
      navigate("/");
    }
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <CustomTextField
            label="Search for a user"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "100%" }}
            value={value}
            onChange={onChange}
            data-testid="header-input"
            error={errors?.searchTerm ? true : false}
            helperText={errors?.searchTerm && errors?.searchTerm?.message}
          />
        )}
        name="searchTerm"
      />

      <Button
        type="submit"
        data-testid="header-btn"
        onClick={handleSubmit(onSubmit)}
      >
        Buscar
      </Button>
    </Grid>
  );
}
