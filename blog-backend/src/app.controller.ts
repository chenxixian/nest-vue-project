import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiTags('系统默认')
  @Get()
  root(): string {
    return this.appService.root();
  }
}
