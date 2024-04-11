import { FaUser, FaArrowRightToBracket, FaCartShopping } from "react-icons/fa6";
import { GiHighKick } from "react-icons/gi";
import Icon from "../atoms/icon.tsx";
import { ReactNode, useState } from "react";
import { DropdownMenu, DropdownMenuWrapper } from "../molecules/dropdown.tsx";
import Search from "../molecules/search.tsx";
import { SocialLinks } from "../molecules/social-links.tsx";

const navBg = "bg-brand";
const navStyle = `${navBg} py-2 px-6`;
const navButton = "hover:bg-primary";
const navIconGap = "gap-2";

export default function Header() {
  return (
    <header>
      <UserNav />
      <SiteBanner />
      <MainNav />
    </header>
  );
}

function UserNav() {
  return (
    <nav aria-label="User Menu" className={`${navStyle} flex justify-between`}>
      <ul className="gap-2 flex">
        <li>
          <NavButton>
            <a href="">
              <Icon className={navIconGap}>
                <FaUser string="Sign Up" />
                Sign up
              </Icon>
            </a>
          </NavButton>
        </li>
        <li>
          <NavButton>
            <a href="">
              <Icon className={navIconGap}>
                <FaArrowRightToBracket />
                Login
              </Icon>
            </a>
          </NavButton>
        </li>
      </ul>
      <span>
        <NavButton>
          <a href="">
            <Icon className={navIconGap}>
              <FaCartShopping />
              View Cart
            </Icon>
          </a>
        </NavButton>
      </span>
    </nav>
  );
}

function MainNav() {
  return (
    <div className={`${navStyle} flex justify-between items-center`}>
      <Icon className={navIconGap}>
        <GiHighKick />
        Whiff Punish
      </Icon>
      <MainNavMenu />
      <Search placeholder="Search products..." ariaLabel="Search products" />
    </div>
  );
}

function MainNavMenu() {
  return (
    <nav aria-label="Main Menu">
      <ul className="gap-4 flex">
        <li>
          <NavButton>
            <a href="">Home</a>
          </NavButton>
        </li>
        <li>
          <NavDropdownMenu
            itemGroups={[
              {
                heading: "By Type",
                items: ["Arcade Stick Parts", "Arcade Sticks", "All Products"],
              },
              {
                heading: "By Brand",
                items: ["Hori", "Qanba", "Sanwa", "Seimitsu"],
              },
            ]}
          >
            Products
          </NavDropdownMenu>
        </li>
        <li>
          <NavDropdownMenu
            itemGroups={[
              {
                items: ["Hori", "Qanba", "Sanwa", "Seimitsu"],
              },
            ]}
          >
            Brands
          </NavDropdownMenu>
        </li>
        <li>
          <NavButton>
            <a href="">FAQ</a>
          </NavButton>
        </li>
        <li>
          <NavButton>
            <a href="">About</a>
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}

function NavButton({
  children,
  className = "",
  onClick = () => {
    // do nothing
  },
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={`p-2 ${navButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function NavDropdownMenu({
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
      <NavButton onClick={() => setIsOpen(!isOpen)}>{children}</NavButton>
      <DropdownMenu className={`${navBg} p-1.5`}>
        {itemGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`}>
            {group.heading && (
              <div
                className={`italic py-1 font-bold text-center text-secondary`}
              >
                {group.heading}
              </div>
            )}
            {group.items.map((item, itemIndex) => (
              <button
                key={`item-${itemIndex}`}
                className={`p-1 w-full min-w-max ${navButton}`}
              >
                {item}
              </button>
            ))}
          </div>
        ))}
      </DropdownMenu>
    </DropdownMenuWrapper>
  );
}

function SiteBanner() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-6xl">Whiff Punish</h1>
      <div className="pb-1 text-lg">
        Arcade sticks and parts at punishable prices!
      </div>
      <SocialLinks className="mx-auto w-min text-3xl" />
    </div>
  );
}
