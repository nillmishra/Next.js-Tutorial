export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js application with routing',
};

export default function AuthLayout({ 
  children, 
  }: { children: React.ReactNode 
  }) {
  return (
    <html lang="en">
        <body>
          {children}
          <footer
          style={{
            backgroundColor: 'lightgray',
            padding: '1rem',
            marginTop: '2rem',
          }}>
            <p>© 2024 My Next.js App</p>
          </footer>
          </body>
    </html>
  );
}