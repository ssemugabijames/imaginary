import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ['/api/webhooks/clerk']
=======
 publicRoutes: ['/api/webhooks/clerk']
>>>>>>> 74358787095078057f2253e1f26a76706d7bc673
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
