import { ThemeColors } from "@/components/utils/theming";

export default function Badge({
  color,
  children,
}: {
  color: ThemeColors;
  children: React.ReactNode;
}) {
  const colorClass: string = {
    primary: "badge-primary",
    error: "badge-error",
    success: "badge-success",
  }[color];
  return <div className={`badge text-xs ${colorClass}}`}>{children}</div>;
}
