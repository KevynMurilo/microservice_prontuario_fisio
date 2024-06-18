import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Gerenciamento de Prontuários Fisioterapêuticos')
    .setDescription(
      'Desenvolvimento de uma API para Gestão de Informações de Prontuários Fisioterapêuticos',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: `
    Para testar no Swagger UI, insira apenas o token JWT no cabeçalho da requisição com o esquema Bearer.
    Exemplo: Dentro de Value, coloque o token.

    Na API real, certifique-se de incluir explicitamente o prefixo 'Bearer' antes do token JWT.
    Exemplo: Authorization: Bearer {token}
        `,
        name: 'Authorization',
        in: 'header',
      },
      'access-token',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
