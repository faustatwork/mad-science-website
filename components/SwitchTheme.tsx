import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      className="cursor-pointer appearance-none rounded-md bg-gray-200 px-4 py-3 text-lg font-medium text-gray-600 outline-none ring-gray-300 transition hover:scale-105 hover:bg-gray-300 hover:shadow-xl hover:shadow-gray-200 focus:ring-4 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:shadow-gray-800"
      value={theme}
      onChange={e => setTheme(e.target.value)}
    >
      <option value="system">🖥 Sustav</option>
      <option value="dark">🌚 Tamna</option>
      <option value="light">🌞 Svijetla</option>
    </select>
  );
};

export default SwitchTheme;
