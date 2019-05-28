const loaderUtils = require("loader-utils");

var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

async function getSvgFromMath(source, options) {
  return mjAPI
    .typeset({
      math: source,
      format: options.format, // or "inline-TeX", "MathML"
      svg: true // or svg:true, or html:true
    })
    .then(result => result.svg)
    .catch(error => {
      console.log(error);
      return `<svg viewBox = "0 0 100 100" version = "1.1">
                <text x = "0" y = "10" fill = "red" font-size = "15">
                  Invalid math input!
                </text>
              </svg>`;
    });
}

module.exports = function mathToSvgLoader(source) {
  const options = loaderUtils.getOptions(this);

  let svg = getSvgFromMath(source, options);
  console.log(source);
  return svg;
};
