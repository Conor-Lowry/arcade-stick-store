import IconWithText from "../atoms/icon-with-text.tsx";
import { FaCaretRight } from "react-icons/fa6";
import { SocialLinks } from "../molecules/social-links.tsx";

export default function Footer() {
  return (
    <footer className="bg-brand p-4 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl">Whiff Punish</h2>
          <div>123 Sesame Street,</div>
          <div>Imagination Avenue,</div>
          <div>Fantasy Land</div>
          <SocialLinks className="pt-1 sm:text-2xl" />
        </div>
        <Section
          title="Quick Links"
          items={["Home", "Products", "Brands"]}
        ></Section>
        <Section
          title="Information"
          items={["FAQ", "About", "Site Map"]}
        ></Section>
      </div>
      <div className="text-center text-sm pt-2">
        Copyright © 2024 Whiff Punish Inc. All Rights Reserved.
      </div>
    </footer>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex-grow">
      <h3 className="text-lg sm:text-xl uppercase border-b-4 pb-2">{title}</h3>
      <div className="pt-2.5">
        {items.map((item, index) => (
          <div key={index}>
            <button className="hover:text-lg hover:font-bold transition-all">
              <IconWithText Icon={FaCaretRight} text={item} className="gap-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
