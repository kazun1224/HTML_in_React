import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <div>Hello from script</div>;
};

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}
