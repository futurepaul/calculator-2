<script>
  import Calc from "../Calc.svelte";
  import distance from "./ascii/distancebetweentwopoints.asciimath";

  function genCalculator() {
    let title = "distance between two points";

    let inputs = [
      { name: "x1", value: "0" },
      { name: "y1", value: "0" },
      { name: "x2", value: "3" },
      { name: "y2", value: "4" }
    ];

    function equation(varbs) {
      // sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2);
      return `sqrt((${varbs[2].value} - ${varbs[0].value})^2 + (${
        varbs[3].value
      } -
        ${varbs[1].value})^2)`;
    }

    return [title, inputs, equation];
  }
</script>

<Calc algo={genCalculator} displaySvg={distance} />
