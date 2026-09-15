import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfig, envValidationSchema } from './config/index.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfig],
      validationSchema: envValidationSchema
    }),
    ObserveModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (observeConfig: ConfigService) => ({
        ...observeConfig.getOrThrow('observe')
      })

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

// @Module({
//   imports:[
//     TypeOrmModule.forRoot({
//       type:'postgres',
//       host:'localhost',
//       port:5432,
//       username:'postgres',
//       password:'admin123',
//       database: 'Restaurant',
//       entities:[]//dentro de este espacio se coloca el nombre de la entidad a crear,
//       synchronize:true,
//     }),
//     //aqui se coloca el nombre del modulo traido 
//   ]
// })
export class AppModule { }
