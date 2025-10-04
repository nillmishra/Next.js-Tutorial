import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <Link href="/profile"><button style={{
        marginRight: '10px',
      }}>Profile</button></Link>
      <Link href="/about"><button style={{
        marginRight: '10px',
      }}>About</button></Link>
      <Link href="/dashboard"><button style={{
        marginRight: '10px',
      }}>Dashboard</button></Link>
      <Link href="/counter"><button style={{
        marginRight: '10px',
      }}>Counter</button></Link>
      <Link href="/blog"><button style={{
        marginRight: '10px',
      }}>Blog</button></Link>
      <Link href="/products"><button style={{
        marginRight: '10px',
      }}>Products</button></Link>
    </main>
  );
}