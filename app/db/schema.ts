import { pgTable, index, unique, integer, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable(
  "users",
  {
    id: integer()
      .primaryKey()
      .generatedAlwaysAsIdentity({
        name: "users_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 2147483647,
        cache: 1,
      }),
    email: text().notNull(),
    password: text().notNull(),
    accessToken: text("access_token").notNull(),
  },
  (table) => [
    index("email_index").using(
      "hash",
      table.email.asc().nullsLast().op("text_ops")
    ),
    index("id_index").using("hash", table.id.asc().nullsLast().op("int4_ops")),
    unique("users_email_key").on(table.email),
  ]
);

export const apiKeys = pgTable(
  "api_keys",
  {
    id: integer()
      .primaryKey()
      .generatedAlwaysAsIdentity({
        name: "api_keys_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 2147483647,
        cache: 1,
      }),
    apiKey: text().notNull(),
    keyName: text().notNull(),
    userId: text().notNull(),
  },
  (table) => [
    unique("api_keys_apiKey_key").on(table.apiKey),
    unique("api_keys_userId_key").on(table.userId),
  ]
);
