CREATE TYPE "public"."dish" AS ENUM('meat', 'side', 'salad', 'dessert', 'drink');--> statement-breakpoint
CREATE TABLE "dishes" (
	"id" varchar PRIMARY KEY NOT NULL,
	"type" "dish",
	"name" text,
	"room_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "images" (
	"id" varchar PRIMARY KEY NOT NULL,
	"room_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rooms" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_room_id_users_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "images" ADD CONSTRAINT "images_room_id_users_id_fk" FOREIGN KEY ("room_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;