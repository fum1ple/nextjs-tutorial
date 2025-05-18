import { notFound } from "next/navigation";

export default function ReviewDetail({params}: {params: {productId: string; reviewId: string}}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <html>
      <body>
        <h1>Review Detail</h1>
        <p>Product ID: {params.productId}</p>
        <p>Review ID: {params.reviewId}</p>
      </body>
    </html>
  );
}
