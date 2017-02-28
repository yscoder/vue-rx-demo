<template>
    <chat :list="msgList" @on-send="sendMsg"></chat>
</template>
<script>
import chat from 'components/chat'
import { data$, send } from '../service/chatService'

export default {
    components: {
        chat
    },
    methods: {
        sendMsg(msg) {
            send(msg)
        }
    },
    subscriptions() {
        return {
            msgList: data$
        }
    }
}
</script>
