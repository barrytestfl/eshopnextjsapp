// import type { NextFetchEvent, NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// const isLoggedIn = (req: NextRequest) => {
// return true;
// };
// const isAdmin = (req: NextRequest) => { 
//     console.log('admin',req)
// return false;
// };
// export function middleware(req: NextRequest, ev: NextFetchEvent) {
// if (!isLoggedIn(req) && !isAdmin(req)) {
//             return NextResponse.redirect("/forbidden");
// }
// return NextResponse.next();
// }

import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('admin',request) 
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/redirected', request.url))
  }
  if (request.nextUrl.pathname === '/another') {
    return NextResponse.rewrite(new URL('/rewrite', request.url))
  }
  return NextResponse.next()
}
