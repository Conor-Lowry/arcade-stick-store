import {
  FaUser,
  FaArrowRightToBracket,
  FaCartShopping,
  FaBars,
  FaChevronUp,
  FaChevronDown,
  FaX,
} from "react-icons/fa6";

import { Fragment, ReactNode, useState } from "react";
import { DropdownMenu, DropdownMenuWrapper } from "../molecules/dropdown.tsx";
import Search from "../molecules/search.tsx";
import { SocialLinks } from "../molecules/social-links.tsx";
import IconWithText from "../atoms/icon-with-text.tsx";
import tailwindConfig from "../../../tailwind.config";
import { useMediaQuery } from "../../hooks.ts";
import { SiteLogo } from "../molecules/site-logo.tsx";
import { IconType } from "react-icons";

const navBg = "bg-brand";
const navStyle = `${navBg} py-2 px-8`;
const navButton = "hover:bg-primary";
const navIconGap = "gap-4 sm:gap-2";
const mainNavItems: MainNavItem[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Products",
    children: [
      {
        text: "By Type",
        children: [
          {
            text: "Arcade Stick Parts",
            href: "#",
          },
          {
            text: "Arcade Sticks",
            href: "#",
          },
          {
            text: "All Products",
            href: "#",
          },
        ],
      },
      {
        text: "By Brand",
        children: [
          {
            text: "Hori",
            href: "#",
          },
          {
            text: "Qanba",
            href: "#",
          },
          {
            text: "Sanwa",
            href: "#",
          },
          {
            text: "Seimitsu",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    text: "Brands",
    children: [
      {
        text: "Hori",
        href: "#",
      },
      {
        text: "Qanba",
        href: "#",
      },
      {
        text: "Sanwa",
        href: "#",
      },
      {
        text: "Seimitsu",
        href: "#",
      },
    ],
  },
  {
    text: "FAQ",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
];
const userNavItems: Record<string, UserNavItem> = {
  signUp: {
    text: "Sign Up",
    href: "",
    icon: FaUser,
  },
  login: {
    text: "Login",
    href: "",
    icon: FaArrowRightToBracket,
  },
  viewCart: {
    text: "View Cart",
    href: "",
    icon: FaCartShopping,
  },
};

export default function Header() {
  const isDesktop = useMediaQuery(
    `(min-width: ${tailwindConfig.theme.screens.md})`,
  );
  return isDesktop ? <DesktopHeader /> : <MobileHeader />;
}

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`${navBg} px-[--horizontal-gutter] py-4 flex flex-col gap-2 text-lg`}
    >
      <div className={`flex justify-between`}>
        <SiteLogo className={`${navIconGap} font-bold`} />
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FaX /> : <FaBars />}
        </button>
      </div>
      {showMenu && <MobileMainNavMenu />}
    </header>
  );
}

function DesktopHeader() {
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
    <nav
      aria-label="User Menu"
      className={`${navStyle} flex flex-col sm:flex-row sm:justify-between items-center`}
    >
      <ul className="gap-2 flex flex-col sm:flex-row">
        <li>
          <NavButton>
            <a href={userNavItems.signUp.href}>
              <IconWithText
                Icon={userNavItems.signUp.icon}
                text={userNavItems.signUp.text}
                className={navIconGap}
              />
            </a>
          </NavButton>
        </li>
        <li>
          <NavButton>
            <a href={userNavItems.login.href}>
              <IconWithText
                Icon={userNavItems.login.icon}
                text={userNavItems.login.text}
                className={navIconGap}
              />
            </a>
          </NavButton>
        </li>
      </ul>
      <span>
        <NavButton>
          <a href={userNavItems.viewCart.href}>
            <IconWithText
              Icon={userNavItems.viewCart.icon}
              text={userNavItems.viewCart.text}
              className={navIconGap}
            />
          </a>
        </NavButton>
      </span>
    </nav>
  );
}

function MainNav() {
  return (
    <div className={`${navStyle} flex justify-between items-center`}>
      <SiteLogo className={navIconGap} />
      <MainNavMenu />
      <Search className="w-[15cqi]" ariaLabel="Search products" />
    </div>
  );
}

function MobileMainNavMenu() {
  return (
    <nav aria-label="Main Menu" className="contents">
      <ul className="contents">
        <li>
          <a href={userNavItems.signUp.href}>
            <IconWithText
              Icon={userNavItems.signUp.icon}
              text={userNavItems.signUp.text}
              className={navIconGap}
            />
          </a>
        </li>
        <li>
          <a href={userNavItems.login.href}>
            <IconWithText
              Icon={userNavItems.login.icon}
              text={userNavItems.login.text}
              className={navIconGap}
            />
          </a>
        </li>
        <li>
          <a href={userNavItems.viewCart.href}>
            <IconWithText
              Icon={userNavItems.viewCart.icon}
              text={userNavItems.viewCart.text}
              className={navIconGap}
            />
          </a>
        </li>
        {mainNavItems.map((item, index) => {
          return <NavItem item={item} key={index} />;
        })}
        <li>
          <Search className="w-full" ariaLabel="Search products" />
        </li>
      </ul>
    </nav>
  );
}

function NavItem({ item, indent = 0 }: { item: MainNavItem; indent?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  let className = "";

  switch (indent) {
    case 0:
      break;
    case 1:
      className = "px-4";
      break;
    case 2:
      className = "px-8";
      break;
    default:
      throw new Error("There should not be more than two nested nav menus");
  }

  return (
    <li className={className}>
      {item.href && (
        <button>
          <a href={item.href}>{item.text}</a>
        </button>
      )}
      {item.children && (
        <>
          <button
            className={`flex justify-between w-full`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {item.text}
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isOpen &&
            item.children.map((child, index) => (
              <ul key={index}>
                <NavItem item={child} indent={indent + 1} />
              </ul>
            ))}
        </>
      )}
    </li>
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
          <Fragment key={`group-${groupIndex}`}>
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
          </Fragment>
        ))}
      </DropdownMenu>
    </DropdownMenuWrapper>
  );
}

function SiteBanner() {
  return (
    <div className="p-6 text-center hidden sm:block">
      <h1 className="text-6xl">Whiff Punish</h1>
      <div className="pb-1 text-lg">
        Arcade sticks and parts at punishable prices!
      </div>
      <SocialLinks className="mx-auto w-min text-3xl" />
    </div>
  );
}

type MainNavItem = {
  text: string;
} & (
  | {
      href: string;
      children?: never;
    }
  | {
      href?: never;
      children: MainNavItem[];
    }
);

type UserNavItem = {
  text: string;
  href: string;
  icon: IconType;
};
