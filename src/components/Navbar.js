import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex justify-between flex-wrap gap-5 px-4 py-2">
        <NavLink end to='/information'><span className="nav-link">1</span> Personal Info</NavLink>
        <NavLink end to='/information/experience'><span className="nav-link">2</span> Experience Info</NavLink>
        <NavLink end to='/information/project'><span className="nav-link">3</span> Project Info</NavLink>
        <NavLink end to='/information/education'><span className="nav-link">4</span> Education Info</NavLink>
        <NavLink end to='/information/miscellaneous'><span className="nav-link">5</span> Miscellaneous</NavLink>
        <NavLink end to='/information/color'><span className="nav-link">6</span> Color</NavLink>
        <NavLink end to='/information/templates'><span className="nav-link">7</span> Templates</NavLink>
        <NavLink end to='/information/finish'><span className="nav-link">8</span> Finish</NavLink>
    </div>
  )
}
