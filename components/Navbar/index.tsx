"use client"; // چون از state استفاده می‌کنیم، باید از "use client" استفاده کنیم
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/image/img.webp";
import styles from "./navbar.module.css";
import { VscSearch } from "react-icons/vsc";
import NavLink from "../NavLink";

interface NavbarProps {
  onSearch: (query: string) => void; 
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <header className={styles.navContainer}>
      <div className={styles.navImg}>
        <Image width={70} height={70} src={logo} alt="food" />
      </div>
      <div className={styles.navSearch}>
        <div>
          <VscSearch style={{ width: "40px", cursor: "pointer" }} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <nav className={styles.navHome}>
        <ul className={styles.navList}>
          <NavLink href="/">
            <li>Home</li>
          </NavLink>
          <NavLink href="/favorite">
            <li>Favorite</li>
          </NavLink>
          <NavLink href="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;