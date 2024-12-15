export async function GET() {
  return Response.json(users, {
    headers: {
      "Set-Cookie": "cookie=value",
    },
  });
}

export async function POST(request) {
  const newUser = await request.json();
  users.push({
    id: users.length + 1,
    name: newUser.name,
    email: newUser.email,
  });
  return Response.json({
    message: "New user added",
    users,
  });
}

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "John Smith",
    email: "johnsmith@example.com",
  },
];
