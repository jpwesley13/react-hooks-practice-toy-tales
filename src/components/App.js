import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/toys`)
    .then(res => res.json())
    .then(setToys)
  }, [])

  function onAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function onDonateToy(donatedToy) {
    const updatedToys = toys.filter(toy => toy.id !== donatedToy.id)
    setToys(updatedToys)
  }

  // function onLikeToy(likedToy){

  // }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
      onAddToy={onAddToy}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
        {toys.map(toy => (
        <ToyContainer 
      key={toy.id}
      toy={toy}
      onDonateToy={onDonateToy}
      // onLikeToy={onLikeToy}
      />
    ))}
    </>
  );
}

export default App;
