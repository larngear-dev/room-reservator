import { Calendar } from "@/components/ui/calendar";
import Hero from "./hero.client";
import "./home-page.css";
import { Posts } from "./posts";

export const metadata = {
  title: "",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Helllo</h1>
      <Calendar />
      <Hero />
      <Posts />
    </div>
  );
}
