// import { Head, Link } from "aleph/react";
// import { Button } from "antd";
// import React,{useContext} from "react";
// import type { ReactNode, ReactPortal } from "react";
// import { Button } from "https://esm.sh/antd?bundle"
import { createContext } from "react";
// import ReactDOM from 'react-dom'

// state management
import resso from "../lib/resso2.ts";
// resso.config({ batch: ReactDOM.unstable_batchedUpdates });
const rstore = resso({ count: 0 });
function Count() {
  const count = rstore.count.useSnapshot();
  console.log({ "render:count": count });
  return <div>{count}</div>;
}

function Button() {
  const n = rstore.count.useSnapshot();
  console.log({ "render button:": n });
  return (
    <button
      onClick={() => {
        rstore.count.setSnapshot(n + 1);
      }}
    >
      +1
    </button>
  );
}

export default function Index() {
  return (
    <div>
      <Count />
      <Button />
    </div>
  );
}
