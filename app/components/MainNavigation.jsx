import { NavLink, Link } from "@remix-run/react"

export default function MainNavigation(){
  return (
    <nav>
      <NavLink to='/'>main</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/portfolio'>portfolio</NavLink>
      <NavLink to='/contact'>contact</NavLink>
      <Link to='/github'>github</Link>
      <Link to='/facebook'>facebook</Link>
    </nav>
  )
}