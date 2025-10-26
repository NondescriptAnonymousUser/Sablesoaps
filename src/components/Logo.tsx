export default function Logo() {
  const brand = process.env.NEXT_PUBLIC_BRAND_NAME || "PROJECT";
  return <div className="tracking-widest font-semibold text-sm">{brand}</div>;
}
