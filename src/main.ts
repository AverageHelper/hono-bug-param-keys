import { Hono } from "hono";

const route = new Hono().get("/users/:uid/:collectionId/:documentId", c => {
	const p = c.req.param("collectionId");
	return c.json([typeof p, p.toString()]);
});

export const app = new Hono() //
	.basePath("/api")
	.route("/v0/db", route);
