import { useRef } from "react";
export default function useCutomEffect(func, deps) {
  const firstRender = useRef(true);
  const prevDeps = useRef([]);

  // first Render
  if (firstRender.current) {
    firstRender.current = false;
    const cleanup = func();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }
  // deps changes or empty deps
  const depsChanged = deps
    ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps)
    : true;
  if (depsChanged) {
    const cleanup = func();
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
}
