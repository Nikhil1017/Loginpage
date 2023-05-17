import {useTheme} from "next-themes"

function DarkModeToggle() {
  const {theme, setTheme} = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-blue-1"
    >
      dark mode
    </button>
  )
}

export default DarkModeToggle