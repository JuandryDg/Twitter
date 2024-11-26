/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function TwitterCard({ author, content }) {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="border p-4 rounded m-2 flex justify-between">
      <div>
        <h3 className="font-bold ">{author}</h3>
        <p>{content}</p>
      </div>
      <button onClick={handleClick}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
export default TwitterCard;
