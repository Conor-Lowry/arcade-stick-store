import {
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareGooglePlus,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

export function SocialLinks({ className }: { className: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      <FaSquareTwitter />
      <FaSquareGooglePlus />
      <FaSquareFacebook />
      <FaSquareYoutube />
      <FaSquareEnvelope />
    </div>
  );
}
