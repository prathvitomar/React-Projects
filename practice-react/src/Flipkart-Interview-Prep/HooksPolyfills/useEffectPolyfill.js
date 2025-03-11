import React from "react";
import { useRef } from "react";

function useEffectPolyfill(effect, deps) {
  // storing value
  const firstRender = useRef(true);
  const prevDeps = useRef([]);

  if (firstRender.current) {
    firstRender.current = false;
    const returned = effect();
    return () => {
      if (returned && typeof returned === "function") {
        returned();
      }
    };
  }

  // checking deps changes
  const depChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  // cleanup
  if (depChanged) {
    const returned = effect();
    if (returned && typeof returned === "function" && deps) {
      returned();
    }
  }

  // retuning
  prevDeps.current = deps || [];
}

export default useEffectPolyfill;
