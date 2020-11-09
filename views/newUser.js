const html = require("html-template-tag");
const { head, nav} = require("./templates")

const newUser = () => `<html lang="en">
${head({title: "New Users"})}
<body>
  ${nav()}
  <h1> New User </h1>
  <div id="form-container">
    <form method="POST">
      <input name="name" placeholder="name"/>
      <input name="age" placeholder="age"/>
      <button> Create </button>
    </form>
  </div>
</body>
</html>
`
module.exports = newUser
