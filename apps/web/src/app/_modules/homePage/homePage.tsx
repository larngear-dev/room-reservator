import Hero from "./hero.client";
import "./homePage.css";
import { Posts } from "./posts";

export const metadata = {
  title: "",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="container">
      <Hero />
      <Posts />
    </div>
  );
}
