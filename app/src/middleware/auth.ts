import { ConfigService } from '@nestjs/config';
import { ApolloError } from 'apollo-server-errors';
interface AuthOptions {
    errorPass?: boolean
}

function AuthDecoratorFactory(options?: AuthOptions) {
    const configService = new ConfigService()
    return function authDecorator(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const orignalFunction = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const params = args[0];
            if (params.hasOwnProperty('checkedAuthFalse')) {
                throw new ApolloError('小伙子你不对劲', '-1002');
            }
            if (params && params.secret === configService.get('GANOTHER_SECRET')) {
                return orignalFunction.apply(this, args);
            } else {
                if (options && options.errorPass) {
                    params.checkedAuthFalse = true
                    return orignalFunction.apply(this, args);
                } else {
                    throw new ApolloError('咒语吟唱错误', '-1001');
                }

            }

        };
    };
}

export { AuthDecoratorFactory as auth };