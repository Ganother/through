import { Module } from '@nestjs/common';
import { DialogController } from './dialog.controller';
import { DialogService } from './dialog.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Dialog, DialogSchema} from '../schemas/dialog.schema'
import {DialogResolver} from './dialog.resolver'
@Module({
  imports: [MongooseModule.forFeature([{ name: Dialog.name, schema: DialogSchema }])],
  controllers: [DialogController],
  providers: [DialogService,DialogResolver]
})
export class DialogModule {}
