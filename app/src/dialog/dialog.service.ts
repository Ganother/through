import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dialog, DialogDocument } from '../schemas/dialog.schema'
import { Model } from 'mongoose';
import { DialogInput } from '../../../graphql'
@Injectable()
export class DialogService {
    constructor(@InjectModel('Dialog') private dialogModel: Model<DialogDocument>) {

    }
    async getDialogDetail(level: number): Promise<Dialog> {
        const dialogList = await this.dialogModel.find({ level }).exec()
        if (dialogList.length) {
            return dialogList[0]
        } else {
            return null
        }
    }

    async getDialogList(): Promise<Dialog[]> {
        return await this.dialogModel.find().exec()
    }

    async addDialog(dialog: DialogInput): Promise<Dialog> {
        return await this.dialogModel.create(dialog)
    }

    async updateDialog(dialog: DialogInput): Promise<Dialog> {
        const updated = await this.dialogModel.updateOne({ level: dialog.level }, dialog)
        if (updated) {
            const list = await this.dialogModel.find({ level: dialog.level }).exec()
            if (list.length) {
                return list[0]
            } else {
                return null
            }
        } else {
            return null
        }
    }
}
