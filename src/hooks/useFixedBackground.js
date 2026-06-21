import { useEffect, useState } from "react";

/**
 * Fixed background-attachment is unreliable on touch devices and many mobile browsers.
 * Enable parallax fixed backgrounds only on fine-pointer desktop viewports.
 */
export default function useFixedBackground() {
  const [supportsFixed, setSupportsFixed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    const update = () => setSupportsFixed(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return supportsFixed;
}
