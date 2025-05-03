export default function ProductDetails( { 
    params,
  }: {
    params: { productId: string }
  } ) {
  return (
    <html>
      <body>
        <h1>Product Details</h1>
        <p>Product ID: {params.productId}</p>
        <p>Product Name: Product {params.productId}</p>
        <p>Product Description: This is an example product.</p>
      </body>
    </html>
  )
}