import React from "react";

function ScrollTo({ target, children }) {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <a href={target} onClick={handleClick}>{children}</a>;
}

export default ScrollTo;
