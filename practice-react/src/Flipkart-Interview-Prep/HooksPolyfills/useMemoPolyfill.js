import React, { useEffect, useRef } from "react";

function areEqual(prevDeps, nextDeps) {
  if (prevDeps === null) return false;

  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) return false;
  }
  return true;
}

function useMemoPolyfill(cb, deps) {
  // storing values
  const memoizedRef = useRef(null);

  // handling deps changes
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  // cleanup func
  useEffect(() => {
    return ()=>{
        memoizedRef.current = null;
    }
  }, []);

  // returning value
  return memoizedRef.current.value;
}

export default useMemoPolyfill;
