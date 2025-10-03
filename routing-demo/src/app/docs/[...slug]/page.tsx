// app/docs/[[...slug]]/page.tsx

export default function Docs({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;

  if (slug?.length === 2) {
    return <h1>Docs Page for {slug[0]} and {slug[1]}</h1>;
  } 
  else if (slug?.length === 1) {
    return <h1>Docs Page for {slug[0]}</h1>;
  }

  return <h1>Docs Page</h1>;
}
