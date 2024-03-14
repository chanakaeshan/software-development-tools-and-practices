import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <title>Accommodation Finder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      <div className="hero">
        
        <div className="hero-text">
          <h1>Find Your Perfect Accommodation</h1>
          <p>
            Explore a wide range of properties near NSBM Green University and find the perfect place to call home.
          </p>
          <Link href="/register"><button>Get Started</button></Link>
        </div>
      </div>
    </div>
  );
}
