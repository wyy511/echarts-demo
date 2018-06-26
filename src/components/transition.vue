<template lang="pug">
.page
    button.trigger(type="button", @click="show = !show") fade
    button.trigger(type="button", @click="show1 = !show1") slide-fade
    transition(name="fade")
        .content(v-if="show") 练习transition的fade效果
    transition(name="slide-fade")
        .content(v-if="show1") 练习transition的slide-fade效果
        
    

</template>
<script>
export default {
    data() {
        return {
            show: false,
            show1: false
        }
    },
    components: {
    },
    methods: {
    }
}
</script>
<style>
/* 练习transition的fade效果 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}

/* 练习transition的slide-fade效果 */
.slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100px);
    opacity: 0;
}
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.5s ease-in-out;
}

</style>