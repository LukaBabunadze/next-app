import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
