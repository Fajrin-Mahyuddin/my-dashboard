export async function GET() {
  const data = process.env.MY_KEY;
  return Response.json({ data });
}
