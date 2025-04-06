
import LoginForm from "../components/login-form";
import Head from "next/head";

export const metadata = {
  title: "",
};

export default function Page(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-[#3D0D0D]">
        <LoginForm/>
      </main>
  </div>
  );
}
