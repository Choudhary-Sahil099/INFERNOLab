import { useEffect } from "react";

const Cursor = () => {
 useEffect(() => {
  const cur = document.getElementById("cur");
  const ring = document.getElementById("curRing");
  

  if (!cur || !ring) return;

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;

  const move = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cur.style.left = `${mouseX}px`;
    cur.style.top = `${mouseY}px`;
  };
  
  window.addEventListener("mousemove", move);

  const animate = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("mousemove", move);
  };
}, []);

  return (
    <>
      <div className="cursor" id="cur"></div>
      <div className="cursor-ring" id="curRing"></div>
    </>
  );
};

export default Cursor;