export default function CardContent({
  children,
  isRoot = false,
}: {
  children: React.ReactNode;
  isRoot?: boolean;
}) {
  return (
    <div className={`p-4 bg-base-100 ${isRoot ? "rounded" : "rounded-b"}`}>
      {children}
    </div>
  );
}
