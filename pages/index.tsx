import Link from 'next/link'

export default function Home() {
  return (
    <div>
        hello
        <ul>
          <li>
            <Link href="/protfolio">prot</Link>
          </li>
          <li>
          <Link href="/protfolio/list">list</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
  )
}
