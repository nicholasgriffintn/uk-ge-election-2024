import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const bronzeDefeatedMps = sqliteTable('bronze_defeated_mps', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  ons_id: text('ons_id'),
  region_name: text('region_name'),
  country_name: text('country_name'),
  constituency_name: text('constituency_name'),
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
  id: integer('id').primaryKey({ autoIncrement: true }),
  ons_id: text('ons_id'),
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
  candidate_type: text('candidate_type'),
  old_constituency: text('old_constituency'),
});

export const goldConstituencyTypes = sqliteTable('gold_constituency_types', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});

export const goldConstituencies = sqliteTable('gold_constituencies', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  type_id: integer('type_id').references(() => goldConstituencyTypes.id),
});

export const goldRegions = sqliteTable('gold_regions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});

export const goldCountries = sqliteTable('gold_countries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});

export const goldParties = sqliteTable('gold_parties', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  abbreviation: text('abbreviation'),
});

export const goldGenders = sqliteTable('gold_genders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});

export const goldCandidateTypes = sqliteTable('gold_canidadate_types', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});

export const goldMps = sqliteTable('gold_mps', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title'),
  firstname: text('firstname'),
  surname: text('surname'),
  middlenames: text('middlenames'),
  gender_id: text('gender_id').references(() => goldGenders.id),
  is_defeated: integer('is_defeated', { mode: 'boolean' }),
  is_former: integer('is_former', { mode: 'boolean' }),
  old_constituency_id: integer('old_constituency_id').references(
    () => goldConstituencies.id
  ),
  candidate_type_id: integer('candidate_type_id').references(
    () => goldCandidateTypes.id
  ),
  ons_id: text('ons_id'),
  mnis_id: text('mnis_id'),
  party_id: integer('party_id').references(() => goldParties.id),
  constituency_id: integer('constituency_id').references(
    () => goldConstituencies.id
  ),
  region_id: integer('region_id').references(() => goldRegions.id),
  country_id: integer('country_id').references(() => goldCountries.id),
  result: text('result'),
});