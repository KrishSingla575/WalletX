import { useState } from "react";
import { C, FM, FN } from "../constants/theme";

function QuickAction({ icon, label, color, onClick, size = "normal" }) {
  const [h, setH] = useState(false);
  const isLarge = size === "large";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? `${color}15` : C.card,
        border: `1px solid ${h ? color : C.border}`,
        borderRadius: 18,
        padding: isLarge ? "22px 20px" : "14px 16px",
        minHeight: isLarge ? 150 : undefined,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isLarge ? 12 : 8,
        transition: "all 0.2s",
        flex: 1,
      }}
    >
      <div style={{
        width: 100,
        height: 100,
        borderRadius: 12,
        background: `${color}22`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 50,
        color: color,
        fontFamily: FN,
        fontWeight: 700,
      }}>
        {icon}
      </div>
      <span style={{
        color: h ? color : C.muted,
        fontSize: 11,
        fontFamily: FM,
        fontWeight: 500,
        transition: "color 0.2s",
      }}>
        {label}
      </span>
    </button>
  );
}

export default QuickAction;