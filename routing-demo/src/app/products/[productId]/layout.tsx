export default function ProductDetailsLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
    <div>
        <h1>Product featured</h1>
        {children}
    </div>
    );
}