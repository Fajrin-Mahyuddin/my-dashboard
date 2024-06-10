export async function GET() {
  const data = [
    {
      id: "1",
      name: "example 1",
      phone: "1234",
      gender: "male",
      address: "lorem abc",
      desc: "nothing",
    },
    {
      id: "2",
      name: "example 2",
      phone: "4321",
      gender: "male",
      address: "lorem abc",
      desc: "yes",
    },
  ];
  return Response.json({ data });
}
