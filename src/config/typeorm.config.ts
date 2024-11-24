import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
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
export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    if (!configService) {
      throw new Error('ConfigService is undefined in getOrmConfig');
    }
    return { 
      type: 'postgres',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
};
