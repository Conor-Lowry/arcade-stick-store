import { IconBaseProps } from "react-icons";
import { ComponentType } from "react";

export default function IconWithText({
  Icon,
  text,
  className = "",
}: {
  Icon: ComponentType<IconBaseProps>;
  text: string;
  className?: string;
}) {
  return (
    <span className={`flex items-center ${className}`}>
      <Icon />
      {text}
    </span>
  );
}
