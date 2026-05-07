import { useState } from "react";
import { C, FM, FN } from "../constants/theme";

function TxRow({ t }) {
  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: C.card,
        border: `1px solid ${h ? t.color : C.border}`,
        borderRadius: 14,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "border-color 0.2s",
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `${t.color}22`,
        border: `1px solid ${t.color}44`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: 800,
        color: t.color,
        fontFamily: FN,
        flexShrink: 0,
      }}>
        {t.icon}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: FM,
          fontWeight: 600,
          color: C.text,
          fontSize: 13,
          margin: "0 0 3px",
        }}>
          {t.name}
        </p>
        <span style={{
          display: "inline-block",
          background: `${t.color}18`,
          border: `1px solid ${t.color}33`,
          borderRadius: 6,
          padding: "2px 8px",
          fontSize: 10,
          color: t.color,
          fontFamily: FM,
        }}>
          {t.type}
        </span>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{
          fontFamily: FN,
          fontWeight: 700,
          fontSize: 15,
          color: t.amount > 0 ? C.green : C.text,
          margin: "0 0 2px",
        }}>
          {t.amount > 0 ? "+" : ""}${Math.abs(t.amount).toFixed(2)}
        </p>
        <p style={{
          fontSize: 10,
          fontFamily: FM,
          color: C.muted,
          margin: 0,
        }}>
          {t.date}
        </p>
      </div>
    </div>
  );
}

export default TxRow;