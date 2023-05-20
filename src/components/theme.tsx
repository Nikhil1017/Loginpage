import {useTheme} from "next-themes";
import Image from "next/image";

function DarkModeToggle() {
  const {theme, setTheme} = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="absolute ml-330px sm:right-10 sm:top-4"
    >
      <Image
      width={35}
      height={36}
      src="/darkmode.svg"
      alt="dark mode"
      className="hidden dark:block"
      />
      <Image
      width={35}
      height={30}
      src="/lightmode.svg"
      alt="light mode"
      className="dark:hidden"
      />
    </button>
  )
}

export default DarkModeToggle