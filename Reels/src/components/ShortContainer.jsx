import React, { useRef } from "react";
import Short from "./Short";
import data from "../data/data.json";

function ShortContainer() {
  const shortContainerRef = useRef();

  return (
    <>
      <section ref={shortContainerRef} className="short-container">
        {data.map((short) => (
          <Short
            key={short.id}
            shortContainerRef={shortContainerRef}
            short={short}
          />
        ))}
      </section>
    </>
  );
}

export default ShortContainer;
