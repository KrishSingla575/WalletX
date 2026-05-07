import { useState } from "react";
import { C, FM, FN } from "../constants/theme";
import { cardsData } from "../data/cardsData";
import Toast from "../components/Toast";
import AddCardModal from "../components/AddCardModal";

function MyCards() {
  const [cards, setCards] = useState(cardsData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [toast, setToast] = useState(null);

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

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 22 }}>
        <button
          onClick={() => setShowAdd(true)}
          style={{
            padding: "10px 20px",
            background: C.white,
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
          return (
            <div key={card.id}>
              <div
                onClick={() => setSelectedCard(selectedCard === i ? null : i)}
                style={{
                  background: `linear-gradient(135deg, ${card.bg1}, ${card.bg2})`,
                  border: `1px solid ${card.accent}55`,
                  borderRadius: 22,
                  padding: "26px 30px",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 6px 30px ${card.accent}18`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
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
                  marginBottom: 28,
                }}>
                  <div>
                    <p style={{
                      color: `${C.text}88`,
                      fontSize: 11,
                      fontFamily: FM,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      margin: "0 0 8px",
                    }}>
                      {card.label}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 26, height: 26, borderRadius: 8, background: `${card.accent}44`, boxShadow: `0 12px 30px ${card.accent}18` }} />
                      <span style={{ color: C.text, fontSize: 14, fontFamily: FM, fontWeight: 700 }}>
                        {card.type}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: `${C.text}55`, fontSize: 10, fontFamily: FM, margin: "0 0 6px" }}>
                      Balance
                    </p>
                    <p style={{
                      fontFamily: FN,
                      fontSize: 28,
                      fontWeight: 800,
                      color: C.text,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}>
                      ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <p style={{
                    fontFamily: FN,
                    fontSize: 18,
                    color: C.text,
                    margin: 0,
                    letterSpacing: "0.15em",
                  }}>
                    {card.number}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                  <div>
                    <p style={{ color: `${C.text}55`, fontSize: 10, fontFamily: FM, margin: "0 0 6px" }}>
                      Card holder
                    </p>
                    <p style={{ fontFamily: FM, fontSize: 14, color: C.text, fontWeight: 700, margin: 0 }}>
                      {card.holder || "Alex Morgan"}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: `${C.text}55`, fontSize: 10, fontFamily: FM, margin: "0 0 6px" }}>
                      Expires
                    </p>
                    <p style={{ fontFamily: FM, fontSize: 14, color: C.text, fontWeight: 700, margin: 0 }}>
                      {card.expiry}
                    </p>
                  </div>
                </div>
              </div>

              {selectedCard === i && (
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCards((prev) => prev.filter((_, idx) => idx !== i));
                      setSelectedCard(null);
                      setToast("Card removed successfully");
                    }}
                    style={{
                      padding: "10px 18px",
                      background: C.red,
                      border: "none",
                      borderRadius: 12,
                      color: "#fff",
                      fontFamily: FM,
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                  >
                    Remove card
                  </button>
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