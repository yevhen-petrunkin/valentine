"use client";

import { useState } from "react";

import Frame from "@/components/Frame";
import ButtonSet from "@/components/ButtonSet";

const FrameWrapper = ({ name }) => {
  const [open, setOpen] = useState(false);

  const match = name === "marina" || name === "dasha" || name === "dina";

  return (
    <div className="container">
      <Frame open={open} match={match} name={name} />
      {!open && match && <ButtonSet onAgree={() => setOpen(true)} />}
    </div>
  );
};

export default FrameWrapper;
