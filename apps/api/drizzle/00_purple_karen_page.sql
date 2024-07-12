CREATE TABLE `bronze_defeated_mps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ons_id` text,
	`constituency_name` text,
	`region_name` text,
	`country_name` text,
	`constituency_type` text,
	`result` text,
	`party_abbreviation` text,
	`party_name` text,
	`title` text,
	`firstname` text,
	`surname` text,
	`middlenames` text,
	`mnis_id` text,
	`gender` text,
	`defeated_mp` text,
	`former_mp` text
);
--> statement-breakpoint
CREATE TABLE `bronze_elected_mps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ons_id` text,
	`constituency_name` text,
	`region_name` text,
	`country_name` text,
	`constituency_type` text,
	`result` text,
	`party_abbreviation` text,
	`party_name` text,
	`title` text,
	`firstname` text,
	`surname` text,
	`middlenames` text,
	`mnis_id` text,
	`gender` text,
	`candidate_type` text,
	`old_constituency` text
);
