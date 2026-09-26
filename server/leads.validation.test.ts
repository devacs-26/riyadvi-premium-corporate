import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function caller() {
  const ctx: TrpcContext = {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
  return appRouter.createCaller(ctx);
}

describe("lead intake validation", () => {
  it("rejects malformed contact email before database work", async () => {
    await expect(caller().leads.contact({ name: "Jane Smith", email: "not-an-email", requirement: "Website", message: "A detailed project brief." })).rejects.toThrow();
  });

  it("rejects contact messages that are too short", async () => {
    await expect(caller().leads.contact({ name: "Jane Smith", email: "jane@example.com", requirement: "Website", message: "short" })).rejects.toThrow();
  });

  it("rejects health checkups without a useful challenge", async () => {
    await expect(caller().leads.healthCheckup({ name: "Jane Smith", email: "jane@example.com", challenge: "short" })).rejects.toThrow();
  });

  it("rejects career applications without a valid position", async () => {
    await expect(caller().leads.application({ name: "Jane Smith", email: "jane@example.com", position: "" })).rejects.toThrow();
  });
});
