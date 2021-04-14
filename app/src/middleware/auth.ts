import { ConfigService } from '@nestjs/config';
import { ApolloError } from 'apollo-server-errors';


function AuthDecoratorFactory() {
    const configService = new ConfigService()
    return function authDecorator(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const orignalFunction = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const params = args[0];
            console.log(args)
            console.log(configService.get('GANOTHER_SECRET'))
            if (params && params.secret === configService.get('GANOTHER_SECRET')) {
                return orignalFunction.apply(this, args);
            } else {
                throw new ApolloError('咒语吟唱错误', '-1001');
            }

        };
    };
}

export { AuthDecoratorFactory as auth };