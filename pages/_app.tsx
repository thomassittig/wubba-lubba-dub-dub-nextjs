import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import PageHeader from "../components/PageHeader";

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader title="Wubba lubba dub dub" />
      <Container maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
