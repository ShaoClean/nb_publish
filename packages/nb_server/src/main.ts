import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder().setTitle('Nb Publish API').setDescription('API documentation for the Nb Publish').setVersion('1.0').build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalInterceptors(new TransformInterceptor());
    await app.listen(process.env.NB_SERVER_PORT);
}
bootstrap();
