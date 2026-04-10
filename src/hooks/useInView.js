import { useEffect, useState } from "react";

export default function useInView(ref, threshold = 0.1) {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVis(true); },
      // FIX: threshold was used inside but missing from deps — added here
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]); // FIX: was [] — threshold now correctly listed

  return vis;
}
