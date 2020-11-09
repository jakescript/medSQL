const express = require('express');
const router = express.Router();

const {client,
  getUsers,
  getUser,
  getUserMeds,
  createUser,
  deleteUser,
  createMedForUser}  = require("../db/index");

const userView = require("../views/userList");
const medView = require("../views/details");


router.get("/", async (req, res, next) => {
  try {
    res.send(userView(await getUsers()))
  } catch (error) { next(error) }
});

router.get("/:id", async (req, res, next) => {
  try {
    const [meds, user] = await Promise.all([
      getUserMeds(req.params.id),
      getUser(req.params.id)
    ])

    res.send(medView(meds, user))
  } catch (error) { next(error) }
});

router.post("/create", async (req, res, next) => {
  try {
    await createUser(req.body);
    res.redirect("/users")
  } catch (error) { next(error) }
});

router.post("/:id/addmed", async (req, res, next) => {
  try {
    await createMedForUser(req.body, req.params.id);
    res.redirect(`/users/${req.params.id}`)
  } catch (error) { next(error) }
});

router.delete("/:id", async (req, res, next) => {
  await deleteUser(req.params.id);
  res.redirect("/users");
})

module.exports = router;

