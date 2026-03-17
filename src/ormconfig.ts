import { DataSourceOptions } from "typeorm";
import { User } from "./users/entities/user.entity";

export const config: DataSourceOptions = {
    type: 'sqlite',
    database: '.db.sqlite',
    synchronize: true,
    entities: [User]

};

