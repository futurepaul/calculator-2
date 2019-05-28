<script>
  import * as wasm from "rsc-wasm-wrapper";

  import { fade } from "svelte/transition";

  import Cell from "./Cell.svelte";
  import Info from "./Info.svelte";
  import Output from "./Output.svelte";

  export let algo;
  export let displaySvg;

  function doMath(input) {
    try {
      return wasm.my_eval(input);
    } catch (error) {
      console.log(error);
      return "???";
    }
  }

  let [title, varbs, equation] = algo();

  $: displayOutput = equation(varbs);
  $: output = doMath(displayOutput);
</script>

<style>

</style>

<div in:fade>
  {#each varbs as varb}
    <Cell title={varb.name} bind:value={varb.value} />
  {/each}
  <Info {title} equation={displayOutput} {displaySvg} />
  <Output {output} />
</div>
