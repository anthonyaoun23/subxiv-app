import { sqliteTable, text, integer, json } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';

export const papers = sqliteTable('papers', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  arxivId: text('arxiv_id').notNull().unique(),
  title: text('title').notNull(),
  abstract: text('abstract').notNull(),
  authors: json('authors').$type<string[]>(),
  categories: json('categories').$type<string[]>(),
  publishedAt: integer('published_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  pdfUrl: text('pdf_url'),
  embeddings: json('embeddings').$type<number[]>(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
});

export const userSavedPapers = sqliteTable('user_saved_papers', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  userId: text('user_id').notNull(),
  paperId: text('paper_id').notNull().references(() => papers.id),
  interestId: text('interest_id'),
  notes: text('notes'),
  tags: json('tags').$type<string[]>(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .$defaultFn(() => new Date()),
});

export type Paper = typeof papers.$inferSelect;
export type NewPaper = typeof papers.$inferInsert;
export type UserSavedPaper = typeof userSavedPapers.$inferSelect;
export type NewUserSavedPaper = typeof userSavedPapers.$inferInsert;