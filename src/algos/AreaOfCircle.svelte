<script>
  import Calc from "../Calc.svelte";
  import area from "./ascii/areaofcircle.asciimath";

  function genCalculator() {
    let title = "area of a circle";

    let inputs = [{ name: "radius", value: "42" }];

    function equation(varbs) {
      //pi * r^2
      return `pi * ${varbs[0].value}^2`;
    }

    return [title, inputs, equation];
  }
</script>

<Calc algo={genCalculator} displaySvg={area} />
