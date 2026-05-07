import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import { contacts } from "../data/contacts";
import ModalShell from "./ModalShell";

function SendModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");

  return (
    <ModalShell onClose={onClose}>
      <h2 style={{
        fontFamily: FM,
        color: C.text,
        fontSize: 20,
        fontWeight: 700,
        margin: "0 0 4px",
      }}>
        Send Money
      </h2>
      <p style={{
        color: C.muted,
        fontSize: 13,
        fontFamily: FM,
        margin: "0 0 24px",
      }}>
        Transfer to anyone, instantly
      </p>

      {step === 1 && (
        <>
          <p style={{
            color: C.muted,
            fontSize: 11,
            fontFamily: FM,
            margin: "0 0 10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            Recent contacts
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {contacts.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelected(c)}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  background: selected?.name === c.name ? `${c.color}22` : "transparent",
                  border: `1px solid ${selected?.name === c.name ? c.color : C.border}`,
                  borderRadius: 12,
                  padding: "10px 6px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: c.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: FM,
                }}>
                  {c.initials}
                </div>
                <span style={{ fontSize: 10, color: C.muted, fontFamily: FM }}>
                  {c.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
          <div style={{ position: "relative", marginBottom: 12 }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: FN,
              fontSize: 20,
              color: C.gold,
            }}>
              $
            </span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
              style={{
                width: "100%",
                padding: "13px 14px 13px 34px",
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                color: C.text,
                fontFamily: FN,
                fontSize: 22,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note (optional)"
            style={{
              width: "100%",
              padding: "11px 14px",
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              color: C.text,
              fontFamily: FM,
              fontSize: 13,
              outline: "none",
              boxSizing: "border-box",
              marginBottom: 20,
            }}
          />
          <button
            onClick={() => amount && selected && setStep(2)}
            style={{
              width: "100%",
              padding: 14,
              background: amount && selected ? C.gold : C.border,
              border: "none",
              borderRadius: 12,
              cursor: amount && selected ? "pointer" : "not-allowed",
              color: amount && selected ? "#000" : C.muted,
              fontFamily: FM,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Continue →
          </button>
        </>
      )}

      {step === 2 && (
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: selected?.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
            fontFamily: FM,
            margin: "0 auto 14px",
          }}>
            {selected?.initials}
          </div>
          <p style={{
            color: C.text,
            fontFamily: FM,
            fontSize: 15,
            fontWeight: 600,
            margin: "0 0 4px",
          }}>
            Sending to {selected?.name}
          </p>
          <p style={{
            fontFamily: FN,
            fontSize: 34,
            fontWeight: 700,
            color: C.gold,
            margin: "14px 0",
          }}>
            ${parseFloat(amount || 0).toFixed(2)}
          </p>
          {note && (
            <p style={{
              color: C.muted,
              fontSize: 13,
              fontFamily: FM,
              margin: "0 0 16px",
            }}>
              "{note}"
            </p>
          )}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button
              onClick={() => setStep(1)}
              style={{
                flex: 1,
                padding: 13,
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                color: C.muted,
                fontFamily: FM,
                cursor: "pointer",
              }}
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              style={{
                flex: 2,
                padding: 13,
                background: C.gold,
                border: "none",
                borderRadius: 12,
                color: "#000",
                fontFamily: FM,
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              Confirm Send
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
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
            Payment Sent!
          </p>
          <p style={{
            color: C.muted,
            fontFamily: FM,
            fontSize: 13,
            margin: "0 0 22px",
          }}>
            ${parseFloat(amount || 0).toFixed(2)} sent to {selected?.name}
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

export default SendModal;