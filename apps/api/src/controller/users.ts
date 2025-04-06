import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "yy",
  });
});

// Show all reservations of that user
app.get("/:userId", async (c) => {
  try {
    const userId = parseInt(c.req.param("userId"));
    const userExists = await prisma.user.findUnique({
      where: { Id: userId },
    });
    if (!userExists) {
      return c.json({ error: "User not found" }, 404);
    }
    const allReservations = await prisma.reservation.findMany({
      where: {
        UserId: userId,
      },
    });
    return c.json(allReservations);
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

// Delete the selected reservation
app.post("/", async (c) => {
  try {
    const { reservationId } = await c.req.json();
    const reservationExists = await prisma.reservation.findUnique({
      where: { ReservationId: reservationId },
    });
    if (!reservationExists) {
      return c.json({ error: "Reservation not found." }, 404);
    }
    const deleteReservation = await prisma.reservation.delete({
      where: {
        ReservationId: reservationId,
      },
    });
    return c.json({ message: "Reservation deleted successfully." }, 404);
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
