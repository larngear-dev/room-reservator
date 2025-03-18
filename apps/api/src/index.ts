import { Hono } from "hono";
import reservation from "./controller/reservation";
import users from "./controller/users";
import { serve } from "@hono/node-server";

const app = new Hono().basePath("/api/v1");

app.route("/reservation", reservation);
app.route("/users", users);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({
  fetch: app.fetch,
  port: 8787,
});

console.log("Server running on http://localhost:8787");

export default app;
