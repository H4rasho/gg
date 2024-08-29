import { type SQLiteDatabase } from "expo-sqlite";

export const initQuery = `
create table expense_categories (
  id integer primary key autoincrement,
  name varchar(60) not null,
  description text
);

create table expenses (
  id integer primary key autoincrement,
  category_id integer references expense_categories(id),
  amount real not null,
  date datetime default current_timestamp,
  description text
);
`;

export const seedQuery = `
INSERT INTO expense_categories (name, description) VALUES ('Alimentación', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Transporte', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Mascotas', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Automóvil', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Salud', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Cuentas Básicas', NULL);
INSERT INTO expense_categories (name, description) VALUES ('Vestimenta', NULL);
`;

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 2;
  let dbVersion = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");

  let currentDbVersion = dbVersion?.user_version || 0;
  console.log("Current db version", currentDbVersion);

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
          PRAGMA journal_mode = 'wal';
          ${initQuery} 
    `);

    await db.execAsync(seedQuery);
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
