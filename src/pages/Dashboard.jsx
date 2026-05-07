import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { C, FM, FN } from "../constants/theme";
import { DATA_1M, DATA_3M, DATA_7M, DATA_1Y } from "../data/chartData";
import { transactions } from "../data/transactions";
import QuickAction from "../components/QuickAction";
import TxRow from "../components/TxRow";

const periodOptions = [
  { id: "1w", label: "1W", data: DATA_1M },
  { id: "1m", label: "1M", data: DATA_3M },
  { id: "6m", label: "6M", data: DATA_7M },
  { id: "1y", label: "1Y", data: DATA_1Y },
];

function Dashboard({ onSend, onReceive }) {
  const [selectedPeriod, setSelectedPeriod] = useState("1m");
  const periodData = periodOptions.find((option) => option.id === selectedPeriod)?.data || DATA_1M;
  const dashboardFont = "Inter, sans-serif";

  return (
    <div style={{ fontFamily: dashboardFont }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 26,
      }}>
        <div>
          <h1 style={{ fontFamily: dashboardFont, color: C.text, fontSize: 32, fontWeight: 800, margin: 0 }}>
            Welcome back, Alex
          </h1>
          <p style={{ color: C.muted, fontFamily: dashboardFont, fontSize: 14, margin: "8px 0 0" }}>
            Here&apos;s what&apos;s happening with your money today.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, marginBottom: 22 }}>
        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, #2B3773, #0B0F22)",
          borderRadius: 32,
          padding: 28,
          overflow: "hidden",
          minHeight: 260,
        }}>
          <div style={{ position: "absolute", top: 16, right: 16, width: 48, height: 48, borderRadius: 16, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            👁
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: dashboardFont, fontSize: 13, margin: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Total balance
              </p>
              <h2 style={{ color: "#FFFFFF", fontFamily: dashboardFont, fontSize: 44, fontWeight: 800, margin: "12px 0 12px" }}>
                $12,480.55
              </h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", borderRadius: 999, padding: "8px 14px" }}>
                <span style={{ fontSize: 12, color: "#C7D2FE", fontFamily: dashboardFont }}>
                  ↗ +8.3% this month
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14, marginTop: 36 }}>
            {[
              { label: "Income", value: "$5,420" },
              { label: "Spent", value: "$2,180" },
              { label: "Saved", value: "$3,240" },
            ].map((item) => (
              <div key={item.label} style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 22,
                padding: "18px 16px",
              }}>
                <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: dashboardFont, fontSize: 12, margin: 0 }}>
                  {item.label}
                </p>
                <p style={{ color: "#FFFFFF", fontFamily: FN, fontSize: 18, fontWeight: 700, margin: "8px 0 0" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 28,
          padding: 22,
          minHeight: 260,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div>
                <p style={{ fontFamily: dashboardFont, fontWeight: 600, color: C.text, fontSize: 14, margin: 0 }}>
                  Spending
                </p>
                <p style={{ color: C.muted, fontFamily: dashboardFont, fontSize: 12, margin: "6px 0 0" }}>
                  Last month overview
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {periodOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPeriod(option.id)}
                    style={{
                      border: "none",
                      borderRadius: 999,
                      padding: "8px 14px",
                      cursor: "pointer",
                      fontFamily: dashboardFont,
                      fontSize: 12,
                      fontWeight: 600,
                      background: selectedPeriod === option.id ? C.surface : C.card,
                      color: selectedPeriod === option.id ? C.text : C.muted,
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 14, marginBottom: 16 }}>
              <div>
                <p style={{ fontFamily: dashboardFont, color: C.muted, fontSize: 12, margin: 0 }}>
                  Total spending
                </p>
                <h3 style={{ fontFamily: dashboardFont, color: C.text, fontSize: 32, fontWeight: 700, margin: "10px 0 0" }}>
                  $4,147
                </h3>
              </div>
              <div style={{ minWidth: 88, textAlign: "right" }}>
                <p style={{ color: C.muted, fontFamily: dashboardFont, fontSize: 12, margin: 0 }}>
                  Trend
                </p>
                <p style={{ fontFamily: FN, color: C.green, fontSize: 18, fontWeight: 700, margin: "8px 0 0" }}>
                  +14.2%
                </p>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={periodData} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="label" tick={{ fill: C.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 10,
                    color: C.text,
                    fontFamily: FN,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="expense" stroke="#6366F1" fill="url(#spendGrad)" strokeWidth={3} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18, marginBottom: 22 }}>
        <QuickAction size="large" icon="✈" label="Send" color={C.purple} onClick={onSend} />
        <QuickAction size="large" icon="↓" label="Receive" color={C.green} onClick={onReceive} />
      </div>

      <div style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 28,
        padding: 24,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 22 }}>
          <div>
            <h2 style={{ fontFamily: dashboardFont, fontSize: 20, fontWeight: 700, color: C.text, margin: 0 }}>
              Recent activity
            </h2>
            <p style={{ color: C.muted, fontFamily: dashboardFont, fontSize: 12, margin: "8px 0 0" }}>
              Latest transactions and updates
            </p>
          </div>
          <button style={{
            border: "none",
            background: C.surface,
            color: "#8B5CF6",
            padding: "10px 18px",
            borderRadius: 20,
            fontFamily: dashboardFont,
            fontWeight: 700,
            cursor: "pointer",
          }}>
            View all
          </button>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {transactions.slice(0, 5).map((t) => (
            <TxRow key={t.id} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
