import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConnectService } from './connect.service';
import { SendConnectRequestDTO } from './dto/connect';
import { ApiOperation } from '@nestjs/swagger';

@Controller('connect')
export class ConnectController {
    constructor(private readonly connectService: ConnectService) {}

    @Post('send')
    @ApiOperation({ description: '发送连接请求' })
    @UsePipes(new ValidationPipe())
    async sendConnectRequest(@Param() body: SendConnectRequestDTO): Promise<any> {
        return await this.connectService.sendConnectRequest(body);
    }

    @Post('receive')
    async receiveConnectRequest(@Body() body: any): Promise<any> {
        return await this.connectService.receiveConnectRequest(body);
    }
}
