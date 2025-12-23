import "./globals.css";

export const metadata = {
  title: "Certification Management",
  description: "Certification management dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-8 bg-white">{children}</div>
      </body>
    </html>
  );
}
