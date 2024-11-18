import Navigation from "@/components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./media.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
