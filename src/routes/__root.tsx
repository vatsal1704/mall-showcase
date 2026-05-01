import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-9xl text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This part of the dream doesn't exist yet.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-primary hover:text-primary-foreground transition-colors">
          Back to overview
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "American Dream — Partner Deck" },
      { name: "description", content: "An interactive partner deck for American Dream: 3M sq ft of retail, dining, and entertainment serving 55M people in the NYC metro." },
      { name: "theme-color", content: "#0d0418" },
      { property: "og:title", content: "American Dream — Partner Deck" },
      { property: "og:description", content: "Lease, sponsor, or activate inside the Western Hemisphere's largest entertainment & retail destination." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
