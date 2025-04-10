import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <>
    <div>
Vegies Page
    </div>
    <ul>
      <li><Link href="/products/vegis/Brocali">Brocali</Link></li>
      <li><Link>Brocali</Link></li>
      <li><Link>Brocali</Link></li>
      </ul>
    </>
  )
}

export default page
