# nb_publish

## roadmap
- 客户端与客户端之间建立连接
  - 单对单
  - 单对多
- 内容收发
  - 文字
  - 图片
  - 文件
- 单独一个管理服务，用于查看和管理所有用户之间的状态
  - 中央服务、中央数据库
  - 查看所有客户端之间的连接状态
  - 发送的内容

## packages

- apis: 后端接口sdk
- nb_server: 后端服务
- nb_client: ui界面


## usage

1. install Dependencies

   ```bash
   npm ci
   ```
   
2. copy env.* files and rename without example suffix at root directory

