import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get() 
  getHello(): string {
    return "Hello World! from hello controller";
  }
  @Get('greet')
  demo(): string {
    return "Greetings from hello controller";
  }
}
