import { useState, useEffect } from "react";
import { C, FM } from "./constants/theme";
import { navItems } from "./data/navItems";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import MyCards from "./pages/MyCards";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import SendModal from "./components/SendModal";
import ReceiveModal from "./components/ReceiveModal";

function App() {
  const [page, setPage] = useState("dashboard");
  const [showSend, setShowSend] = useState(false);
  const [showReceive, setShowReceive] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const pageMap = {
    dashboard: <Dashboard onSend={() => setShowSend(true)} onReceive={() => setShowReceive(true)} />,
    cards: <MyCards />,
    transactions: <Transactions />,
    analytics: <Analytics />,
    profile: <Profile />,
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: C.bg,
        overflow: "hidden",
        fontFamily: FM,
      }}
    >
      {showSend && <SendModal onClose={() => setShowSend(false)} />}
      {showReceive && <ReceiveModal onClose={() => setShowReceive(false)} />}

      {/* Sidebar */}
      <div
        style={{
          width: 210,
          background: C.surface,
          borderRight: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: "column",
          padding: "26px 14px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "0 8px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: C.gold,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#000",
              fontSize: 16,
              fontFamily: FM,
            }}
          >
            W
          </div>
          <span style={{ fontFamily: FM, fontWeight: 800, fontSize: 19, color: C.text }}>
            WalletX
          </span>
        </div>
        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 12px",
                  borderRadius: 11,
                  border: "none",
                  background: active ? `${C.gold}18` : "transparent",
                  color: active ? C.gold : C.muted,
                  fontFamily: FM,
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: active ? 600 : 400,
                  marginBottom: 3,
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = `${C.border}66`;
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={{ fontSize: 15, width: 20, textAlign: "center" }}>
                  {item.icon}
                </span>
                {item.label}
                {active && (
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: C.gold,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 10px",
              borderRadius: 11,
              background: C.card,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: C.gold,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FM,
                fontWeight: 700,
                color: "#000",
                fontSize: 13,
              }}
            >
              A
            </div>
            <div>
              <p style={{ fontFamily: FM, fontSize: 12, fontWeight: 600, color: C.text, margin: 0 }}>
                Alex Johnson
              </p>
              <p style={{ fontSize: 10, color: C.muted, margin: 0 }}>Premium ✦</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "30px 32px" }}>
        {pageMap[page]}
      </div>
    </div>
  );
}

export default App;