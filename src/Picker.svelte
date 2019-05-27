<script>
  import Pendulum from "./algos/Pendulum.svelte";
  import AreaOfCircle from "./algos/AreaOfCircle.svelte";
  import DistanceBetweenTwoPoints from "./algos/DistanceBetweenTwoPoints.svelte";

  export let selected = Pendulum;
</script>

<style>
  aside {
    border: solid 2px pink;
    width: 20em;
    margin-top: 1em;
    width: calc(20em - 4px);
    background-color: pink;
    display: flex;
    flex-direction: column;
    font-family: "Roboto Mono", Menlo, monospace;
  }

  h3 {
    font-family: "Roboto Mono", Menlo, monospace;
    background: pink;
    padding: 0.5em;
    margin: 0;
  }

  button {
    font-family: "Roboto Mono", Menlo, monospace;
    background-color: white;
    border: solid 2px black;
    padding: 0.5em;
    font-size: 1em;
    margin: 0.5em;
  }
</style>

<aside>
  <h3>Pick an equation!</h3>
  <button on:click={() => (selected = Pendulum)}>period of a pendulum</button>
  <button on:click={() => (selected = AreaOfCircle)}>area of a circle</button>
  <button on:click={() => (selected = DistanceBetweenTwoPoints)}>
    distance between two points
  </button>
</aside>
