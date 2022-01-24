import App from "./App.svelte";
import "./assets/globals.scss";
import "./assets/themes.scss";

const app = new App({
  target: document.getElementsByClassName("app")[0],
});

export default app;
