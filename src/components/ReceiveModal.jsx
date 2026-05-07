import { C, FM, FN } from "../constants/theme";
import ModalShell from "./ModalShell";

function ReceiveModal({ onClose }) {
  return (
    <ModalShell onClose={onClose} width={340}>
      <h2 style={{
        fontFamily: FM,
        color: C.text,
        fontSize: 20,
        fontWeight: 700,
        margin: "0 0 6px",
        textAlign: "center",
      }}>
        Receive Money
      </h2>
      <p style={{
        color: C.muted,
        fontSize: 13,
        margin: "0 0 22px",
        textAlign: "center",
      }}>
        Share your WalletX ID
      </p>
      <div style={{
        width: 130,
        height: 130,
        background: C.card,
        border: `2px solid ${C.gold}55`,
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 18px",
      }}>
        <svg width="90" height="90" viewBox="0 0 90 90">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) =>
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((col) => {
              const on = (r + col * 3 + r * col) % 3 !== 0;
              return (
                <rect
                  key={`${r}-${col}`}
                  x={r * 10}
                  y={col * 10}
                  width={9}
                  height={9}
                  rx={1}
                  fill={on ? C.gold : "transparent"}
                  opacity={on ? 0.85 : 0}
                />
              );
            })
          )}
          <rect x={0} y={0} width={30} height={30} rx={3} fill="none" stroke={C.gold} strokeWidth={2} />
          <rect x={60} y={0} width={30} height={30} rx={3} fill="none" stroke={C.gold} strokeWidth={2} />
          <rect x={0} y={60} width={30} height={30} rx={3} fill="none" stroke={C.gold} strokeWidth={2} />
          <rect x={8} y={8} width={14} height={14} rx={2} fill={C.gold} />
          <rect x={68} y={8} width={14} height={14} rx={2} fill={C.gold} />
          <rect x={8} y={68} width={14} height={14} rx={2} fill={C.gold} />
        </svg>
      </div>
      <div style={{
        background: C.card,
        borderRadius: 12,
        padding: "12px 16px",
        marginBottom: 20,
        textAlign: "center",
      }}>
        <p style={{ color: C.muted, fontSize: 11, margin: "0 0 3px" }}>
          Your WalletX ID
        </p>
        <p style={{
          fontFamily: FN,
          color: C.gold,
          fontSize: 17,
          fontWeight: 600,
          margin: 0,
        }}>
          @alex.walletx
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          display: "block",
          margin: "0 auto",
          padding: "12px 40px",
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
    </ModalShell>
  );
}

export default ReceiveModal;