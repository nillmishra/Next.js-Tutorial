import Link from "next/link";

export default function ProductList() {
    const productId = 123;
    return (
        <>
        <h1>Product List</h1>
        <Link href="/products/1"><h2>Product 1</h2></Link>
        <Link href="/products/2"><h2>Product 2</h2></Link>
        <Link href="/products/3"><h2>Product 3</h2></Link>
        <Link href="/products/4"><h2>Product 4</h2></Link>
        <Link href="/products/5"><h2>Product 5</h2></Link>
        <Link href="/products/6" replace><h2>Product 6</h2></Link>
        <Link href={`/products/${productId}`}><h2>Product {productId}</h2></Link>
        </>
    );
}