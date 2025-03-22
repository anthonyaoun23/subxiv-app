import { sqliteTable, text, integer, json } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';
import { users } from './users';

export const userInterests = sqliteTable('user_interests', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  userId: text('user_id').notNull().references(() => users.id),
  name: text('name').notNull(),
  prompt: text('prompt').notNull(),
  categories: json('categories').$type<string[]>(),
  keywords: json('keywords').$type<string[]>(),
  excludedKeywords: json('excluded_keywords').$type<string[]>(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
});

export type UserInterest = typeof userInterests.$inferSelect;
export type NewUserInterest = typeof userInterests.$inferInsert;