import { Link } from "aleph/react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          margin: "0 auto",
        }}
      >
        <h1>
          <Link
            style={{ fontSize: 16, color: "#333" }}
            to="/"
          >
            <img src="./assets/logo.svg" width="75" height="75" title="Account UI" />
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="/"
            style={{ fontSize: 20, color: "#454545" }}
          >
          </a>
        </nav>
      </div>
    </header>
  );
}
