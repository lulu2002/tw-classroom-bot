import {Client} from "@typeit/discord";
import Secret from "../secret.json";

async function start() {
    const client = new Client({
        classes: [`${__dirname}/*.ts`, `${__dirname}/*/*.ts`],
        silent: false,
        variablesChar: ":"
    });

    await client.login(Secret.BOT_TOKEN);
}

start();
