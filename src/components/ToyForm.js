import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [name, setName] = useState("");
  const [image, setImage] =useState("");

  function handleSubmit(e){
    e.preventDefault();
    const toyData = {
      name: name,
      image: image,
      likes: 0
    };
    fetch(`http://127.0.0.1:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData)
    })
    .then(res => res.json())
    .then(data => onAddToy(data))
  }

  return (
    <div className="container">
      <form className="add-toy-form"
      onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
