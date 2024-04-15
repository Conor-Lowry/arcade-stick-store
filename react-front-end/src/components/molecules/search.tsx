import { FaMagnifyingGlass } from "react-icons/fa6";

// TODO Figure out how to reduce the width on smaller screens
export default function Search({
  placeholder,
  ariaLabel,
}: {
  placeholder: string;
  ariaLabel: string;
}) {
  return (
    <form action="" className="flex">
      <input
        className="px-3 py-1"
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
