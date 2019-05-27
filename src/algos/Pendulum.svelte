<script>
  import Calc from "../Calc.svelte";
  import pendulum from "./ascii/pendulum.asciimath";

  function genCalculator() {
    let title = "period of a pendulum";

    let inputs = [
      { name: "length", value: "3" },
      { name: "gravity", value: "9.14" }
    ];

    function equation(varbs) {
      // 2 * pi * sqrt(length / gravity)
      return `2 * pi * sqrt(${varbs[0].value} / ${varbs[1].value})`;
    }

    return [title, inputs, equation];
  }
</script>

<Calc algo={genCalculator} displaySvg={pendulum} />
