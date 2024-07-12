import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const bronzeDefeatedMps = sqliteTable('bronze_defeated_mps', {
  ons_id: text('ons_id').primaryKey(),
  constituency_name: text('constituency_name'),
  region_name: text('region_name'),
  country_name: text('country_name'),
  constituency_type: text('constituency_type'),
  result: text('result'),
  party_abbreviation: text('party_abbreviation'),
  party_name: text('party_name'),
  title: text('title'),
  firstname: text('firstname'),
  surname: text('surname'),
  middlenames: text('middlenames'),
  mnis_id: text('mnis_id'),
  gender: text('gender'),
  defeated_mp: text('defeated_mp'),
  former_mp: text('former_mp'),
});

export const bronzeElectedMps = sqliteTable('bronze_elected_mps', {
  ons_id: text('ons_id').primaryKey(),
  constituency_name: text('constituency_name'),
  region_name: text('region_name'),
  country_name: text('country_name'),
  constituency_type: text('constituency_type'),
  result: text('result'),
  party_abbreviation: text('party_abbreviation'),
  party_name: text('party_name'),
  title: text('title'),
  firstname: text('firstname'),
  surname: text('surname'),
  middlenames: text('middlenames'),
  mnis_id: text('mnis_id'),
  gender: text('Male'),
  candidate_type: text('Re-elected Member'),
  old_constituency: text('old_constituency'),
});
