import { NextResponse } from "next/server";
// const user = false;
const cookie = "next-boss";
export const middleware = (request) => {
  // if (!user) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  const coo = request.cookies.get("token");
  if (!coo || coo.value !== cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/services"],
};
