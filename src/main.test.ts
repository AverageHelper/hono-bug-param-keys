import { describe, expect, test } from "vitest";
import { app } from "./main.js";

describe("Main", () => {
	test.each(["baz", "bin", "keys"])("GET responds with '%s'", async p => {
		const res = await app.request(`/api/v0/db/users/:uid/${p}/:documentId`);
		expect(res.status).toBe(200);
		expect(await res.json()).toMatchObject(["string", p]);
	});
});
