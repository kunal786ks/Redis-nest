import { Injectable,Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import axios from 'axios'
@Injectable()
export class AppService {
  constructor(@Inject( CACHE_MANAGER ) private cacheManager:Cache){}
  async getHello() {
    await this.cacheManager.set('name','kunal',10000)
    const res=await this.cacheManager.get('name')
    console.log(res)
    return res;
  }


  async getDetail(){
    const {data}=await axios.get('https://fakestoreapi.com/users')
    console.log('this is user')

    
     await this.cacheManager.set('users',data)
    const res=await this.cacheManager.get('details');
    // console.log(res)
    return data;
  }
}
