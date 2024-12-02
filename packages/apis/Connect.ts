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
        this.http.request<void, any>({
            path: `/connect/send`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
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
        this.http.request<void, any>({
            path: `/connect/receive`,
            method: 'POST',
            body: data,
            type: ContentType.Json,
            ...params,
        });
}

export default new Connect(new HttpClient({ baseURL: 'http://localhost:9000/api' }));
