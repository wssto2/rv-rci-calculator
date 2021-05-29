<template>
    <div class="Modal__container">
        <div class="Modal Modal_simulator">
            <button class="Modal__innerOverlay"></button>
            <div class="Modal__inner" style="max-height: 584px;">
                <div class="Modal__content">
                    <button class="Modal__close" @click="$emit('close')"></button>
                    <div class="Modal__innerContent">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>