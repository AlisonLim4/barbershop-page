/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "./components/button";
import { Header } from "./components/header";
import styles from "./page.module.css";
import { Karantina } from "next/font/google";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import TopBar from "./components/topBar";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <main className={styles.main}>
        <section className={styles.hero_section}>
          <Header />
          <div className={styles.content}>
            <div className={styles.left_side}>
              <div className={`${styles.text} ${karantina.className}`}>
                <h1>THE BARBERSHOP</h1>
                <h2> CORTES DE CABELO E SERVIÇOS ESPECIALIZADOS</h2>
                <p>
                  Na Finest Barbershop, oferecemos uma ampla gama de serviços
                  profissionais de corte e tosa de cabelo para homens. Nossos
                  barbeiros experientes usam as mais recentes técnicas e
                  ferramentas para dar a você a aparência perfeita. Esteja você
                  precisando de um corte de cabelo clássico, barbear com navalha
                  ou aparar a barba, nós temos o que você precisa.
                </p>
              </div>

              <div className={styles.buttons}>
                <Button text="book a haircut" />
                <Button text="start shopping" />
              </div>

              <div className={styles.socials}>
                <div className={styles.icon}>
                  <Link href="">
                    <BiLogoFacebookCircle size={24} color="#f2dac2" />
                  </Link>
                </div>
                <div className={styles.icon}>
                  <Link href="">
                    <AiFillInstagram size={24} color="#f2dac2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
