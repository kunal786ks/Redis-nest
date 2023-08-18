import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor } from '@nestjs/cache-manager/dist';
import { CacheKey,CacheTTL } from '@nestjs/cache-manager';
@Controller('user')
@UseInterceptors(CacheInterceptor) //it will apply on the whole controller and it store the data inside the CacheInterceptor and prevent to hit api again and return the data from it
export class AppController {
  constructor(private readonly appService: AppService) { }

  @CacheKey('custom_key')  
  @CacheTTL(20000)  
  @Get()
  async getHello() {
    console.log('object')
    return this.appService.getHello();
  }


  @CacheKey('users_data')  
  @CacheTTL(20000)  
  @Get('details')
  async getDetails(){
    return this.appService.getDetail();
  }
}
