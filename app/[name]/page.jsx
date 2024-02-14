"use client";

import { useState } from "react";

import Frame from "@/components/Frame";
import ButtonSet from "@/components/ButtonSet";
import Hearts from "@/components/Hearts";

const ValentinePage = ({ params }) => {
  const [open, setOpen] = useState(false);

  const match =
    params.name === "marina" ||
    params.name === "dasha" ||
    params.name === "dina";

  return (
    <main>
      <div className="container">
        <Frame open={open} match={match} name={params.name} />
        {!open && match && <ButtonSet onAgree={() => setOpen(true)} />}
      </div>

      <Hearts />
    </main>
  );
};

export default ValentinePage;
