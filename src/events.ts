import {TypedEmitter} from "tiny-typed-emitter";
import {CategoryChannel, Role} from "discord.js";

interface BotEvents {
    'classCreate': (name: string, category: CategoryChannel) => void
    'classDelete': (category: CategoryChannel, role: Role) => void
}

export const botEvents = new TypedEmitter<BotEvents>()
