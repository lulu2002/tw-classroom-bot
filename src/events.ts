import {TypedEmitter} from "tiny-typed-emitter";

interface BotEvents {
    'classCreate': (name: string) => void
}

export const botEvents = new TypedEmitter<BotEvents>()
