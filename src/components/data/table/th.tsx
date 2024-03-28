export default function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-1.5 uppercase text-sm text-left whitespace-nowrap first:rounded-l-lg last:rounded-r-lg border-r last:border-none border-r-base-content border-opacity-5 ">
      {children}
    </th>
  );
}
