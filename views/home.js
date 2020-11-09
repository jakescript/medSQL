const {head, nav} = require("./templates")

const newUser = () => `<html lang="en">
${head({title: "medSQL"})}
<body>
  ${nav()}
  <h1> medSQL </h1>

</body>
</html>
`
module.exports = newUser
