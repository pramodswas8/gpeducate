"use client";
import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";

const Entry = ({ posts }) => {
  useEffect(() => {
    console.log("enter", posts);
  }, []);
  return (
    <List>
      {posts.map((p) => (
        <ListItem key={p.id}>
          <ListItemText primary={p.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default Entry;
