import Hero from "./hero.client";
import "./homePage.css";
import { Posts } from "./posts";

export const metadata = {
  title: "",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Helllo</h1>
      <Hero />
      <Posts />
    </div>
  );
}
