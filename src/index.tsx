import React from "react";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);

root.render(<h1>a041-test-project - Currencies Academic Terms</h1>);