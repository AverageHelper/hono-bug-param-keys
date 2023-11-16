import { describe, expect, test } from "vitest";
import { app } from "./main.js";

describe("Main", () => {
	test.each(["baz", "bin", "keys"])("GET responds with '%s'", async p => {
		const res = await app.request(`http://localhost/book/${p}`, { method: "GET" });
		expect(res.status).toBe(200);
		expect(await res.text()).toBe(`get /book/${p}`);
	});
});
