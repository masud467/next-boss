import {  NextResponse } from "next/server";

export const middleware = (request) => {
    return NextResponse.redirect(new URL("/about/history", request.url));
  };


  export const config = {
    matcher: "/about",
  };