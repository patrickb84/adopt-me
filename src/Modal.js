import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // clean up the modal

  // if i don't have an elRef, create a ref and make it the current div
  // i will always have the correct div
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  // To make an effect run ONCE, add comma, empty array
  // , []
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // only runs the following function when the modalroot gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
