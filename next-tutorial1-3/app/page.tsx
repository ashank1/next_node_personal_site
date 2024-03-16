import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <p>text</p>
      <Link href="/about">go to about page</Link>
      <Link href="/users">Users page</Link>
    </main>
  )
}
