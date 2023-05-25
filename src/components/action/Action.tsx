import { useContext } from "react";
import { Context } from "../../context/context";

export function Action() {
  const {
    phoneContext: { handleCall, handleHang },
  } = useContext(Context);

  return (
    <>
      <a href="#" className="call active" onClick={handleCall}>
        Call
      </a>
      <a href="#" className="hang" onClick={handleHang}>
        Hang
      </a>
    </>
  );
}
