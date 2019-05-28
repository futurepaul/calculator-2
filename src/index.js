import App from "./App.svelte";
import "../normalize.css";

const app = new App({
  target: document.body,
  intro: true,
  props: {
    name: "hoo boy"
  }
});

export default app;
