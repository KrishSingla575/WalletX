import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { C, FM, FN } from "../constants/theme";
import { PERIOD_MAP, PERIOD_STATS, pieData } from "../data/chartData";

function Analytics() {
  const [period, setPeriod] = useState("1m");
  const data = PERIOD_MAP[period];
  const stats = PERIOD_STATS[period];

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 22,
      }}>
        <div>
        </div>
        <div style={{
          display: "flex",
          gap: 6,
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          padding: 4,
        }}>
          {["1m", "3m", "7m", "1y"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: "7px 16px",
                borderRadius: 9,
                background: period === p ? C.purple : "transparent",
                border: "none",
                color: period === p ? "#000" : C.muted,
                fontFamily: FN,
                fontSize: 13,
                cursor: "pointer",
                fontWeight: period === p ? 700 : 400,
                transition: "all 0.2s",
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
        {[
          { label: "Total Income", val: stats.income, col: C.green },
          { label: "Total Spent", val: stats.spent, col: C.red },
          { label: "Net Savings", val: stats.savings, col: C.gold },
          { label: "Avg / Month", val: stats.avg, col: C.blue },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "16px 18px",
            }}
          >
            <p style={{
              color: C.muted,
              fontSize: 10,
              fontFamily: FM,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 7px",
            }}>
              {s.label}
            </p>
            <p style={{ fontFamily: FN, fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 4px" }}>
              {s.val}
            </p>
            <div style={{ height: 3, borderRadius: 2, background: `${s.col}33`, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "70%", background: s.col, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        padding: 22,
        marginBottom: 18,
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}>
          <div>
            <p style={{
              fontFamily: FM,
              fontWeight: 600,
              color: C.text,
              fontSize: 14,
              margin: "0 0 2px",
            }}>
              Income vs Expenses
            </p>
            <p style={{ color: C.muted, fontSize: 11, fontFamily: FM, margin: 0 }}>
              {period === "1m"
                ? "Last 4 weeks"
                : period === "3m"
                ? "Last 3 months"
                : period === "7m"
                ? "Last 7 months"
                : "Last 12 months"}
            </p>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { l: "Income", c: C.green },
              { l: "Expenses", c: C.gold },
            ].map((x) => (
              <div key={x.l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 10, height: 3, borderRadius: 2, background: x.c }} />
                <span style={{ fontSize: 11, color: C.muted, fontFamily: FM }}>{x.l}</span>
              </div>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="ig2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.green} stopOpacity={0.25} />
                <stop offset="95%" stopColor={C.green} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="eg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.gold} stopOpacity={0.25} />
                <stop offset="95%" stopColor={C.gold} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tick={{ fill: C.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: C.muted, fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                fontFamily: FN,
                color: C.text,
                fontSize: 12,
              }}
              formatter={(v) => [`$${v.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke={C.green}
              fill="url(#ig2)"
              strokeWidth={2.5}
              dot={{ fill: C.green, r: 4, strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke={C.gold}
              fill="url(#eg2)"
              strokeWidth={2.5}
              dot={{ fill: C.gold, r: 4, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 22,
        }}>
          <p style={{
            fontFamily: FM,
            fontWeight: 600,
            color: C.text,
            fontSize: 14,
            margin: "0 0 14px",
          }}>
            Top Categories
          </p>
          {pieData.map((p) => (
            <div key={p.name} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontFamily: FM, color: C.text }}>{p.name}</span>
                <span style={{ fontSize: 12, fontFamily: FN, color: p.color }}>{p.value}%</span>
              </div>
              <div style={{ height: 4, background: C.border, borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${p.value}%`, background: p.color, borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 20,
          padding: 22,
        }}>
          <p style={{
            fontFamily: FM,
            fontWeight: 600,
            color: C.text,
            fontSize: 14,
            margin: "0 0 12px",
          }}>
            Savings Goal
          </p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 10, position: "relative" }}>
            <PieChart width={140} height={140}>
              <Pie
                data={[{ value: 68 }, { value: 32 }]}
                cx={65}
                cy={65}
                innerRadius={46}
                outerRadius={62}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill={C.gold} />
                <Cell fill={C.border} />
              </Pie>
            </PieChart>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: FN, fontSize: 22, fontWeight: 700, color: C.gold, margin: 0 }}>
                68%
              </p>
            </div>
          </div>
          <div style={{ background: C.surface, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ color: C.muted, fontSize: 11, fontFamily: FM, margin: "0 0 3px" }}>Saved</p>
            <p style={{ fontFamily: FN, fontSize: 16, fontWeight: 700, color: C.text, margin: 0 }}>
              $17,000 <span style={{ color: C.muted, fontSize: 12 }}>/ $25,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;