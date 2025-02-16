import { useRef, useEffect } from "react";
function compareDeps(prev, next) {
  if (prev === null) return false;
  if (prev.length !== next.length) return false;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

export default function useCustomMemo(func, deps) {
  // store data
  const memoizedRef = useRef(null);
  // checking if changes happens
  if (!memoizedRef.current || !compareDeps(memoizedRef.current.deps, deps)) {
    // value and dependencies
    memoizedRef.current = {
      value: func(),
      deps: deps,
    };
  }

  // cleanup the hook
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  // returning the value
  return memoizedRef.current.value;
}
