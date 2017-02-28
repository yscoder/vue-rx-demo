<template>
    <chat :list="msgList" @on-send="sendMsg"></chat>
</template>
<script>
import chat from 'components/chat'
export default {
    components: {
        chat
    },
    methods: {
        sendMsg(msg) {
            this.$store.dispatch('sendMsg', msg)
        }
    },
    computed: {
        msgList() {
            return this.$store.state.msgList
        }
    },
    created() {
        this.$store.dispatch('getMsgs')
    }
}
</script>
