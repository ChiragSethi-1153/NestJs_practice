import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

// export const dataSourceOptions = (
//   configService: ConfigService,
// ): DataSourceOptions & SeederOptions => ({
//   type: 'postgres',
//   host: configService.get<string>('DB_HOST'),
//   port: configService.get<number>('DB_PORT'),
//   username: configService.get<string>('DB_USER'),
//   password: configService.get<string>('DB_PASSWORD'),
//   database: configService.get<string>('DB_DATABASE'),
//   entities: ['dist/src/domain/**/*entity.js'],
//   synchronize: true,
//   migrationsTableName: 'migrations',
//   migrations: ['dist/src/infrastructure/database/migrations/*.js'],
//   seeds: ['dist/src/infrastructure/database/seeders/*.js'],
//   seedTracking: true
// });

// export const dataSource = new DataSource(
//   dataSourceOptions(new ConfigService()),
// );

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "NestJs_practice",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true
}