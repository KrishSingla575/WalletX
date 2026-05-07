import { C, FM } from "../constants/theme";
import { transactions } from "../data/transactions";
import TxRow from "../components/TxRow";

function Transactions() {
  return (
    <div>
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 28,
        padding: 20,
      }}>
        <div style={{ display: "grid", gap: 14 }}>
          {transactions.map((t) => (
            <TxRow key={t.id} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
