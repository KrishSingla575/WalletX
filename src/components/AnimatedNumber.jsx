import { useState, useEffect } from "react";

function AnimatedNumber({ target, prefix = "", decimals = 2 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        setVal(target);
        clearInterval(t);
      } else {
        setVal(cur);
      }
    }, 16);
    return () => clearInterval(t);
  }, [target]);

  return (
    <>
      {prefix}
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

export default AnimatedNumber;