export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health`,
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    return Response.json({
      status: "READY"
    });

  } catch {
    return Response.json(
      {
        status: "NOT READY"
      },
      {
        status: 503
      }
    );
  }
}