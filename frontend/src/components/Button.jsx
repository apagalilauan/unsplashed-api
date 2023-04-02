import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function IconToggle() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className="flex items-center gap-2 hover:scale-[1.2] transition active:scale-[2] rounded-full  bg-red-500 hover:bg-red-600 focus:outline-none"
      onClick={handleClick}
    >
      {isClicked ? <AiFillHeart size={24} color="9B4242"/> : <AiOutlineHeart size={24} />}
    </button>
  );
}
