const head = ({title}) => `
  <head>
    <link rel="stylesheet" href="/assets/styles.css"/>
    <title>${title}</title>
  </head>
`;

const nav = () => `
  <ul id="nav">
    <li> <a href="/">Home</a></li>
    <li> <a href="/users">Users</a></li>
    <li> <a href="/users/create">Add User</a></li>
  </ul>
`

module.exports = {
  head,
  nav
}
