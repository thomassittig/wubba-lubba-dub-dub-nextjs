import * as React from "react";
import { Toolbar, Typography } from "@mui/material";
import { AppProps } from "next/app";

interface PageHeaderProps {
  title: string;
}

const PageHeader = (props: PageHeaderProps) => {
  const { title } = props;

  return (
    <Toolbar>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
    </Toolbar>
  );
};

export default PageHeader;
