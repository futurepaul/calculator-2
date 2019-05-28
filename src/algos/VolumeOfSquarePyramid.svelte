<script>
  import Calc from "../Calc.svelte";
  import volume from "./ascii/volumeofsquarepyramid.asciimath";

  function genCalculator() {
    let title = "volume of a square pyramid";

    let inputs = [
      { name: "base length", value: "5" },
      { name: "height", value: "10" }
    ];

    function equation(varbs) {
      //1/3 (b^2) * h
      return `1/3 * (${varbs[0].value}^2) * ${varbs[1].value}`;
    }

    return [title, inputs, equation];
  }
</script>

<Calc algo={genCalculator} displaySvg={volume} />
