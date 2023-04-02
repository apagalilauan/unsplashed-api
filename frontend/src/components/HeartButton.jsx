import { useState } from 'react';

function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={`p-2 rounded-full transition-colors duration-300 ${
        isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isLiked
            ? 'M12 4c-3.75-4-9-2.5-9 2.5 0 4.5 7.5 8.5 9 9 1.5-.5 9-4.5 9-9 0-5-5.25-6.5-9-2.5z'
            : 'M19 20v-7c0-3.3-2.7-6-6-6s-6 2.7-6 6v7l-2 2v1h16v-1l-2-2z'
          }
        />
      </svg>
    </button>
  );
}

export default HeartButton;