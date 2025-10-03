import { notFound } from "next/navigation";

export default async function ReviewDetails({params}: {params:  Promise<{productId: string, reviewsId: string}>;
}) {
    const {productId, reviewsId} = await params;
    if(parseInt(reviewsId) > 1000) {
        notFound();
    }
    return (
        <h1>Review Details Page for Product {productId}, Review {reviewsId}</h1>
    );
}