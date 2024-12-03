import { SendConnectRequestDTO } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Connect<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>) {
        this.http = http;
    }

    /**
     * @description 发送连接请求
     *
     * @tags Connect
     * @name ConnectControllerSendConnectRequest
     * @request POST:/connect/send
     */
    connectControllerSendConnectRequest = (data: SendConnectRequestDTO, params: RequestParams = {}) =>
        this.http.request<SendConnectRequestDTO, any>({
            path: `/connect/send`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        });

    /**
     * @description 接收连接请求
     *
     * @tags Connect
     * @name ConnectControllerReceiveConnectRequest
     * @request POST:/connect/receive
     */
    connectControllerReceiveConnectRequest = (data: SendConnectRequestDTO, params: RequestParams = {}) =>
        this.http.request<SendConnectRequestDTO, any>({
            path: `/connect/receive`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            format: 'json',
            ...params,
        });
}
const client = new HttpClient({ baseURL: `http://localhost:${process.env.NB_CLIENT_PORT}/api` });
export default new Connect(client);
