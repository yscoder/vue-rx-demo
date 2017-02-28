<template>
    <div>
        <div class="content" ref="content">
            <p v-for="item in list">
                <strong>{{item.name === name ? '我' : item.name}}：</strong>{{item.content}}
            </p>
        </div>
        <input class="form-control" type="text" v-model="name">
        <textarea class="form-control" v-model="msg" @keypress.13="send"></textarea>
        <button @click="send">发送</button>
    </div>
</template>
<script>
export default {
    props: {
        list: Array
    },
    data() {
        return {
            msg: '',
            name: 'chat' + Date.now()
        }
    },
    methods: {
        send() {
            this.$emit('on-send', {
                content: this.msg,
                name: this.name
            })
            this.msg = ''
        }
    },
    watch: {
        list() {
            const $el = this.$refs.content
            $el.scrollTop = $el.scrollHeight - $el.clientHeight
        }
    }
}
</script>
<style lang="less">
* {
    box-sizing: border-box;
}
body {
    line-height: 1.6;
}
p {
    margin-top: 0
}
.content {
    width: 100%;
    height: 500px;
    overflow-y: auto;
    padding: 8px;
    border: 1px solid #ddd;
    background: #fafafa;
}
.form-control {
    display: block;
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ddd;
}
textarea {
    overflow-y: auto;
    height: 50px;
}
</style>
