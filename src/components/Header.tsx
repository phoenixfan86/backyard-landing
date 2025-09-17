import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: 'Home',
      link: '#',
    },
    {
      label: 'About',
      link: '#About',
    },
    {
      label: 'How it work',
      link: '#',
    },
    {
      label: 'Token design',
      link: '#',
    },
    {
      label: 'YARD flywheel',
      link: '#',
    },
  ]

  const navLink = () => {
    return (
      navItems.map((item, i) => (
        <li
          key={i}
          className={`link ${selected === item.label ? "chosen" : ""}`} >
          <a
            href={item.link}
            className="font-[Konnect] font-[500] text-[13px]" onClick={() => {
              setSelected(item.label);
              setIsOpen(false);
            }}>{item.label}</a>
        </li>
      ))
    )

  }

  return (
    <header className="w-full flex items-center justify-between">
      <div className="min-w-[132px] flex items-center justify-between px-[11px] py-2 rounded-full bg-(--bg-01)">
        <a href="/" className="mainLogo">
          <img src="./img/logo.png" alt="Backyard logo" />
          <span>Backyard</span>
        </a>
      </div>
      <div className={`${isOpen
        ? "absolute md:static top-12 right-0 w-[175px] md:w-full flex flex-col items-start gap-3 p-[14px] md:p-[3px] bg-(--bg-03) md:bg-inherit  md:flex-row md:gap-6  border-1 md:border-none border-(--color-11) rounded-[19px]"
        : "hidden md:w-full md:flex md:flex-row md:gap-6 md:items-center md:justify-between"
        }`}>
        <nav className="w-full flex items-center justify-start md:justify-center">
          <ul className="md:flex flex-col md:flex-row gap-1 md:p-[3px] md:border-1 border-(--color-05) md:rounded-full md:bg-(--bg-02)">
            {navLink()}
          </ul>
        </nav>
        <button className="w-full md:w-auto text-[11px] !font-[Konnect] !font-[500] btn">Connect</button>
      </div>
      <button
        className="md:hidden size-10 flex flex-col items-center justify-center  gap-[3px] border-1 border-(--color-09) rounded-[11px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-[15px] h-[2px] bg-(--color-10) rounded-full"></span>
        <span className="w-[9px] h-[2px] bg-(--color-10) rounded-full"></span>
        <span className="w-[15px] h-[2px] bg-(--color-10) rounded-full"></span>
      </button>

    </header>
  );
}
export default Header;