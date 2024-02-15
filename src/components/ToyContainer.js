import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toy, onDonateToy, onLikeToy}) {


  return (
    <div id="toy-collection">{<ToyCard
    toy={toy}
    onDonateToy={onDonateToy}
    // onLikeToy={onLikeToy}
    />}</div>
  );
}

export default ToyContainer;
