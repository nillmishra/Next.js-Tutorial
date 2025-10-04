import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const productId = (await params).productId;
    return {
        title: `Product ${productId} - My Next.js App`,
        description: `Details and information about product ${productId}.`,
    };
}



export default async function ProductDetails({params}: {params:  Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
    return (
        <h1>Product Details Page {productId}</h1>
    );
}