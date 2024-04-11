import Link from "next/link";

export default function DrawerDropdownLink({
  text,
  href,
  isActive = false,
}: {
  text: string;
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center hover:bg-secondary hover:bg-opacity-10 dark:hover:bg-opacity-5 hover:scale-105 hover:text-secondary active:scale-95 space-x-2 cursor-pointer rounded-lg tr-eo w-full p-3 pl-10
          ${isActive ? "bg-secondary bg-opacity-10 dark:bg-opacity-10" : ""}
        `}
      >
        {text}
      </div>
    </Link>
  );
}
