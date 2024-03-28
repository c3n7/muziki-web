export default function CardHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base-100/70 rounded-t-xl border-b border-base-content border-opacity-20 p-4">
      {children}
    </div>
  );
}
