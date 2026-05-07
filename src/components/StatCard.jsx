import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import AnimatedNumber from "./AnimatedNumber";

function StatCard({ label, value, change, color = C.gold }) {
  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: C.card,
        border: `1px solid ${h ? color : C.border}`,
        borderRadius: 16,
        padding: "20px 22px",
        flex: 1,
        transition: "border-color 0.2s",
      }}
    >
      <p style={{
        color: C.muted,
        fontSize: 11,
        fontFamily: FM,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        margin: "0 0 10px",
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: FN,
        fontSize: 24,
        fontWeight: 600,
        color: C.text,
        margin: "0 0 6px",
      }}>
        <AnimatedNumber target={value} prefix="$" />
      </p>
      <span style={{
        fontSize: 12,
        fontFamily: FN,
        color: change >= 0 ? C.green : C.red,
      }}>
        {change >= 0 ? "▲" : "▼"} {Math.abs(change)}% this month
      </span>
    </div>
  );
}

export default StatCard;