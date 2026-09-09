async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {
        cache: "no-store"
      }
    );

    if (!res.ok) {
      throw new Error("Backend unavailable");
    }

    return await res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container">
      <h1>🚀 AKS Demo Shop</h1>

      <p className="subtitle">
        Backend URL:
        <br />
        <b>{process.env.NEXT_PUBLIC_API_URL}</b>
      </p>

      <h2>Products</h2>

      {products.length === 0 ? (
        <div className="error">
          ❌ Unable to connect to Backend API
        </div>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}