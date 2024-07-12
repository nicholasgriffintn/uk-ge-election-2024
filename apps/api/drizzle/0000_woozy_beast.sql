CREATE TABLE `bronze_defeated_mps` (
	`ons_id` text PRIMARY KEY NOT NULL,
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
	`ons_id` text PRIMARY KEY NOT NULL,
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
	`Male` text,
	`Re-elected Member` text,
	`old_constituency` text
);
