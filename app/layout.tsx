import { Inter } from "next/font/google";
import "./globals.css";
import { fetchNavAndFoot } from "./utils/apiNavFoot";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchNavAndFoot();
  console.log("LAYOUT = ", data);

  const { navbar, footer } = data.page;

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar navData={navbar} />
        <main className="w-9/12 m-auto max-w-screen-xl">{children}</main>
        <Footer footerData={footer} />
      </body>
    </html>
  );
}
