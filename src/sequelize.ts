import {Sequelize} from 'sequelize-typescript';

const database = <string>process.env.POSTGRES_DB;
const host = <string>process.env.POSTGRES_HOST;
const username = <string>process.env.POSTGRES_USERNAME;
const password = <string>process.env.POSTGRES_PASSWORD;

export const sequelize = new Sequelize({
  database,
  host,
  dialect: 'postgres',
  username,
  password,
  port: 5432
});
