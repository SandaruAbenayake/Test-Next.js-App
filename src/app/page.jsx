import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
    <h1>Home Page</h1>

    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      <li><Link href="/about/branches">Branches</Link></li>
      <li><Link href="/products/vegis"><a>Vegies Page</a></Link></li>


      <li><Link href="https://nextjs.org/docs" target="_blank">NextJs  Web Site</Link></li>
    </ul>
    
   </>
    
    
  )
}
