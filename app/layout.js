import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Script from "next/script";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200","300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBraisMono"
 });

export const metadata = {
  title: "Hasan-Wazid",
  description: "Professional Frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Script id="siteagent-config" strategy="beforeInteractive">
          {`window.SiteAgent = {
            token: "sa_pub_v1.eyJzaXRlVXJsIjoiaHR0cHM6Ly9oYXNhbi13YXppZC1wb3J0Zm9saW8udmVyY2VsLmFwcCIsImRvbWFpbiI6Imhhc2FuLXdhemlkLXBvcnRmb2xpby52ZXJjZWwuYXBwIiwiaXNzdWVkQXQiOjE3NzgwNDkyMzY1ODUsImV4cGlyZXNBdCI6MTgwOTU4NTIzNjU4NSwicGxhbiI6ImZyZWUifQ.rkIarryMw58H2hzLK5ZT3f42NFVKshhIEUoV9tg5lBs",
            position: "bottom-right",
            theme: "light",
            primaryColor: "#E53E3E",
            greeting: "Welcome! 🛒 How can I help you today?",
            placeholder: "Ask about products, shipping, returns...",
            leadCapture: true
          }`}
        </Script>
        <Script
          src="https://cdn.jsdelivr.net/gh/Webexguru-Hasan/siteagent-widget@v1.0.3/siteagent.js"
          strategy="lazyOnload"
        />
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
