export const DATA_7M = [
  { label: "Jan", income: 5400, expense: 3100 },
  { label: "Feb", income: 6200, expense: 4200 },
  { label: "Mar", income: 5800, expense: 2900 },
  { label: "Apr", income: 7100, expense: 3800 },
  { label: "May", income: 6600, expense: 4600 },
  { label: "Jun", income: 8200, expense: 3400 },
  { label: "Jul", income: 7800, expense: 5100 },
];

export const DATA_1M = [
  { label: "W1", income: 1800, expense: 900 },
  { label: "W2", income: 2100, expense: 1300 },
  { label: "W3", income: 1600, expense: 800 },
  { label: "W4", income: 2300, expense: 1100 },
];

export const DATA_3M = [
  { label: "May", income: 6600, expense: 4600 },
  { label: "Jun", income: 8200, expense: 3400 },
  { label: "Jul", income: 7800, expense: 5100 },
];

export const DATA_1Y = [
  { label: "Aug", income: 5100, expense: 3200 },
  { label: "Sep", income: 5600, expense: 3800 },
  { label: "Oct", income: 6400, expense: 4100 },
  { label: "Nov", income: 7200, expense: 4800 },
  { label: "Dec", income: 8900, expense: 5600 },
  { label: "Jan", income: 5400, expense: 3100 },
  { label: "Feb", income: 6200, expense: 4200 },
  { label: "Mar", income: 5800, expense: 2900 },
  { label: "Apr", income: 7100, expense: 3800 },
  { label: "May", income: 6600, expense: 4600 },
  { label: "Jun", income: 8200, expense: 3400 },
  { label: "Jul", income: 7800, expense: 5100 },
];

export const PERIOD_MAP = {
  "1m": DATA_1M,
  "3m": DATA_3M,
  "7m": DATA_7M,
  "1y": DATA_1Y,
};

export const PERIOD_STATS = {
  "1m": { income: "$7,800", spent: "$4,100", savings: "$3,700", avg: "$1,950" },
  "3m": { income: "$22,600", spent: "$13,100", savings: "$9,500", avg: "$3,167" },
  "7m": { income: "$47,100", spent: "$27,100", savings: "$20,000", avg: "$2,871" },
  "1y": { income: "$82,300", spent: "$47,800", savings: "$34,500", avg: "$2,875" },
};

export const pieData = [
  { name: "Shopping", value: 35, color: "#F0B429" },
  { name: "Food", value: 22, color: "#10B981" },
  { name: "Transport", value: 18, color: "#3B82F6" },
  { name: "Bills", value: 15, color: "#8B5CF6" },
  { name: "Other", value: 10, color: "#F97316" },
];