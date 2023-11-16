import { Hono } from "hono";

export const app = new Hono();

// Adapted from Hono's own hono.test.ts, 'Routing' -> 'Nested route' test:

const book = app.basePath("/book");
book.get("/:id", c => {
	return c.text(`get /book/${c.req.param("id")}`);
});

const user = app.basePath("/user");
user.get("/login", c => c.text("get /user/login"));

const appForEachUser = user.basePath(":id");
appForEachUser.get("/profile", c => c.text(`get /user/${c.req.param("id")}/profile`));
