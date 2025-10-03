export default async function ReviewDetails({params}: {params:  Promise<{productId: string, reviewsId: string}>;
}) {
    const {productId, reviewsId} = await params;
    return (
        <h1>Review Details Page for Product {productId}, Review {reviewsId}</h1>
    );
}