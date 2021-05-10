import { Controller, Get, Res, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
const rootPath = process.cwd()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() res: any) {
    res.sendFile(join(rootPath, 'app/client/index.html'));
  }
}
