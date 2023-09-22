'use client';
import Link from "next/link";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const NavigationLinks = [
  { id: 1, name: "Home", link: "./" },
  { id: 2, name: "About Us", link: "./about-us" },
  { id: 3, name: "Contact", link: "./contact" },
];

const Navigation = () => {
  const theme = useTheme();
  const LinkButton = styled(Link)(({theme}) => ({
    color: grey[50],
    textDecoration: 'none',
  }))
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6">Logo</Typography>
        <Box sx={{ display: { xs: 'flex' } }}>
          {NavigationLinks.map((menus) => (
            <Button
              key={menus.id}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <LinkButton href={menus.link}>{menus.name}</LinkButton>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
