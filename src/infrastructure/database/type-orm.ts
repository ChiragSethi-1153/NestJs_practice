// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';
// import { Module } from '@nestjs/common';
// import { dataSourceOptions } from 'src/config/typeorm.config';

// @Module({
//   imports: [
//     NestTypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) =>
//         dataSourceOptions(configService),
//       inject: [ConfigService],
//     }),
//   ],
// })
// export class TypeOrmModule {}
