const html = require("html-template-tag");
const { head, nav} = require("./templates")

const medView = (meds, user) => `<html lang="en">
${head({title: "User"})}
<body>
  ${nav()}
  <div class="container">
    <h1> ${user.name} </h1>
    <h3> Medications </h3>
    <div>
      <form method="POST" action="/users/${user.id}/addmed">
        <input name="med_name" />
        <input name="dose" />
        <button> Add Medication </button>
      </form>
    </div>
    <div id="med-container">
      ${meds.map(m => html`<div class="med-item">
        <h3>${m.med_name}</h3>
        <p>Dosage: ${m.dose}</p>
      </div>`).join("")}
    </div>
  </div>
</body>
</html>
`
module.exports = medView
