export default function Button({
  text,
  type,
  loading,
  fillWidth,
}: {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  loading?: boolean;
  fillWidth?: boolean;
}) {
  return (
    <button
      className={`btn btn-primary normal-case 
      ${fillWidth ? "w-full" : "w-fit"}`}
      type={type}
    >
      <span className={loading ? "block" : "hidden"}>
        <span className="loading loading-spinner loading-xs"></span>
      </span>
      <span>{text}</span>
    </button>
  );
}
