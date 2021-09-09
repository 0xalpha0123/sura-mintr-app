import Link from "next/link"

const linksData = [
  {
    label: "Contact us",
    url: "/contact",
  }
]

const Footer = () => {
  const links = linksData.map(d => (
    <li key={d.url}>
      <Link href={d.url}>
        <a>{d.label}</a>
      </Link>
    </li>
  ))
  return (
    <footer>
      <ul>{links}</ul>
    </footer>
  )
}

export default Footer