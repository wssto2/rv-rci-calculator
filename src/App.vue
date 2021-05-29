<template>
    <div id="rciCalculator">
        <Modal>
            <RciSimulator />
        </Modal>
    </div>
</template>

<script>
    import Modal from "@/components/Modal";
    import RciSimulator from "@/components/RciSimulator";

    export default {
        name: 'App',

        components: {
            RciSimulator,
            Modal
        }
    }
</script>

<style scoped>
    @import './assets/css/base.css';
    @import './assets/css/common_renault_latin.css';
    @import './assets/css/simulator_renault.css';
    @import './assets/css/one_renault.css';
    @import './assets/css/r-vehicle-details.css';
</style>
