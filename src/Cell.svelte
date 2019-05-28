<script>
  export let title;
  export let value;
</script>

<style>
  input,
  h3 {
    font-size: 1em;
    padding: 0.5em;
    margin-top: -1px;
    font-family: "Roboto Mono", Menlo, monospace;
  }

  input {
    border: solid 2px black;
    width: calc(19em - 4px);
  }

  h3 {
    color: white;
    background: black;
    display: table-cell;
  }

  div {
    width: 100%;
    margin-top: 1em;
  }
</style>

<div>
  <h3>{title}</h3>
  <input bind:value />
</div>
