import {Client} from "@typeit/discord";
import Secret from "../secret.json";

async function start() {
    const client = new Client({
        classes: [
            `./*Discord.ts`, // glob string to load the classes
        ],
        silent: false,
        variablesChar: ":"
    });

    await client.login(Secret.BOT_TOKEN);
}

start();
