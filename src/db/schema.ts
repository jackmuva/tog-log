import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { randomUUID } from 'crypto';

export const userTable = sqliteTable("userTable", {
	id: text().primaryKey().$defaultFn(() => randomUUID()),
	email: text('email').notNull(),
	name: text('name').notNull(),
	emailVerified: integer({ mode: "boolean" }),
	image: text("image"),
	createdAt: text("createdAt").$defaultFn(() => (new Date).toISOString()),
	updatedAt: text("updatedAt").$defaultFn(() => (new Date).toISOString()),
});

export type User = InferSelectModel<typeof userTable>;
export type UserInsert = InferInsertModel<typeof userTable>;
