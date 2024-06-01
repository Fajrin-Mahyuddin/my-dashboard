export async function GET() {
  const data = [
    {
      id: "1",
      name: "fajrin",
      phone: "1234",
      gender: "male",
      address: "lorem abc",
      desc: "nothing",
    },
    {
      id: "2",
      name: "mahyuddin",
      phone: "4321",
      gender: "male",
      address: "lorem abc",
      desc: "yes",
    },
  ];
  return Response.json({ data });
}
