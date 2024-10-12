import { NextResponse } from "next/server";
// const user = false;
const cookie='super-boss'
export const middleware = (request) => {
    // if (!user) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  const cookies=request.cookies.get("token")
  if (!cookies||cookies.value!==cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
