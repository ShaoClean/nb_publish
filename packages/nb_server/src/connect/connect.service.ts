import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SendConnectRequestDTO } from './dto/connect';

@Injectable()
export class ConnectService {
    constructor(private httpService: HttpService) {}

    async sendConnectRequest(params: SendConnectRequestDTO) {
        const hostname = params.hostname || process.env.NB_SERVER_RECIVE_HOST;
        const port = params.port || +process.env.NB_SERVER_TEST_PORT;
        const url = `http://${hostname}:${port}/connect/receive`;
        console.log('request url:', url);
        const res = await this.httpService.post(url, params).toPromise();
        return res.data.data;
    }

    async receiveConnectRequest(body: SendConnectRequestDTO) {
        console.log(body);
        return 'receiveConnectRequest successfully.';
    }
}
