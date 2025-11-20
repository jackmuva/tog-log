import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { randomUUID } from 'crypto';

export const userTable = sqliteTable("userTable", {
	id: text().primaryKey().$defaultFn(() => randomUUID()),
	email: text('email').notNull(),
	name: text('name').notNull(),
	avatar: text("avatar"),
});

export type User = InferSelectModel<typeof userTable>;
export type UserInsert = InferInsertModel<typeof userTable>;
