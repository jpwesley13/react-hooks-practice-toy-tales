import React, {useState} from "react";

function ToyCard({toy, onDonateToy, onLikeToy}) {

  const [likes, setLikes] = useState(toy.likes)

  function handleDonate() {
    fetch(`http://127.0.0.1:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDonateToy(toy))
  }

  function handleLike() {
    fetch(`http://127.0.0.1:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes+1
      })
    })
    .then(res => res.json())
    .then(data => setLikes(data.likes))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Like(s) </p>
      <button className="like-btn"
      onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn"
      onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
