import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({
  placeholder,
  ariaLabel,
  className = "",
}: {
  placeholder: string;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <form action="" className="flex">
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        maxLength={30}
        name="q"
        aria-label={ariaLabel}
      />
      <button type="submit" className="p-1.5 bg-primary">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}
