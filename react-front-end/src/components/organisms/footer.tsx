import Icon from "../atoms/icon.tsx";
import { FaCaretRight } from "react-icons/fa6";
import { SocialLinks } from "../molecules/social-links.tsx";

export default function Footer() {
  return (
    <footer className="bg-brand py-6 px-8">
      <div className="flex flex-wrap gap-10">
        <div className="py-2">
          <h2 className="text-4xl py-2">Whiff Punish</h2>
          <div>123 Sesame Street,</div>
          <div>Imagination Avenue,</div>
          <div>Fantasy Land</div>
          <SocialLinks className="pt-2 text-2xl" />
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
      <div className="text-center text-sm">
        Copyright © 2024 Whiff Punish Inc. All Rights Reserved.
      </div>
    </footer>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex-grow">
      <h3 className="text-xl uppercase border-b-4 py-2">{title}</h3>
      <div className="py-3.5">
        {items.map((item, index) => (
          <div key={index}>
            <button className="hover:text-lg hover:font-bold transition-all">
              <Icon className="gap-1">
                <FaCaretRight />
                {item}
              </Icon>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
