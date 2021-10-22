const { Router } = require("express");
const auth = require("../controllers/auth.controllers");
const user = require("../controllers/user.controllers");
const tasks = require("../controllers/task.controllers");
const { requireAuth } = require("../middlewares/auth.middlewares");
const router = Router();

router.get("/signup", auth.signup_get);

router.post("/signup", auth.signup_post);

router.get("/signin", auth.signin_get);

router.post("/users/signin", auth.signin_post); // working, done

router.get("/users/logout", requireAuth, auth.logout_get); //working, done

router.get("/users/me", requireAuth, user.user_get);

router.patch("/users/me", requireAuth, user.user_update);

router.delete("/users/me", requireAuth, user.delete_user);

router.post("/users/me/avatar", requireAuth, user.avatar_post);

router.delete("/users/me/avatar", requireAuth, user.avatar_delete);

router.get("/users/:id/avatar", requireAuth, user.avatar_get);

router.post("/tasks", requireAuth, tasks.task_post);

router.get("/tasks", requireAuth, tasks.task_get);

router.get("/create", requireAuth, (req, res) => {
  res.render("create");
});

router.get("/tasks/:id", requireAuth, tasks.task_getById);

router.patch("/tasks/:id", requireAuth, tasks.task_update);

router.delete("/tasks/:id", requireAuth, tasks.task_delete);

module.exports = router;
