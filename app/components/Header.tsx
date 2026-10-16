import styles from "./Header.module.css";
import { Cinzel } from "next/font/google";

const rivets = [styles.rivetTop, styles.rivetRight, styles.rivetBottom, styles.rivetLeft];
const plateFont = Cinzel({ subsets: ["latin", "latin-ext"], weight: ["700", "800"], variable: "--font-plate" });

export default function Header() {
  return (
    <header className={`${styles.header} ${plateFont.variable}`}>
      <div className={styles.plate}>
        {/* dekorativní vrstvy cedule */}
        <span className={styles.bead} aria-hidden="true" />
        <span className={styles.field} aria-hidden="true" />
        {rivets.map((position) => (
          <span key={position} className={`${styles.rivet} ${position}`} aria-hidden="true" />
        ))}

        <h1 className={styles.title}>HelpNeighbor</h1>
        <p className={styles.tagline}>Sousedská výpomoc</p>
      </div>
    </header>
  );
}