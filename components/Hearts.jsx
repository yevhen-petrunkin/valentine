import { FaRegHeart } from 'react-icons/fa';

const Hearts = () => {
  const hearts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      {hearts.map(number => (
        <div key={number} className="heart">
          <FaRegHeart width="100%" height="100%" />
        </div>
      ))}
    </>
  );
};

export default Hearts;
