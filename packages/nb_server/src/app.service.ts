import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        console.log('port:', process.env.NB_SERVER_PORT);
        return 'Hello World!';
    }
}
