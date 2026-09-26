import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"), email: varchar("email", { length: 320 }), loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(), lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

const timestamps = { createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull() };
const leadFields = { name: varchar("name", { length: 160 }).notNull(), email: varchar("email", { length: 320 }).notNull(), phone: varchar("phone", { length: 40 }), company: varchar("company", { length: 200 }) };

export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(), ...leadFields,
  requirement: varchar("requirement", { length: 180 }).notNull(), message: text("message").notNull(), status: mysqlEnum("status", ["new", "in_progress", "closed"]).default("new").notNull(), ...timestamps,
});
export const consultationRequests = mysqlTable("consultation_requests", {
  id: int("id").autoincrement().primaryKey(), ...leadFields,
  focus: varchar("focus", { length: 180 }).notNull(), status: mysqlEnum("status", ["new", "scheduled", "closed"]).default("new").notNull(), ...timestamps,
});
export const healthCheckupLeads = mysqlTable("health_checkup_leads", {
  id: int("id").autoincrement().primaryKey(), ...leadFields,
  website: varchar("website", { length: 320 }), stage: varchar("stage", { length: 120 }), marketing: text("marketing"), technology: text("technology"), challenge: text("challenge"), ...timestamps,
});
export const leadMagnetLeads = mysqlTable("lead_magnet_leads", {
  id: int("id").autoincrement().primaryKey(), ...leadFields, asset: varchar("asset", { length: 160 }).default("software-project-planning-guide").notNull(), ...timestamps,
});
export const careerApplications = mysqlTable("career_applications", {
  id: int("id").autoincrement().primaryKey(), name: varchar("name", { length: 160 }).notNull(), email: varchar("email", { length: 320 }).notNull(), phone: varchar("phone", { length: 40 }), position: varchar("position", { length: 180 }).notNull(), resume: varchar("resume", { length: 500 }), message: text("message"), status: mysqlEnum("status", ["new", "reviewing", "closed"]).default("new").notNull(), ...timestamps,
});

export type User = typeof users.$inferSelect; export type InsertUser = typeof users.$inferInsert;
export type ContactSubmission = typeof contactSubmissions.$inferSelect; export type ConsultationRequest = typeof consultationRequests.$inferSelect;
