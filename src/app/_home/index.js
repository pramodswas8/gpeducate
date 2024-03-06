import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";
import Entry from "./entry";

async function getData() {
  const posts = await fetch("https://gorest.co.in/public/v2/posts", {
    next: { revalidate: 120 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!posts.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return posts.json();
}

const HomePage = async () => {
  const posts = await getData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        Home Page
        <Typography variant="h2" fontWeight={700}>
          Hello, {"ff"}
        </Typography>
        <List>
          {posts.map((p) => (
            <ListItem key={p.id}>
              <ListItemText primary={p.title} />
            </ListItem>
          ))}
        </List>
        {/* <Entry posts={posts} /> */}
        <Link href={"/about"}>About</Link>
      </div>
    </Suspense>
  );
};

export default HomePage;
