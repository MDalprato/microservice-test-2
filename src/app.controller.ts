import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload, Ctx } from '@nestjs/microservices';
import { IsString, IsEmail } from 'class-validator';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('getManipulatedAge')
  sum(age: any): any {
    console.log(age);


    const text = "Your are old " + age +  " years " + " - I'm microservice 2";
    return text;
  }
}

