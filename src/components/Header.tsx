import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

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
            className="font-[Konnect] font-[500] text-[13px] md:text-[11px]" onClick={() => {
              setSelected(item.label);
              setIsOpen(false);
            }}>{item.label}</a>
        </li>
      ))
    )

  }

  return (
    <header className="w-full md:h-11 flex items-center justify-between">
      <div className="min-w-[132px] flex items-center justify-between px-[11px] py-2 rounded-full bg-(--bg-03)">
        <a href="/" className="mainLogo">
          <img src="./img/logo.png" alt="Backyard logo" />
          <span>Backyard</span>
        </a>
      </div>
      <div className={`${isOpen
        ? "absolute md:static top-16 right-0 min-w-[175px] md:w-full flex flex-col items-start gap-3 p-[14px] md:p-[3px] bg-(--bg-03) md:bg-inherit  md:flex-row md:gap-6  border-1 md:border-none border-(--color-11) rounded-[19px]"
        : "hidden md:w-full  md:flex md:flex-row md:gap-6 md:items-center md:justify-between"
        }`}>
        <nav className="w-full md:h-auto flex items-center justify-start md:justify-center">
          <ul className="md:h-full md:flex flex-col md:flex-row gap-1 md:p-[3px] md:border-1 border-(--color-05) md:rounded-full md:bg-(--bg-02)">
            {navLink()}
          </ul>
        </nav>
        {!connected ? (
          <button
            className="w-full md:w-auto text-[11px] !font-[Konnect] !font-[500] btn "
            onClick={() => setConnected(true)}>Connect</button>
        ) : (
          <div className="flex items-center h-[40px] pl-[11px] py-[3px] pr-[3px] gap-2 rounded-full bg-(--bg-12) border border-(--color-05) hover:border-(--color-04)">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x2633...gerb"
              className=" bg-transparent text-xs text-(--color-02) outline-none placeholder:text-(--color-02) hover:placeholder:text-(--bg-08)"
            />
            <button
              onClick={() => {
                setAddress("");
                setConnected(false);
              }}
              className="size-[34px] flex items-center justify-center rounded-full bg-(--bg-13) hover:bg-(--bg-14) active:bg-(--bg-15) text-(--color-12) border-1"
            >
              <img src="./img/connect_blk.png" alt="connect" />
            </button>
          </div>
        )}
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