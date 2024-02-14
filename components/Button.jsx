"use client";

import { Sofia } from "next/font/google";
const sofia = Sofia({ subsets: ["latin"], weight: "400" });

import { useRef, useState, useEffect } from "react";

const Button = ({ agree, onClick }) => {
  const defaultStyles = {
    fontSize: 1.8,
    width: 48,
    height: 30,
  };

  const [noStyles, setNoStyles] = useState({ ...defaultStyles });

  const rejectBtn = useRef();

  const reduceNo = () => {
    setNoStyles((prev) => {
      return {
        ...prev,
        fontSize: (prev.fontSize -= 0.2),
        width: (prev.width -= 6),
        height: (prev.height -= 4),
      };
    });
  };

  useEffect(() => {
    if (rejectBtn.current) {
      rejectBtn.current.style.fontSize = `${noStyles.fontSize}em`;
      rejectBtn.current.style.width = `${noStyles.width}%`;
      rejectBtn.current.style.height = `${noStyles.height}vw`;
    }
  }, [noStyles, setNoStyles, rejectBtn]);

  return (
    <>
      {agree ? (
        <button
          className={`btn btn--agree ${sofia.className}`}
          type="button"
          onClick={onClick}
        >
          Yes
        </button>
      ) : (
        noStyles.fontSize > 0.6 && (
          <button
            ref={rejectBtn}
            className={`btn ${sofia.className}`}
            type="button"
            onClick={reduceNo}
          >
            No
          </button>
        )
      )}
    </>
  );
};

export default Button;
