import { Calendar } from "@/components/ui/calendar";
import Hero from "./hero.client";
import "./home-page.css";
import { Posts } from "./posts";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold font-serif">Hello World</h1>
      <Calendar />
      <Hero />
      <Posts />
    </div>
  );
}
