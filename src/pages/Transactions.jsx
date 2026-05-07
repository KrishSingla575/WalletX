import { C, FM } from "../constants/theme";
import { transactions } from "../data/transactions";
import TxRow from "../components/TxRow";

function Transactions() {
  return (
    <div>
      <h1 style={{ fontFamily: FM, color: C.text, fontSize: 26, fontWeight: 700, margin: "0 0 4px" }}>
        Transactions
      </h1>
      <p style={{ color: C.muted, fontFamily: FM, fontSize: 13, margin: "0 0 22px" }}>
        All {transactions.length} transactions this month
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {transactions.map((t) => (
          <TxRow key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
}

export default Transactions;