import StockDetailPage from "./StockDetailPage";

// Static export (GitHub Pages) requires every dynamic route to be
// pre-rendered. This list must contain every `id` the app links to.
const STOCK_IDS = [
  "NIFTY50",
  "SENSEX",
  "BANKNIFTY",
  "Reliance",
  "Tata Motors",
  "Suzlon Energy",
  "Zomato",
  "TCS",
  "HDFC",
  "ICICI",
  "Airtel",
];

export function generateStaticParams() {
  return STOCK_IDS.map((id) => ({ id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <StockDetailPage params={params} />;
}
