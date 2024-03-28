import CardBase from "./base";
import CardContent from "./content";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <CardBase>
      <CardContent>{children}</CardContent>
    </CardBase>
  );
}
