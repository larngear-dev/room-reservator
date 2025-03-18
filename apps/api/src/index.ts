import { Hono } from "hono";
import reservation from "./controller/reservation";
import users from "./controller/users";

const app = new Hono().basePath("/api/v1");

app.route("/reservation", reservation);
app.route("/users", users);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
