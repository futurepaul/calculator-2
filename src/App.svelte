<script>
  import Pendulum from "./algos/Pendulum.svelte";
  import Picker from "./Picker.svelte";

  let selected;
</script>

<style>
  main {
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
  }

  main > div {
    width: 20em;
    margin: 1em;
  }

  h1 {
    font-size: 2em;
    margin: 0;
    margin-top: 0.5em;
    font-family: "Roboto Mono", Menlo, monospace;
  }

  hr {
    height: 3px;
    background: rgb(101, 231, 140);
    border: none;
  }
</style>

<main>
  <div>
    <h1>Calculator 2</h1>
    <hr />

    <svelte:component this={selected} />

  </div>
  <div>
    <Picker bind:selected />
  </div>

</main>
