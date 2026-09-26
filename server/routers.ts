import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getLeadOverview, insertApplication, insertConsultation, insertContact, insertHealthCheckup, insertLeadMagnet } from "./db";

const person = { name: z.string().min(2), email: z.string().email(), phone: z.string().optional(), company: z.string().optional() };
export const appRouter = router({
  system: systemRouter,
  auth: router({ me: publicProcedure.query(opts => opts.ctx.user), logout: publicProcedure.mutation(({ ctx }) => { const cookieOptions = getSessionCookieOptions(ctx.req); ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 }); return { success: true } as const; }) }),
  leads: router({
    contact: publicProcedure.input(z.object({ ...person, requirement: z.string().min(2), message: z.string().min(10) })).mutation(async ({ input }) => { await insertContact(input); return { success: true }; }),
    consultation: publicProcedure.input(z.object({ ...person, focus: z.string().min(2) })).mutation(async ({ input }) => { await insertConsultation(input); return { success: true }; }),
    healthCheckup: publicProcedure.input(z.object({ ...person, website: z.string().optional(), stage: z.string().optional(), marketing: z.string().optional(), technology: z.string().optional(), challenge: z.string().min(10) })).mutation(async ({ input }) => { await insertHealthCheckup(input); return { success: true }; }),
    leadMagnet: publicProcedure.input(z.object({ ...person })).mutation(async ({ input }) => { await insertLeadMagnet(input); return { success: true }; }),
    application: publicProcedure.input(z.object({ name: z.string().min(2), email: z.string().email(), phone: z.string().optional(), position: z.string().min(2), resume: z.string().optional(), message: z.string().optional() })).mutation(async ({ input }) => { await insertApplication(input); return { success: true }; }),
    overview: publicProcedure.query(() => getLeadOverview()),
  }),
});
export type AppRouter = typeof appRouter;
