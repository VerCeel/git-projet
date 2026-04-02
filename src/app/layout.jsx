import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/static/Navbar";
import Background from "@/components/static/Background";
import Footer from "@/components/static/Footer";

const nunito = Nunito({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Github Project',
    template: '%s | Github Project',
  },
  description: "soutnance Github project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className + " text-white"}>
        <NavBar />
        <Background>
          <div className="pt-24 pb-20 max-w-7xl mx-auto overflow-y-auto">
            {children}
          </div>
        </Background>
        <Footer />
      </body>
    </html>
  );
}
