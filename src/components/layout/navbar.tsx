import Link from "next/link";

type NavbarLink = {
  title: string;
  href: string;
};

type NavbarProps = {
  subLinks?: NavbarLink[];
};

const navbarHeight = "60px";

const mainLinks: NavbarLink[] = [
  { title: "About", href: "/" },
  { title: "Experiences", href: "/experiences" },
];

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav
      className="w-full flex justify-center pt-2 bg-white bg-opacity-90 fixed"
      style={{ height: navbarHeight }}
    >
      {mainLinks &&
        mainLinks.map(({ title, href }) => (
          <Link href={href} key={title.toLowerCase().replace(" ", "-")}>
            <a className="pr-4 last:pr-0">{title}</a>
          </Link>
        ))}
    </nav>
  );
};

export type { NavbarProps };
export { Navbar, navbarHeight };
