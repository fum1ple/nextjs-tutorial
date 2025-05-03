export default function ReviewDetail({params}: {params: {productId: string; reviewId: string}}) {
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
