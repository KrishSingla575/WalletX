import { useState } from "react";
import { C, FM, FN } from "../constants/theme";

function TxRow({ t }) {
  const [h, setH] = useState(false);

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "rgba(255, 255, 255, 0)" : C.card,
        borderRadius: 18,
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? "0 10px 30px rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 16,
        background: `${t.color}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
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
          fontWeight: 700,
          color: C.text,
          fontSize: 15,
          margin: "0 0 4px",
        }}>
          {t.name}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{

            border: `1px solid ${t.color}33`,
            borderRadius: 999,
            padding: "4px 10px",
            fontSize: 11,
            color: t.color,
            fontFamily: FM,
            fontWeight: 600,
          }}>
            {t.type}
          </span>
          <span style={{ fontFamily: FM, color: C.muted, fontSize: 12 }}>
            {t.date}
          </span>
        </div>
      </div>
      <div style={{ textAlign: "right", minWidth: 100 }}>
        <p style={{
          fontFamily: FN,
          fontWeight: 700,
          fontSize: 15,
          color: t.amount > 0 ? C.green : C.text,
          margin: "0 0 4px",
        }}>
          {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount).toFixed(2)}
        </p>
        <p style={{ fontSize: 10, fontFamily: FM, color: C.muted, margin: 0 }}>
          {t.amount > 0 ? "Credit" : "Debit"}
        </p>
      </div>
    </div>
  );
}

export default TxRow;
