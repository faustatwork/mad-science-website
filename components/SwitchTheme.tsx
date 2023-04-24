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
      className="cursor-pointer appearance-none rounded-md bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
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
