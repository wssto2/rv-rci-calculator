<template>
    <div class="RCIFinancing__simulator is-ready">
        <div class="Loader is-parent-centered">
            <div class="Loader__daciaLogo"></div>
            <svg class="Loader__renaultLogo" fill="none" viewBox="0 0 60 72">
                <polygon class="Loader__logo"
                         points="20.56649 67.17988 2 35.903459 20.56649 4 36.28263 4 53.07732 35.903459 36.203914 67.17988"></polygon>
                <polygon class="Loader__progress"
                         points="20.56649 67.17988 2 35.903459 20.56649 4 36.28263 4 53.07732 35.903459 36.203914 67.17988"></polygon>
            </svg>
        </div>
        <div class="RCIFinancing__simulatorInner chrome" id="fin-simulator-container">
            <div class="rci-page-loader" v-show="loading">
                <div class="rci-loader-fixed">
                    <img alt="loader" src="//prod.rciservices.eu/common/js/latest/styles/images/page-loader.gif">
                </div>
            </div>
            <div class="rci rci-simulator rci-renault rci-common">
                <div class="rci-wrapper">
                    <div class="rci-errorPopup" id="fin-simulator-container-errorPopup" style="display: none;">
                        <div class="rci-errorPopup-fixed">
                            <div class="rci-errorPopup-body">
                                <span class="message">Something went wrong...</span>
                                <button id="errorPopupButton" type="button">OK</button>
                            </div>
                        </div>
                    </div>
                    <div class="rci-one-design rci-customer-design">
                        <div class="rci-row rci-one-header" style="display: block">
                            <div class="rci-col rci-one-header-title-wrapper">
                                <div class="rci-row">
                                    <div class="rci-col rci-one-header-value">Informativni financijski kalkulator</div>
                                    <div class="rci-col rci-header-close-button">
                                        <div class="rci-content rci-row">
                                            <div class="rci-col rci-btn-wrapper rci-btn-wrapper--close">
                                                <button class="rci-btn rci-btn--close" type="button"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rci-col rci-one-header-return-btn rci-one-header-return-btn--mobile-gap">
                                <div class="rci-content rci-row"></div>
                            </div>
                        </div>
                        <div class="rci-customerNavigation rci-customerNavigation--block" style="display: block">
                            <div class="rci-title">
                                <span class="rci-title-span"></span>
                            </div>
                            <div class="rci-wrapper">
                                <div class="rci-navigation"></div>
                            </div>
                        </div>
                        <div class="rci-content">
                            <div class="rci-customerContent rci-active rci-P" id="fin-simulator-container-P-0Tab">
                                <div class="rci-products rci-tabs rci-P-products">
                                    <div class="rci-wrapper">
                                    </div>
                                    <div class="rci-content rci-P-productsContent ">
                                        <div class="rci-accordion accordion-container-P">
                                            <div class="rci-accordion-step-header rci-accordion-step-header--active rci-accordion--rci-compare-left">
                                                <div class="rci-accordion-step-header-label rci-accordion-step-header-label--single-offer">
                                                    <div class="rci-accordion-step-header-title">
                                                        P
                                                    </div>
                                                    <div class="rci-accordion-step-header-value">
                                                        RCREDVO-0
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rci-accordion-step-content">
                                                <div class="rci-tab rci-compare-left rci-active">
                                                    <div class="rci-oneBox">
                                                        <div class="rci-content rci-row">
                                                            <div class="rci-oneBoxLeft" order="z_rci_10.0">
                                                                <div class="rci-navigation">
                                                                    <div class="rci-nav">
                                                                        <ul class="rci-nav-ul">
                                                                            <li v-for="financingType in calculations" v-bind:key="financingType.financing_id" @click="changeFinancingType(financingType.financing_id)" :class="['rci-nav-li rci-nav-li--1-of-2', {'rci-nav-li-content--selected': activeFinancingId === financingType.financing_id}]">
                                                                                <div class="rci-nav-li-content">
                                                                                    <div class="rci-nav-li-content-title">
                                                                                        {{ financingType.financing_title }}
                                                                                    </div>
                                                                                    <div class="rci-nav-li-content-value">
                                                                                        {{ financingType.monthly_installment | formatNumber(2) }} {{ financingType.currency }} / mjesečno
                                                                                    </div>
                                                                                    <div class="rci-nav-li-content-subtitle"></div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div class="rci-slidersBox" order="z_rci_2.0" style="display: block">
                                                                    <div class="rci-content rci-row">
                                                                        <div class="rci-col rci-slider-component rci-slider-component--one" id="fin-simulator-container-downpaymentSlider-P-RCREDVO-0" order="21">
                                                                            <div class="rci-component-header rci-row">
                                                                                <div class="rci-col rci-component-header-title">
                                                                                    <span class="rci-title">Učešće&nbsp;</span>
                                                                                    <span class="rci-value-one">{{ financing.participation | formatNumber(2) }} {{ financing.currency }}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rci-row rci-slider-wrapper">
                                                                                <div class="rci-col rci-slider-btn-wrapper rci-slider-btn-minus">
                                                                                    <button @click="downscaleParticipation" class="rci-btn-slider-minus rci-minus-button rci-hover rci-btn--one" type="button"></button>
                                                                                </div>
                                                                                <div class="rci-col rci-slider-content">
                                                                                    <vue-range-slider
                                                                                            v-if="showSlider"
                                                                                            ref="slider"
                                                                                            :tooltip="false"
                                                                                            :min="settings.down_payment_min"
                                                                                            :max="settings.down_payment_max"
                                                                                            :step="settings.down_payment_step"
                                                                                            v-model="financing.participation"
                                                                                            @drag-end="calculate"
                                                                                            style="flex: 1;"></vue-range-slider>
                                                                                </div>
                                                                                <div class="rci-col rci-slider-content-mobile">
                                                                                    <label class="rci-input-label rci-input-label-sr-only"
                                                                                           for="fin-simulator-container-downpaymentSlider-P-RCREDVO-0_input"></label>
                                                                                    <input class="rci-input-text"
                                                                                           id="fin-simulator-container-downpaymentSlider-P-RCREDVO-0_input"
                                                                                           name="fin-simulator-container-downpaymentSlider-P-RCREDVO-0_input"
                                                                                           type="text">
                                                                                </div>
                                                                                <div class="rci-col rci-slider-btn-wrapper rci-slider-btn-plus">
                                                                                    <button @click="upscaleParticipation" class="rci-btn-slider-plus rci-plus-button rci-hover rci-btn--one" type="button"></button>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rci-row rci-slider-min-max">
                                                                                <div class="rci-col rci-slider-min rci-min-value">
                                                                                    <span class="rci-slider-min-value  rci-value">0,00 €</span>
                                                                                </div>
                                                                                <div class="rci-col rci-slider-max rci-max-value">
                                                                                    <span class="rci-slider-max-value rci-value">10.400,00 €</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rci-error-message">
                                                                                <span class="rci-error-message-value">Please provide proper value</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="rci-col rci-slider-tab-component rci-slider-tab-component--one" order="22">
                                                                            <div class="rci-component-header rci-row">
                                                                                <div class="rci-col rci-component-header-title">
                                                                                    <span class="rci-title">Trajanje otplate</span>
                                                                                    <span class="rci-value-one">{{ financing.duration }} mjeseci</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rci-row rci-slider-tab-wrapper">
                                                                                <ul class="rci-slider-tab-ul">
                                                                                    <li
                                                                                            v-for="duration in durationTabs"
                                                                                            :key="duration"
                                                                                            @click="setDuration(duration)"
                                                                                            :class="['rci-slider-tab-li', {'rci-slider-tab-li-content--selected': financing.duration === duration}]">
                                                                                        <div class="rci-slider-tab-li-content">
                                                                                            <div class="rci-slider-tab-li-content-value">{{ duration }}</div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="financing.bundle" class="rci-servicesBox" order="z_rci_3.0" style="display: block">
                                                                    <div class="rci-title rci-box-title" order="rci_3.1">
                                                                        Želite li dodatno uključiti paket?
                                                                        <div class="rci-infohint"></div>
                                                                    </div>
                                                                    <div class="rci-content rci-row">
                                                                        <div class="rci-col rci-input-list rci-input-list--one rci-input-list--without-title">
                                                                            <div class="rci-input-list-title">
                                                                                <span></span>
                                                                            </div>
                                                                            <div class="rci-input-list-content">
                                                                                <ul class="rci-input-list-content-items">
                                                                                    <li class="rci-list-item" order="32">
                                                                                        <div class="rci-row rci-input-amount-wrapper rci-labels-wrapper rci-list-item-wrapper rci-input-amount-wrapper--price " id="fin-simulator-container_fin-simulator-container-insurance2-P-RCREDVO-0--wrapper">
                                                                                            <div class="rci-col rci-input-col rci-infohint-parent">
                                                                                                <input class="rci-checkbox rci-radio-checkbox-list--ie-disabled"
                                                                                                       :id="'bundle_' + financing.bundle.name"
                                                                                                       :name="'bundle_' + financing.bundle.name"
                                                                                                       type="checkbox"
                                                                                                        v-model="financing.bundle_selected"
                                                                                                        @change="calculate">
                                                                                                <label class="rci-input-list-child-label"
                                                                                                       :for="'bundle_' + financing.bundle.name"
                                                                                                       style="width: auto;">
                                                                                                    <span>{{ financing.bundle.name }}</span>
                                                                                                    <div class="rci-infohint" @mouseenter="setBundleHover(financing.bundle.name)" @mouseleave="removeBundleHover(financing.bundle.name)">

                                                                                                        <div
                                                                                                            :class="['rci-row', 'rci-info-hint-content', 'mCS_destroyed', isBundleHovered(financing.bundle.name) ? 'rci-info-popup-open rci-info-hint-content--open' : '']"
                                                                                                            :for="'bundle_' + financing.bundle.name"
                                                                                                            :style="isBundleHovered(financing.bundle.name) ? 'visibility: visible; width: 600px; display: block; opacity: 1' : ''">

                                                                                                            <div class="rci-col rci-info-hint rci-info-hint-close-wrapper">
                                                                                                                <div class="rci-hint-close"></div>
                                                                                                            </div>
                                                                                                            <div class="rci-col rci-info-hint-title">
                                                                                                                <div class="rci-info-hint-title-content">{{ financing.bundle.name }}</div>
                                                                                                            </div>
                                                                                                            <div class="rci-col rci-info-hint-text">
                                                                                                                <div class="rci-info-hint-text-content">
                                                                                                                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis, nisi non dictum pulvinar, ligula erat venenatis massa, sit amet vestibulum ipsum ipsum id magna.</b>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="rci-info-icon-wrapper">
                                                                                                            <button id="fin-simulator-container_fin-simulator-container-insurance1-P-RBALLVN-0_info" type="button" class="rci-btn-info rci-info-hint-opened" data-ico-after="" for="fin-simulator-container_fin-simulator-container-insurance1-P-RBALLVN-0"></button>
                                                                                                            <div class="rci-info-popup-open-triangle"></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div class="rci-col rci-amount-col">
                                                                                                <span class="rci-amount-col-value">{{ financing.bundle.price | formatNumber(2) }} {{ financing.currency }} / mjesečno</span>
                                                                                            </div>
                                                                                        </div>

                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div class="rci-error-message">
                                                                                <span class="rci-error-message-value">Please provide proper value</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="rci-oneBoxRight" order="z_rci_20.0" style="margin-top: 0px;">
                                                                <div class="rci-monthlyPaymentBox" order="z_rci_4.0" style="display: block">
                                                                    <div class="rci-content rci-row">
                                                                        <div class="rci-col rci-summary-label rci-summary-label--one rci-summary-label--no-info rci-summary-label--no-value" order="54">
                                                                            <div class="rci-row">
                                                                                <div class="rci-col rci-summary-label-title rci-infohint-parent">
                                                                                    <span>Kredita</span>
                                                                                    <div class="rci-infohint"></div>
                                                                                </div>
                                                                                <div class="rci-col rci-summary-label-value rci-infohint-parent">
                                                                                    <span class="rci-value"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="rci-col rci-summary-label rci-summary-label--one rci-summary-label--no-info rci-summary-label--no-title rci-summary-label--monthly-payment">
                                                                            <div class="rci-row">
                                                                                <div class="rci-col rci-summary-label-title rci-infohint-parent">
                                                                                </div>
                                                                                <div class="rci-col rci-summary-label-value rci-infohint-parent">
                                                                                    <span class="rci-value">{{ financing.monthly_installment | formatNumber(2) }} {{ financing.currency }} / mjesečno *</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="rci-col rci-summary-label rci-summary-label--one rci-summary-label--no-info rci-summary-label--no-value rci-summary-label--solid rci-watchers-hide">
                                                                            <div class="rci-row">
                                                                                <div class="rci-col rci-summary-label-title rci-infohint-parent">
                                                                                    <span>Incluye  de descuento por financiar</span>
                                                                                    <div class="rci-infohint"></div>
                                                                                </div>
                                                                                <div class="rci-col rci-summary-label-value rci-infohint-parent">
                                                                                    <span class="rci-value"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="rci-summaryBox" style="display: block">
                                                                    <div class="rci-title rci-box-title">
                                                                        Pojedinosti o ponudi
                                                                        <div class="rci-infohint"></div>
                                                                    </div>
                                                                    <div class="rci-content rci-row">
                                                                        <div v-for="(summaryRow, summaryIndex) in summary" :key="summaryIndex" class="rci-col rci-summary-label rci-summary-label--one rci-summary-label--no-info">
                                                                            <div class="rci-row">
                                                                                <div class="rci-col rci-summary-label-title rci-infohint-parent">
                                                                                    <span>{{ summaryRow.label }}</span>
                                                                                    <div class="rci-infohint"></div>
                                                                                </div>
                                                                                <div class="rci-col rci-summary-label-value rci-infohint-parent">
                                                                                    <span class="rci-value">{{ summaryRow.value }}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="rci-legalBoxProduct" style="display: block">
                                                        <div class="rci-title rci-box-title">Uvjeti i odredbe</div>
                                                        <div class="rci-content rci-row">
                                                            <div class="rci-col rci-summary-label rci-summary-label--one rci-summary-label--no-info rci-summary-label--no-value">
                                                                <div class="rci-row">
                                                                    <div class="rci-col rci-summary-label-title rci-infohint-parent">
                                                                        <span v-html="financing.disclaimer"></span>
                                                                        <div class="rci-infohint"></div>
                                                                    </div>
                                                                    <div class="rci-col rci-summary-label-value rci-infohint-parent">
                                                                        <span class="rci-value"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import 'vue-range-component/dist/vue-range-slider.css';
    import VueRangeSlider from 'vue-range-component';
    import { formatNumber, EventBus } from "@/utils";

    export default {
        name: "RciSimulator",

        components: {
            VueRangeSlider
        },

        data() {
            return {
                loading: true,
                showSlider: false,
                firstApiCall: true,
                activeFinancingId: null,
                calculations: [],
                bundleHovers: []
            }
        },

        created() {
            EventBus.$on('RCI_CALCULATOR_SHOWN', () => {
                this.$nextTick(() => {
                    this.showSlider = true;
                });
            });

            EventBus.$on('RCI_CALCULATOR_HIDDEN', () => {
                this.$nextTick(() => {
                    this.showSlider = false;
                });
            });

            this.loading = true;
            /*this.fetchSettings()
                .then((settings) => {
                    this.setDefaultValues(settings);
                    this.calculate();
                })*/

            this.calculate();
        },

        computed: {

            financing() {
                if (!this.activeFinancingId) {
                    return {};
                }

                let financing = this.calculations.find((f) => Number(f.financing_id) === Number(this.activeFinancingId));

                if (!financing) {
                    throw "Financing with ID not found!";
                }

                return financing;
            },

            settings() {
                return this.financing.financing_settings;
            },

            durationTabs() {
                let items = [];

                if (!this.settings) {
                    return items;
                }

                if (this.settings.duration_max > this.settings.duration_min && this.settings.duration_max > 0) {
                    for (let i = this.settings.duration_min; i <= this.settings.duration_max; i = i + this.settings.duration_step) {
                        items.push(i);
                    }
                }
                return items;
            },

            summary() {
                return [
                    { label: 'Vrijednost vozila', value: formatNumber(window.RCI_SIMULATOR_CONFIG.vehicle_price, 2) + ' ' + this.financing.currency },
                    { label: 'Učešće', value: formatNumber(this.financing.participation, 2) + ' ' + this.financing.currency },
                    { label: 'Iznos financiranja', value: formatNumber(this.financing.financing_amount, 2) + ' ' + this.financing.currency },
                    { label: 'Trajanje otplate', value: this.financing.duration + ' mjeseci' },
                    { label: 'Nominalna kamatna stopa', value: formatNumber(this.financing.nominal_interest_rate, 2) + '%' },
                    { label: 'Efektivna kamatna stopa', value: formatNumber(this.financing.effective_interest_rate, 2) + '%' },
                    { label: 'Trošak obrade', value: formatNumber(this.financing.administration_fee, 2) + ' ' + this.financing.currency },
                    { label: 'Mjesečna rata', value: formatNumber(this.financing.monthly_installment, 2) + ' ' + this.financing.currency },
                ];
            }
        },

        methods: {

            setDuration(duration) {
                this.financing.duration = duration;
                this.calculate();
            },

            changeFinancingType(id) {
                this.activeFinancingId = id;
                this.calculate();
            },

            downscaleParticipation() {
                let step = this.settings.down_payment_step;
                if (this.financing.participation - step >= this.settings.down_payment_min) {
                    this.financing.participation -= step;
                    this.calculate();
                }
            },

            upscaleParticipation() {
                let step = this.settings.down_payment_step;
                if (this.financing.participation + step <= this.settings.down_payment_max) {
                    this.financing.participation += step;
                    this.calculate();
                }
            },

            calculate() {
                this.loading = true;
                let endpoint = 'https://rna.sto2.hr/api/rci-calculator/calculate';

                if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
                    endpoint = 'http://127.0.0.1:8000/api/rci-calculator/calculate';
                }

                let data = window.RCI_SIMULATOR_CONFIG;
                for (let key in this.financing) {
                    data [key] = this.financing [key];
                }

                data ['first_api_call'] = this.firstApiCall;

                this.firstApiCall = false;

                axios.post(endpoint, data)
                    .then((response) => {
                        this.loading = false;

                        this.calculations = response.data;
                        let firstCalculation = this.calculations.find((f) => f.financing_id > 0);

                        if (!firstCalculation) {
                            throw "Error while searching for first financing.";
                        }

                        if (!this.activeFinancingId) {
                            this.activeFinancingId = firstCalculation.financing_id;
                        }

                        document.querySelector('.rci-calculator-price-wrapper').style.display = 'block';
                        document.querySelector('.price-calculation-info-button').innerText = 'VEČ OD';

                        /**
                         * Update monthly installment on page only on first call
                         */
                        if (data ['first_api_call']) {
                            document.querySelector('.price-calculation-price-month-installment').innerText = formatNumber(firstCalculation.monthly_installment, 2) + ' ' + firstCalculation.currency + '/mj*';
                        }
                    })
            },

            isBundleHovered(bundle) {
                return this.bundleHovers.indexOf(bundle) !== -1;
            },

            setBundleHover(bundle) {
                let index = this.bundleHovers.indexOf(bundle);
                if (index === -1) {
                    this.bundleHovers.push(bundle);
                }
            },

            removeBundleHover(bundle) {
                let index = this.bundleHovers.indexOf(bundle);
                if (index !== -1) {
                    this.bundleHovers.splice(index, 1);
                }
            }
        }
    }
</script>

<style scoped>
    #fin-simulator-container {
        position: relative
    }

    .rci-page-loader {
        position: absolute;
        width: 100%;
        height: 100%;
        min-height: 200px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        background-color: rgba(255, 255, 255, .6);
        text-align: center;
    }

    .rci-page-loader .rci-loader-fixed {
        position: -webkit-sticky;
        position: sticky;
        width: 100%;
        height: 1px;
        top: 50%;
    }

    .rci-page-loader img {
        position: absolute;
        width: 35px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .rci-page-loader:before {
        content: " ";
        display: table
    }
</style>