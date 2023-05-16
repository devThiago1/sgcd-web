import { DataSource } from "typeorm";
import 'dotenv/config';
import 'reflect-metadata';
import { Adress } from "./entities/Adress";
import { User } from "./entities/User";

const DB_PORT = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})