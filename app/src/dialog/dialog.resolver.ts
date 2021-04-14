import {
    Args,
    Info,
    Mutation,
    Query,
    Resolver,
    Subscription,
} from '@nestjs/graphql';
import { DialogService } from './dialog.service'
import { DialogInput} from '../../../graphql'
import {auth} from '../middleware/auth'
@Resolver()
export class DialogResolver {
    constructor(
        private readonly dialogService: DialogService
    ) { }

    @Query('dialogDetail')
    async getDetail(@Args('level') level: number) {
        return this.dialogService.getDialogDetail(level)
    }

    @Query('dialogList')
    async getList() {
        return this.dialogService.getDialogList()
    }


    @Mutation('addDialog')
    @auth()
    async addDialog(@Args('input') dialog: DialogInput) {
        return this.dialogService.addDialog(dialog)
    }

    @Mutation('updateDialog')
    @auth()
    async updateDialog(@Args('input') dialog: DialogInput) {
        return this.dialogService.updateDialog(dialog)
    }
}