import Image from "next/image";
import Header from "./components/Header";
import AdCard from "./components/AdCard";
import { ads } from "./data/ads";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <h1 className={styles.heading}>New ads</h1>
        <ul className={styles.list}>
          {ads.map((ad) => (
            <li key={ad.id}>
              <AdCard ad={ad} />
            </li>  
          ))}
        </ul>  
    </main>
  );
}
