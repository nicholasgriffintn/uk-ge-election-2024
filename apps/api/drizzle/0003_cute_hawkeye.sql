CREATE TABLE `gold_canidadate_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `gold_constituencies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`type_id` integer,
	FOREIGN KEY (`type_id`) REFERENCES `gold_constituency_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gold_constituency_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `gold_countries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `gold_genders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `gold_mps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`firstname` text,
	`surname` text,
	`middlenames` text,
	`gender_id` text,
	`is_defeated` integer,
	`is_former` integer,
	`old_constituency_id` integer,
	`candidate_type_id` integer,
	`ons_id` text,
	`mnis_id` text,
	`party_id` integer,
	`constituency_id` integer,
	`region_id` integer,
	`country_id` integer,
	`result` text,
	FOREIGN KEY (`gender_id`) REFERENCES `gold_genders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`old_constituency_id`) REFERENCES `gold_constituencies`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`candidate_type_id`) REFERENCES `gold_canidadate_types`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`party_id`) REFERENCES `gold_parties`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`constituency_id`) REFERENCES `gold_constituencies`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`region_id`) REFERENCES `gold_regions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`country_id`) REFERENCES `gold_countries`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `gold_parties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`abbreviation` text
);
--> statement-breakpoint
CREATE TABLE `gold_regions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text
);
