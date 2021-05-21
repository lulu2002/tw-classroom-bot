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
        //test



    }

    @On("ready")
    private onReady() {

    }

    @Once("messageDelete")
    private onMessageDelete() {
        // ...
    }
}
