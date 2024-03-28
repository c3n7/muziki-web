export default function CardBase({ children }: { children: React.ReactNode }) {
  return <div className="card w-full rounded-xl">{children}</div>;
}
