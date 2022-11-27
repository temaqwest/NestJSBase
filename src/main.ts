import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.port || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Nest base first try')
        .setDescription('Just a nest js server for practice')
        .setVersion('1.0.0')
        .addTag('temaqwest')
        .build()

    const documentation = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api/docs', app, documentation)

    await app.listen(PORT, () => {
        console.log('Server started on port ' + PORT)
    })
}

start()
