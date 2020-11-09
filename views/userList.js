const html = require("html-template-tag");
const { head, nav } = require("./templates")

const userView = (arr) => `<html lang="en">
${head({title: "Users"})}
<body>
  ${nav()}
  <h1> Current Patients </h1>
  <div id="form-container">
    <form method="POST" action="/users/create">
      <input name="name" placeholder="name"/>
      <input name="age" placeholder="age"/>
      <button> Create </button>
    </form>
  </div>
  <div id="users-container">
  ${arr.map(r => html`<div class="user">
    <form method="POST" action="/users/${r.id}?_method=DELETE">
      <button class="submit">X</button>
    </form>
    <a href="/users/${r.id}"> ${r.name} </a>
    <p>age: ${r.age} </p>
  </div>`).join('')}
  </div>
</body>
</html>
`

module.exports = userView;
