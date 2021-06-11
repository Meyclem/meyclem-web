import Link from "next/link";

type NavbarLink = {
  title: string;
  href: string;
};

type NavbarProps = {
  mainLinks: NavbarLink[];
  subLinks?: NavbarLink[];
};

const navbarHeight = "80px";

const Navbar: React.FC<NavbarProps> = ({ mainLinks }) => {
  return (
    <nav
      className="container mx-auto pt-4 flex justify-between px-2 sm:px-0"
      style={{ height: navbarHeight }}
    >
      <img
        className="rounded-full h-14 w-14"
        src="https://avatars.githubusercontent.com/u/29123047?v=4"
        alt="Clement's picture"
      />
      {mainLinks &&
        mainLinks.map(({ title, href }) => (
          <Link href={href} key={title.toLowerCase().replace(" ", "-")}>
            <a>{title}</a>
          </Link>
        ))}
    </nav>
  );
};

export type { NavbarProps };
export { Navbar, navbarHeight };
