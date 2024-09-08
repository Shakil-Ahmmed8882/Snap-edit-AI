import { clerkMiddleware } from '@clerk/nextjs/server'

// Apply Clerk middleware, excluding `/api/webhooks/*`
export default clerkMiddleware()

export const config = {
  matcher: [
    // Protect all routes except `/api/webhooks/*`
    '/((?!api/webhooks(.*)|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always run Clerk for other API routes
    '/(api|trpc)(.*)',
  ],
}
