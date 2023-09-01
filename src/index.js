import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Component/GlobalStyle";
import App from "./App";

import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
);
