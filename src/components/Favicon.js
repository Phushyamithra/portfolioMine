import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Favicon = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const favicon = document.querySelector("link[rel='icon']");
        if (theme === "dark") {
            favicon.href = "/dark_icon.jpg"; // Direct path to your dark mode icon
        } else {
            favicon.href = "/light_icon.jpg"; // Direct path to your light mode icon
        }
    }, [theme]);

    return null; // This component doesn't render anything visible
};

export default Favicon;
