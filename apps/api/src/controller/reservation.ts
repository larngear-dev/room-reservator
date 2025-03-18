import { prisma } from "@repo/database";
import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { UserId, RoomId, Topic } = body;

    // Ensure required fields are provided
    if (!UserId || !RoomId || !Topic) {
      return c.json(
        { error: "Missing required fields" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a new reservation in the database
    const createReservation = await prisma.reservation.create({
      data: {
        UserId,
        RoomId,
        Topic,
        StartTime: new Date(),
        EndTime: new Date(),
        CreatedAt: new Date(),
        EditedAt: new Date(),
        Status: "Incomplete",
      },
    });

    return c.json(createReservation, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof Error) {
      return c.json(
        { error: error.message },
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
});

export default app;
