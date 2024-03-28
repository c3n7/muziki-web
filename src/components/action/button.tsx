export default function Button({
  text,
  type,
  loading,
}: {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  loading: boolean;
}) {
  return (
    <button className="btn btn-primary normal-case" type={type}>
      <span className={loading ? "block" : "hidden"}>
        <span className="loading loading-spinner loading-xs"></span>
      </span>
      <span>{text}</span>
    </button>
  );
}
