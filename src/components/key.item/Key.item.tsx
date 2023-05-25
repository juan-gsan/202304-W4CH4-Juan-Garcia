import { useContext } from "react";
import { Context } from "../../context/context";

type PropsType = {
  item: string;
};

export function KeyItem({ item }: PropsType) {
  const {
    phoneContext: { handleClick },
  } = useContext(Context);
  return (
    <>
      <li>
        <button className="key" onClick={handleClick}>
          {item}
        </button>
      </li>
    </>
  );
}
