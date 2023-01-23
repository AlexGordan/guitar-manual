import React from "react";

// helpers
import "./index.css";
import "./resources/theme/antd/antd.less";
import "./resources/theme/antd/antd.scss";

import { theme } from "./resources/theme/styled";
import { GlobalStyle } from "./resources/theme/styled/global";

// components
import App from "./App";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
