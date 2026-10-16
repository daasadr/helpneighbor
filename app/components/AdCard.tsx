import styles from "./AdCard.module.css";
import type { Ad } from "../types/ad";

type AdCardProps = {
    ad : Ad;
};

export default function AdCard({ ad }: AdCardProps) {
    return (
        <article className={styles.card}>
            <h2 clasName={styles.title}>{ad.title}</h2>
            <p className={styles.description}>{ad.description}</p>
        </article>
    );
}