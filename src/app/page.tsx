"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Homeslider from "@/components/Homeslider/Homeslider";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";

 // In pages/index.js or pages/page.js
export default function Home() {
    return (
        <main className={styles.main}>
            <Homeslider/>
            <MovieCarousel/>
        </main>
    )
} // Ensure you have a default export

   
     



