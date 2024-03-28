export default function Tr({ children }: { children: React.ReactNode }) {
  return (
    <tr className="even:bg-base-300 even:bg-opacity-25 hover:bg-base-content hover:bg-opacity-5 tr-eo">
      {children}
    </tr>
  );
}
