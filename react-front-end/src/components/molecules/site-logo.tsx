import IconWithText from "../atoms/icon-with-text.tsx";
import { GiHighKick } from "react-icons/gi";

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <IconWithText Icon={GiHighKick} text="Whiff Punish" className={className} />
  );
}
