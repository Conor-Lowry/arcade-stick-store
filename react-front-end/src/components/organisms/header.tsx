import {
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareGooglePlus,
  FaSquareTwitter,
  FaUser,
  FaSquareYoutube,
  FaArrowRightToBracket,
  FaCartShopping,
} from "react-icons/fa6";
import { GiHighKick } from "react-icons/gi";
import Icon from "../atoms/icon.tsx";
import { ReactNode, useState } from "react";
import { DropdownMenu, DropdownMenuWrapper } from "../molecules/dropdown.tsx";
import Search from "../molecules/search.tsx";

const navItemGap = "gap-4";
//const navBg = "bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900";
const navBg = "bg-primary-gradient";
const navStyle = `${navBg} py-2 px-6`;
const iconGap = "gap-2";

export default function Header() {
  return (
    <header>
      <UserNav />
      <SiteBanner />
      <div className={`${navStyle} flex justify-between items-center`}>
        <Icon className={iconGap}>
          <GiHighKick />
          Whiff Punish
        </Icon>
        <MainNav />
        <Search
          className="px-3 py-1"
          placeholder="Product search..."
          ariaLabel="Search products"
        />
      </div>
    </header>
  );
}

function UserNav() {
  return (
    <nav aria-label="User Menu" className={`${navStyle} flex justify-between`}>
      <ul className={`${navItemGap} flex`}>
        <li>
          <NavItemButton>
            <a href="">
              <Icon className={iconGap}>
                <FaUser />
                Sign up
              </Icon>
            </a>
          </NavItemButton>
        </li>
        <li>
          <NavItemButton>
            <a href="">
              <Icon className={iconGap}>
                <FaArrowRightToBracket />
                Login
              </Icon>
            </a>
          </NavItemButton>
        </li>
      </ul>
      <span>
        <NavItemButton>
          <a href="">
            <Icon className={iconGap}>
              <FaCartShopping />
              View Cart
            </Icon>
          </a>
        </NavItemButton>
      </span>
    </nav>
  );
}

function MainNav() {
  return (
    <nav aria-label="Main Menu">
      <ul className={`${navItemGap} flex`}>
        <li>
          <NavItemButton>
            <a href="">Home</a>
          </NavItemButton>
        </li>
        <li>
          <Menu
            itemGroups={[
              {
                heading: "Types",
                items: ["Arcade Stick Parts", "Arcade Sticks", "All Products"],
              },
              {
                heading: "Brands",
                items: ["Hori", "Qanba", "Sanwa", "Seimitsu"],
              },
            ]}
          >
            Products
          </Menu>
        </li>
        <li>
          <Menu
            itemGroups={[
              {
                items: ["Hori", "Qanba", "Sanwa", "Seimitsu"],
              },
            ]}
          >
            Brands
          </Menu>
        </li>
        <li>
          <NavItemButton>
            <a href="">FAQ</a>
          </NavItemButton>
        </li>
        <li>
          <NavItemButton>
            <a href="">About</a>
          </NavItemButton>
        </li>
      </ul>
    </nav>
  );
}

function NavItemButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={`p-2.5 hover:bg-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Menu({
  children,
  itemGroups,
}: {
  children: ReactNode;
  itemGroups: {
    heading?: string;
    items: string[];
  }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <NavItemButton onClick={() => setIsOpen(!isOpen)}>
        {children}
      </NavItemButton>
      <DropdownMenu className={`${navBg}`}>
        {itemGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`}>
            {group.heading && (
              <div
                className={`italic py-2 font-bold text-center text-green-500`}
              >
                {group.heading}
              </div>
            )}
            {group.items.map((item, itemIndex) => (
              <NavItemButton
                key={`item-${itemIndex}`}
                className="w-full min-w-max"
              >
                {item}
              </NavItemButton>
            ))}
          </div>
        ))}
      </DropdownMenu>
    </DropdownMenuWrapper>
  );
}

function SiteBanner() {
  return (
    <div className="p-6 text-center bg-[--bg-site-banner]">
      <h1 className="text-6xl p-2">Whiff Punish</h1>
      <div className="pb-2 text-lg">
        Arcade sticks and parts at punishable prices!
      </div>
      <div className="flex mx-auto w-min text-3xl gap-1">
        <FaSquareTwitter />
        <FaSquareGooglePlus />
        <FaSquareFacebook />
        <FaSquareYoutube />
        <FaSquareEnvelope />
      </div>
    </div>
  );
}
