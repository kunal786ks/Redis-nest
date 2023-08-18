import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal:true,
      useFactory:async()=>({
        store:await redisStore({
          socket:{
            host:'localhost',  //redis server host
            port:6379 //redis server port
          }
        })
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
