import Link from "next/link";

export default function Header() {
  const routes = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="flex flex-row">
      <div>
        <h1>Devconinck</h1>
      </div>
      <div>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
