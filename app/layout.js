import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/BootstrapSetup";
import "../public/assets/css/style.css";
import "../public/assets/css/main.css";
import "../public/assets/css/responsive.css";
import { UserProvider } from "./context/userContext";
export const metadata = {
  title:{
    template:"%s | HeadthyEatsBd",
    default:"HeadthyEatsBd"
  }
}
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <UserProvider>
        <Header />
        {children}
        <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

