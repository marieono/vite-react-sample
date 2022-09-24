import React from "react"
import ReactDOM from "react-dom/client"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"

const root = document.getElementById("root")

if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  )
}
