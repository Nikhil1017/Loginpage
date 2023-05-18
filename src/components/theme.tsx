import {useTheme} from "next-themes";
import Image from "next/image";

function DarkModeToggle() {
  const {theme, setTheme} = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="absolute ml-314.5px mt-7 "
    >
      <Image
      width={32}
      height={32}
      src="/darkmode.svg"
      alt="dark mode"
      className="hidden dark:block"
      />
      <Image
      width={30}
      height={30}
      src="/lightmode.svg"
      alt="light mode"
      className="dark:hidden"
      />
    </button>
  )
}

export default DarkModeToggle