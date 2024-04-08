import React from "react";

export default function TextInput({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  labelRight,
  error,
  labelBottom,
  labelBottomRight,
}: {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  name?: string;
  placeholder?: string;
  label?: string;
  labelRight?: string;
  error?: string | boolean;
  labelBottom?: string;
  labelBottomRight?: string;
}) {
  return (
    <div className="form-control w-full">
      <label className="label pb-1">
        <span className="label-text">{label}</span>
        {labelRight && <span className="label-text-alt">{labelRight}</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className="input input-bordered"
        onChange={onChange}
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
    </div>
  );
}
