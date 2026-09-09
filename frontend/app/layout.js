import "./globals.css";

export const metadata = {
  title: "AKS Demo Shop",
  description: "Frontend for AKS Learning"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}