import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import { cardsData } from "../data/cardsData";
import Toast from "../components/Toast";
import AddCardModal from "../components/AddCardModal";

function MyCards() {
  const [cards, setCards] = useState(cardsData);
  const [flipped, setFlipped] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [toast, setToast] = useState(null);
  const [frozenCards, setFrozenCards] = useState({});

  const handleAction = (action, cardIdx) => {
    if (action === "Freeze") {
      setFrozenCards((prev) => ({ ...prev, [cardIdx]: !prev[cardIdx] }));
      setToast(frozenCards[cardIdx] ? "Card unfrozen successfully" : "Card frozen successfully");
    } else if (action === "Set Limit") {
      setToast("Spending limit updated");
    } else if (action === "View PIN") {
      setToast("PIN sent to your registered phone");
    } else if (action === "Cancel") {
      setToast("Cancellation request submitted");
    }
  };

  return (
    <div>
      {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
      {showAdd && (
        <AddCardModal
          onClose={() => setShowAdd(false)}
          onAdd={(c) => {
            setCards((prev) => [
              ...prev,
              {
                ...c,
                id: Date.now(),
                number: c.number,
                balance: 0,
                expiry: c.expiry,
                bg1: "#0f1624",
                bg2: "#1a2640",
                type: "Visa",
              },
            ]);
          }}
        />
      )}

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 22,
      }}>
        <div>
          <h1 style={{ fontFamily: FM, color: C.text, fontSize: 26, fontWeight: 700, margin: "0 0 4px" }}>
            My Cards
          </h1>
          <p style={{ color: C.muted, fontFamily: FM, fontSize: 13, margin: 0 }}>
            Manage your payment cards
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          style={{
            padding: "10px 20px",
            background: C.gold,
            border: "none",
            borderRadius: 11,
            fontFamily: FM,
            fontWeight: 700,
            fontSize: 13,
            color: "#000",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Add Card
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {cards.map((card, i) => {
          const isFrozen = frozenCards[i];
          return (
            <div key={card.id}>
              <div
                onClick={() => setFlipped(flipped === i ? null : i)}
                style={{
                  background: `linear-gradient(135deg, ${card.bg1}, ${card.bg2})`,
                  border: `1px solid ${card.accent}55`,
                  borderRadius: 22,
                  padding: "26px 30px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 6px 30px ${card.accent}18`,
                  opacity: isFrozen ? 0.65 : 1,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {isFrozen && (
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "#00000055",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    borderRadius: 22,
                  }}>
                    <span style={{
                      fontFamily: FM,
                      fontWeight: 700,
                      color: C.blue,
                      fontSize: 18,
                      letterSpacing: "0.1em",
                    }}>
                      FROZEN
                    </span>
                  </div>
                )}
                <div style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `${card.accent}08`,
                }} />
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 32,
                }}>
                  <div>
                    <p style={{
                      color: `${C.text}66`,
                      fontSize: 10,
                      fontFamily: FM,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: "0 0 5px",
                    }}>
                      {card.label}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 4, background: `${card.accent}44` }} />
                      <div style={{
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        background: `${card.accent}66`,
                        marginLeft: -8,
                      }} />
                      <span style={{ color: card.accent, fontSize: 12, fontFamily: FM, marginLeft: 5 }}>
                        {card.type}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: `${C.text}55`, fontSize: 10, fontFamily: FM, margin: "0 0 3px" }}>
                      Balance
                    </p>
                    <p style={{
                      fontFamily: FN,
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.text,
                      margin: 0,
                    }}>
                      ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{
                    fontFamily: FN,
                    fontSize: 14,
                    color: `${C.text}99`,
                    margin: 0,
                    letterSpacing: "0.06em",
                  }}>
                    {card.number}
                  </p>
                  <p style={{ fontFamily: FN, fontSize: 12, color: `${C.text}55`, margin: 0 }}>
                    {card.expiry}
                  </p>
                </div>
              </div>

              {flipped === i && (
                <div style={{
                  background: C.card,
                  border: `1px solid ${card.accent}33`,
                  borderTop: "none",
                  borderRadius: "0 0 18px 18px",
                  padding: "14px 22px",
                }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[
                      { label: isFrozen ? "Unfreeze" : "Freeze", col: C.blue },
                      { label: "Set Limit", col: C.gold },
                      { label: "View PIN", col: C.green },
                      { label: "Cancel", col: C.red },
                    ].map((a) => (
                      <button
                        key={a.label}
                        onClick={() =>
                          handleAction(a.label === "Unfreeze" ? "Freeze" : a.label, i)
                        }
                        style={{
                          flex: 1,
                          padding: "9px 0",
                          background: "transparent",
                          border: `1px solid ${a.col}55`,
                          borderRadius: 9,
                          color: a.col,
                          fontFamily: FM,
                          fontSize: 11,
                          cursor: "pointer",
                          fontWeight: 600,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = `${a.col}15`)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyCards;