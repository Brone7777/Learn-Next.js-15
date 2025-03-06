import { NextResponse } from "next/server";

export const middleware = (req: Request) => {
    console.log('middleware');
    return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
    matcher: ['/about/:path*', '/info/:path*'] //ทำการเช็คว่า url ที่เข้ามามี /about/ หรือไม่ ถ้ามีจะทำการเรียก middleware และทำการ redirect ไปหน้าหลัก
}