import useThemeStore from "../store/useThemeStore";

const Footer: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  const footerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    width: "80%",
    color: theme === "dark" ? "#fff" : "#333",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "0.875rem",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <p>&copy; 2025 Created by Xing Yin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
