import { createMocks } from "node-mocks-http";
import handleEvents from "../pages/account";

describe("/api/events", () => {
  test("returns a group with the group title", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        club_name: "Swimming",
      },
    });

    await handleEvents(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        club_name: "Swimming Club",
      })
    );
  });
});
