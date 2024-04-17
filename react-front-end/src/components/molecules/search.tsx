import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({
  ariaLabel,
  placeholder,
  className = "",
  maxLength,
}: {
  ariaLabel: string;
  placeholder?: string;
  className?: string;
  maxLength?: number;
}) {
  return (
    <form className="flex" role="search">
      <input
        className={`px-3 py-1 ${className}`}
        type="search"
        placeholder={placeholder}
        maxLength={maxLength}
        name="q"
        aria-label={ariaLabel}
      />
      <button type="submit" className="p-1.5 bg-primary">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}
