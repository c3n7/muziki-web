export default function TextInput({
  type = "text",
  name,
  placeholder,
  label,
  labelRight,
  error,
  labelBottom,
  labelBottomRight,
}: {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  name?: string;
  placeholder: string;
  label?: string;
  labelRight?: string;
  error?: string;
  labelBottom?: string;
  labelBottomRight?: string;
}) {
  <div className="form-control w-full">
    <label className="label pb-1">
      <span className="label-text">{label}</span>
      {labelRight && <span className="label-text-alt">{labelRight}</span>}
    </label>

    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered"
    />

    {error && (
      <label className="label pb-0">
        <span className="label-text-alt text-error">{error}</span>
      </label>
    )}

    {(labelBottom || labelBottomRight) && (
      <label className="label pb-0">
        <span className="label-text-alt">{labelBottom}</span>
        <span className="label-text-alt">{labelBottomRight}</span>
      </label>
    )}
  </div>;
}
