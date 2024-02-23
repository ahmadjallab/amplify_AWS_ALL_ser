import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";


const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
