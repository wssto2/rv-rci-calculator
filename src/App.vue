<template>
    <div id="rciCalculator">
        <Modal v-show="visible" @close="visible = false">
            <RciSimulator />
        </Modal>
    </div>
</template>

<script>
    import { EventBus } from "@/utils";
    import Modal from "@/components/Modal";
    import RciSimulator from "@/components/RciSimulator";

    export default {
        name: 'App',

        data() {
            return {
                visible: false
            }
        },

        mounted() {
            document.querySelector('.rci-calculator-price-wrapper .rci-calculator-button').addEventListener('click', () => {
                EventBus.$emit('RCI_CALCULATOR_SHOWN');
                this.visible = true;
            })
        },

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
