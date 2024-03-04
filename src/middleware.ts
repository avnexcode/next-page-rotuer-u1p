import withAuth from "@/middlewares/withAuth";
import { NextRequest, NextResponse } from "next/server";

export const mainMiddleware = (req: NextRequest) => {
    // const isLogin = true
    // if (isLogin) {
    //     return NextResponse.next()
    // } else {
    //     return NextResponse.redirect(new URL('/auth/login', req.url))
    // }

    const res = NextResponse.next()
    return res

}

export default withAuth(mainMiddleware, ["/about","/product", "/product-server", "/product-static"])

// export const config = {
//     matcher: ['/product', '/about', '/product-server']
// }