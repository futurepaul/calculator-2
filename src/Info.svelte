<script>
  export let title;
  export let equation;
  export let displaySvg;
</script>

<style>
  p {
    font-size: 1em;
    font-family: "Roboto Mono", Menlo, monospace;
  }

  section {
    border: solid 2px rgb(101, 231, 140);
    margin-top: 1em;
    width: calc(20em - 4px);
  }

  h3 {
    font-family: "Roboto Mono", Menlo, monospace;
    background: rgb(101, 231, 140);
    padding: 0.5em;
    margin: 0;
  }

  div {
    padding: 0.5em;
  }
</style>

<section>
  <h3>{title}</h3>
  <div>
    <p>{equation}</p>
    {@html displaySvg}
  </div>

</section>
