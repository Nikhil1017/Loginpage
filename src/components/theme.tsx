import {useTheme} from "next-themes";
import Image from "next/image";

function DarkModeToggle() {
  const {theme, setTheme} = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="absolute right-5 top-6 sm:top-8 sm:right-10"
    >
      <Image
      width={30}
      height={30}
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