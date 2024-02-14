"use client";

import { useEffect, useState } from "react";

import defImg from "@/public/images/first-min.png";
import defFrame from "@/public/images/frame-min.png";
import marina from "@/public/images/marina-min.jpg";
import dasha from "@/public/images/dasha-min.jpg";
import dina from "@/public/images/dina-min.jpg";

import Image from "next/image";

const ImageComp = ({ open, name, match }) => {
  const [img, setImg] = useState(defImg);
  const [photo, setPhoto] = useState(defImg);

  useEffect(() => {
    if (!open || !name) {
      setImg(defImg);
      setPhoto(defImg);
      return;
    }

    if (!match) {
      setImg(defImg);
      setPhoto(defImg);
      return;
    }

    setImg(defFrame);

    if (name === "marina") {
      setPhoto(marina);
      return;
    }

    if (name === "dasha") {
      setPhoto(dasha);
      return;
    }

    if (name === "dina") {
      setPhoto(dina);
      return;
    }
  }, [open, name]);

  return (
    <div className="frame">
      <Image
        src={img}
        alt="Frame"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 5,
        }}
      />
      <div className="photo">
        <Image
          src={photo}
          alt="Photo"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default ImageComp;
