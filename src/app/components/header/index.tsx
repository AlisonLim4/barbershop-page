"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import UseMedia from "../../../hooks/UseMedia";

export const Header = () => {
  const mobile = UseMedia("(max-width: 1300px)");
  const [menuActive, setMenuActive] = useState(false);
  function handleMobileMenu() {
    setMenuActive(!menuActive);
    console.log(menuActive);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" width={118} height={64} alt="logo" />
      </div>

      <div className={!mobile && styles.hidden}>
        <button onClick={handleMobileMenu}>
          <GiHamburgerMenu color="#f2dac2" size={24} />
        </button>
      </div>

      <nav
        className={`${mobile ? styles.nav_menu_mobile : styles.nav_menu} ${
          !menuActive && mobile && styles.hidden
        }`}
      >
        <ul>
          {/* <li>
            <Link href={""}>Home</Link>
          </li> */}
          <li>
            <Link href={""}>Preços e serviços</Link>
          </li>
          <li>
            <Link href={""}>Nossa equipe</Link>
          </li>
          <li>
            <Link href={""}>franchse</Link>
          </li>
          <li>
            <Link href={""}>our team</Link>
          </li>
          <li>
            <Link href={""}>contato</Link>
          </li>
          <li>
            <Link href={""}>portfólio</Link>
          </li>
          <li>
            <Link href={""}>Loja</Link>
          </li>
        </ul>
      </nav>

      <div className={mobile ? styles.hidden : styles.cart}>
        <HiOutlineShoppingBag color="#f2dac2" size={24} />
        <div className={styles.cart__count}>
          <span>carrinho</span>
          <div className={styles.cart__count_p}>
            <p>0</p>
          </div>
        </div>
      </div>
    </header>
  );
};
