import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
