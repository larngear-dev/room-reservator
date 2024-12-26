import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const classJoin = (
  ...args: (string | undefined | false | null)[]
): string | "" => {
  return clsx(
    args.filter((arg) => typeof arg === "string" && arg !== ""),
    {
      [twMerge(args.filter((arg) => typeof arg === "string"))]: true,
    }
  );
};
