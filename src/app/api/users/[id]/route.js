export async function PATCH(request, { params }) {
  const body = await request.json();
  const index = users.findIndex((user) => user.id === parseInt(params.id));
  users[index] = {
    id: parseInt(params.id),
    name: body.name,
    email: body.email,
  };
  return Response.json({
    message: "user updated",
    users,
  });
}

export async function DELETE(request, { params }){
  const newUsers = users.filter((user) => user.id !== parseInt(params.id));
  return Response.json({
    message: "user deleted",
    newUsers,
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
