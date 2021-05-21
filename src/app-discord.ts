import {
    Discord,
    On,
    Once
} from "@typeit/discord";

@Discord()
abstract class AppDiscord {
    @On("message")
    private onMessage() {
        // ...
    }

    @On("ready")
    private onReady() {
        console.log('Hello!')
    }

    @Once("messageDelete")
    private onMessageDelete() {
        // ...
    }
}
