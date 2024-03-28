export default function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3 py-1.5 text-left text-sm whitespace-nowrap first:rounded-l-lg last:rounded-r-lg border-r last:border-none border-r-base-content border-opacity-5">
      {children}
    </td>
  );
}
