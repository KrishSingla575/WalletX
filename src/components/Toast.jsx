import { useEffect } from "react";
import { C, FM } from "../constants/theme";

function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div style={{
      position: "fixed",
      bottom: 30,
      left: "50%",
      transform: "translateX(-50%)",
      background: C.green,
      color: "#fff",
      padding: "12px 24px",
      borderRadius: 12,
      fontFamily: FM,
      fontWeight: 600,
      fontSize: 14,
      zIndex: 2000,
      whiteSpace: "nowrap"
    }}>
      {msg}
    </div>
  );
}

export default Toast;