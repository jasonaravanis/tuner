import { useState } from "react";

export const MyReactComponent = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <button onClick={() => setClicked(!clicked)}>
        Is javascript working?
      </button>
      <p className="text-red-500">{clicked ? "Clicked" : "Not Clicked"}</p>
    </>
  );
};
