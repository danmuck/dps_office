// components/RouteRegistry.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import ListItem from "../lists/ListItem";

function getRoutePaths(dir: string, parent = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // If it's a route-group folder (e.g. "(auth)"), recurse but keep the same parent path
      if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
        routes.push(...getRoutePaths(fullPath, parent));
      } else {
        // Normal folder: include its segment
        const newParent = path.join(parent, entry.name);
        routes.push(...getRoutePaths(fullPath, newParent));
      }
    } else if (entry.isFile() && entry.name === "page.tsx") {
      // Build the URL from `parent` (or "/" for root)
      let route = parent || "/";

      // Normalize Windows separators
      route = route.replace(/\\+/g, "/");

      // Convert dynamic segments:
      //   [...slug] → :slug*    and   [id] → :id
      route = route
        .replace(/\[\.\.\.(.+?)\]/g, ":$1*")
        .replace(/\[(.+?)\]/g, ":$1");

      // Ensure a leading slash (so "users" → "/users", but "/" stays "/")
      if (!route.startsWith("/")) {
        route = "/" + route;
      }

      routes.push(route);
    }
  }

  return routes;
}

export default function RouteRegistry() {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutePaths(appDir).sort();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Available Routes</h1>
      <ul className="space-y-2">
        {routes.map((route) => (
          <ListItem key={route} >
            <Link href={route} className="text-white-400 hover:text-white">
              {route}
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}