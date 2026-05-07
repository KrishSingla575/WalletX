import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import ModalShell from "./ModalShell";

function AddCardModal({ onClose, onAdd }) {
  const [label, setLabel] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [accent, setAccent] = useState(C.gold);
  const [done, setDone] = useState(false);

  const accentOpts = [C.gold, C.blue, C.green, C.purple, "#EC4899", "#F97316"];

  const formatCard = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 16);
    return d.replace(/(.{4})/g, "$1 ").trim();
  };
  const formatExp = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const handleAdd = () => {
    if (!label || number.replace(/\s/g, "").length < 16 || expiry.length < 5) return;
    onAdd({
      label,
      number: number.slice(0, 4) + " •••• •••• " + number.slice(-4),
      expiry,
      accent,
    });
    setDone(true);
  };

  return (
    <ModalShell onClose={onClose} width={420}>
      {!done ? (
        <>
          <h2 style={{
            fontFamily: FM,
            color: C.text,
            fontSize: 20,
            fontWeight: 700,
            margin: "0 0 4px",
          }}>
            Add New Card
          </h2>
          <p style={{
            color: C.muted,
            fontSize: 13,
            fontFamily: FM,
            margin: "0 0 22px",
          }}>
            Enter your card details securely
          </p>

          {/* Card preview */}
          <div style={{
            background: `linear-gradient(135deg, #1a1a2e, #16213e)`,
            border: `1px solid ${accent}66`,
            borderRadius: 16,
            padding: "20px 22px",
            marginBottom: 22,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: -20,
              right: -20,
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: `${accent}12`,
            }} />
            <p style={{
              color: `${C.text}66`,
              fontSize: 10,
              fontFamily: FM,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 10px",
            }}>
              {label || "Card Label"}
            </p>
            <p style={{
              fontFamily: FN,
              fontSize: 16,
              color: `${C.text}99`,
              margin: "0 0 14px",
              letterSpacing: "0.08em",
            }}>
              {number || "•••• •••• •••• ••••"}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: FN, fontSize: 12, color: `${C.text}55` }}>
                EXP {expiry || "MM/YY"}
              </span>
              <span style={{ color: accent, fontSize: 12, fontFamily: FM }}>New Card</span>
            </div>
          </div>

          {[
            { label: "Card Label", val: label, set: setLabel, ph: "e.g. Travel Card", max: 20, raw: true },
            { label: "Card Number", val: number, set: (v) => setNumber(formatCard(v)), ph: "1234 5678 9012 3456", max: 19 },
            { label: "Expiry Date", val: expiry, set: (v) => setExpiry(formatExp(v)), ph: "MM/YY", max: 5 },
            { label: "CVV", val: cvv, set: (v) => setCvv(v.replace(/\D/g, "").slice(0, 4)), ph: "•••", max: 4 },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: 14 }}>
              <p style={{ color: C.muted, fontSize: 11, fontFamily: FM, margin: "0 0 6px" }}>
                {f.label}
              </p>
              <input
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.ph}
                maxLength={f.max}
                type={f.label === "CVV" ? "password" : "text"}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  color: C.text,
                  fontFamily: FN,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <p style={{ color: C.muted, fontSize: 11, fontFamily: FM, margin: "0 0 8px" }}>
            Card Colour
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {accentOpts.map((col) => (
              <button
                key={col}
                onClick={() => setAccent(col)}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: col,
                  border: `2px solid ${accent === col ? "#fff" : "transparent"}`,
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={handleAdd}
            style={{
              width: "100%",
              padding: 14,
              background: C.gold,
              border: "none",
              borderRadius: 12,
              color: "#000",
              fontFamily: FM,
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Add Card
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: `${C.green}22`,
            border: `2px solid ${C.green}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            margin: "0 auto 18px",
          }}>
            ✓
          </div>
          <p style={{
            fontFamily: FM,
            color: C.text,
            fontSize: 20,
            fontWeight: 700,
            margin: "0 0 6px",
          }}>
            Card Added!
          </p>
          <p style={{
            color: C.muted,
            fontFamily: FM,
            fontSize: 13,
            margin: "0 0 22px",
          }}>
            Your new card is ready to use.
          </p>
          <button
            onClick={onClose}
            style={{
              padding: "12px 32px",
              background: C.gold,
              border: "none",
              borderRadius: 12,
              color: "#000",
              fontFamily: FM,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Done
          </button>
        </div>
      )}
    </ModalShell>
  );
}

export default AddCardModal;