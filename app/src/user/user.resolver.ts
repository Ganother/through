import {
    Args,
    Info,
    Mutation,
    Query,
    Resolver,
    Subscription,
} from '@nestjs/graphql';
import { UserService } from './user.service'
@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Query('user')
    async getUser(@Args('name') name: string) {
        return this.userService.getUser(name)
    }

    @Mutation('createUser')
    async createUser(@Args('name') name: string) {
        console.log('resolver')
        return this.userService.addUser(name)
    }
}