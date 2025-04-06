import { log } from "@repo/utils/logger";
import HomePage from "@/modules/home-page";
import Image from 'next/image';
import ClientComponent from './ClientComponent';

export const metadata = {
  title: "Home",
};

export default function Page(): JSX.Element {
  log("Hey! This is the nextjs-app.");

  return (
    <ClientComponent />
  );
}