import { Head, Link } from "aleph/react";


export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>AccountUI</title>
      </Head>
      <p className="logo">
        <img src="./assets/logo.svg" width="75" height="75" title="Aleph.js" />
      </p>
      <nav className="mt-8">
        <Link
          className="inline-flex items-center justify-center w-60 h-12 border-1 border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-300"
          role="button"
          to="/todos"
        >
          In development
        </Link>
      </nav>
    </div>
  );
}
