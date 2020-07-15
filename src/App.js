import React from 'react';
import './App.css';
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import GoogleFontLoader from 'react-google-font-loader';
import Landing from './components/landing.component';


function App() {

  let theme = createMuiTheme({
    typography: {
      fontFamily: "Work Sans",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleFontLoader
        fonts={[
          {
            font: 'Montserrat',
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          },
          {
            font: 'Raleway',
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          },
          {
            font: 'Work Sans',
            weights: [0, 100, 0, 200, 0, 300, 0, 400, 0, 500, 0, 531, 0, 600, 0, 700, 0, 800, 1, 531],
          },
          {
            font: 'Plaster',
            weights: [400],
          },
          {
            font: 'DM Serif Display',
            weights: [400],
          }
        ]}
      />
      <Container style={{ padding: "10px" }}>
        <Landing/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
