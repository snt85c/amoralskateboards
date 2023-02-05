import { shop } from "../pageData";
import uuid from "react-uuid";
import Skate from "./Skate";

export default function Showcase() {
  let RESULT = shop.map((skate, i) => {
    return <Skate key={uuid()} skate={skate} i={i} />;
  });
  return (
    <>
      <div className="flex justify-center items-center mt-10 flex-wrap">
        {RESULT}
      </div>
    </>
  );
}
