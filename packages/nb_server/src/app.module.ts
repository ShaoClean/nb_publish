import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConnectModule } from './connect/connect.module';
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '../../.env',
            isGlobal: true,
        }),
        ConnectModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
