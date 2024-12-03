import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConnectModule } from './connect/connect.module';
const envPath = process.env.NODE_ENV === 'test' ? '../../.env.test' : '../../.env';
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: envPath,
            isGlobal: true,
        }),
        ConnectModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
