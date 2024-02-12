test("GET to /api/v1/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const database = responseBody.database;
  expect(database).toBeDefined();
  expect(database.version).toEqual(expect.any(Number));
  expect(database.version).toBeGreaterThanOrEqual(16);
  expect(database.max_connections).toEqual(expect.any(Number));
  expect(database.active_connections).toBeGreaterThanOrEqual(1);
  expect(database.max_connections).toBeGreaterThanOrEqual(
    database.active_connections,
  );
});