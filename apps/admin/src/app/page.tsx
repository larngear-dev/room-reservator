import { log } from "@repo/utils/logger";
import HomePage from "@/modules/home-page";
import LoginPage from "./login/LoginPage";

export const metadata = {
  title: "",
};

export default function Page(): JSX.Element {
  log("Hey! This is the nextjs-app.");

  return <LoginPage />;
}
