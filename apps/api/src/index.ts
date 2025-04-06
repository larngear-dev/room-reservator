import { Hono } from "hono";
import reservation from "./controller/reservation";
import users from "./controller/users";
import { serve } from "@hono/node-server";

const app = new Hono().basePath("/api/v1");

app.route("/reservation", reservation);
app.route("/users", users);

app.get("/", (c) => {
  const parsedDate = new Date("2025-03-21T10:30:00.000Z");

  return c.json({
    message: "Hello Hono!",
    date: parsedDate.toISOString(),
    a: parsedDate.toLocaleString(),
    b: parsedDate.toUTCString(),
    c: parsedDate.toDateString(),
    d: Number(parsedDate),
  });
});

serve({
  fetch: app.fetch,
  port: 8787,
});

console.log("Server running on http://localhost:8787");

export default app;
