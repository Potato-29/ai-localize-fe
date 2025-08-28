-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"email" text NOT NULL,
	"password" text NOT NULL,
	"access_token" text NOT NULL,
	"api_key" text NOT NULL,
	CONSTRAINT "users_email_key" UNIQUE("email"),
	CONSTRAINT "users_api_key_key" UNIQUE("api_key")
);
--> statement-breakpoint
CREATE INDEX "api_key_index" ON "users" USING hash ("api_key" text_ops);--> statement-breakpoint
CREATE INDEX "email_index" ON "users" USING hash ("email" text_ops);--> statement-breakpoint
CREATE INDEX "id_index" ON "users" USING hash ("id" int4_ops);
*/