import {
    ArgsOf,
    Discord,
    On,
    Once
} from "@typeit/discord";

@Discord()
abstract class AppDiscord {
    @On("message")
    private onMessage([message]: ArgsOf<"message">) {

    }

    @On("ready")
    private onReady() {

    }

    @Once("messageDelete")
    private onMessageDelete() {
        // ...
    }
}
