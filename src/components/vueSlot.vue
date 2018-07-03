<template>
<div>
    <div>I want to use slot of vue</div>
    <child-slot>
        <header-slot/>
        <footer-slot/>
    </child-slot>
</div>

</template>
<script>
import ChildSlot from './vueSlot/index.vue'
import HeaderSlot from './vueSlot/header.vue'
import FooterSlot from './vueSlot/footer.vue'
export default {
    name: 'parentSlot',
    components: {
        'child-slot': ChildSlot,
        'header-slot': HeaderSlot,
        'footer-slot': FooterSlot,
    },
    props: {
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {}
}
</script>
<style>
</style>