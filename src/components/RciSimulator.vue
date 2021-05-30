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
                                                                            <li @click="changeFinancingType('credit')" :class="['rci-nav-li rci-nav-li--1-of-2', {'rci-nav-li-content--selected': calculation.financing_type === 'credit'}]">
                                                                                <div class="rci-nav-li-content">
                                                                                    <div class="rci-nav-li-content-title">
                                                                                        Kredita
                                                                                    </div>
                                                                                    <div class="rci-nav-li-content-value">
                                                                                        {{ this.calculationResults.monthly_installment | formatNumber(2) }} {{ this.calculationResults.currency }} / mjesečno
                                                                                    </div>
                                                                                    <div class="rci-nav-li-content-subtitle"></div>
                                                                                </div>
                                                                            </li>
                                                                            <li @click="changeFinancingType('leasing')" :class="['rci-nav-li rci-nav-li--1-of-2', {'rci-nav-li-content--selected': calculation.financing_type === 'leasing'}]">
                                                                                <div class="rci-nav-li-content">
                                                                                    <div class="rci-nav-li-content-title">
                                                                                        Leasing
                                                                                    </div>
                                                                                    <div class="rci-nav-li-content-value"
                                                                                         id="span-fin-simulator-container-P-RCREDVO-0">
                                                                                        {{ this.calculationResults.monthly_installment | formatNumber(2) }} {{ this.calculationResults.currency }} / mjesečno
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
                                                                                    <span class="rci-value-one">{{ calculation.participation | formatNumber(2) }} {{ calculationResults.currency }}</span>
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
                                                                                            :min="settings.participationMin"
                                                                                            :max="settings.participationMax"
                                                                                            :step="settings.participationStep"
                                                                                            v-model="calculation.participation"
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
                                                                                    <span class="rci-value-one">{{ calculation.duration }} mjeseci</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="rci-row rci-slider-tab-wrapper">
                                                                                <ul class="rci-slider-tab-ul">
                                                                                    <li
                                                                                            v-for="duration in durationTabs"
                                                                                            :key="duration"
                                                                                            @click="setDuration(duration)"
                                                                                            :class="['rci-slider-tab-li', {'rci-slider-tab-li-content--selected': calculation.duration === duration}]">
                                                                                        <div class="rci-slider-tab-li-content">
                                                                                            <div class="rci-slider-tab-li-content-value">{{ duration }}</div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="calculationResults.bundle" class="rci-servicesBox" order="z_rci_3.0" style="display: block">
                                                                    <div class="rci-title rci-box-title" order="rci_3.1">
                                                                        Paketi
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
                                                                                                       :id="'bundle_' + calculationResults.bundle.name"
                                                                                                       :name="'bundle_' + calculationResults.bundle.name"
                                                                                                       type="checkbox"
                                                                                                        v-model="calculation.bundle_selected"
                                                                                                        @change="calculate">
                                                                                                <label class="rci-input-list-child-label"
                                                                                                       :for="'bundle_' + calculationResults.bundle.name">
                                                                                                    <span>{{ calculationResults.bundle.name }}</span>
                                                                                                </label>
                                                                                            </div>
                                                                                            <div class="rci-col rci-amount-col">
                                                                                                <span class="rci-amount-col-value">{{ calculationResults.bundle.price | formatNumber(2) }} {{ calculationResults.currency }} / mjesečno</span>
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
                                                                                    <span class="rci-value">{{ this.calculationResults.monthly_installment | formatNumber(2) }} {{ this.calculationResults.currency }} / mjesečno *</span>
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
                                                                        <span>*Reprezentativni primjer uz fiksnu kamatnu stopu od  #NKS godišnje, rok otplate #ROK godina, u slučaju kada kupoprodajna cijena vozila iznosi #IZNOS kuna s uključenim PDV-om, a učešće je u iznosu od #IZNOS UČEŠĆA kuna, bez naknade za obradu kredita te anuitetsku otplatu efektivna kamatna stopa (EKS) za kredit u kunama od #IZNOS KREDITA iznosi #EKS. Mjesečni anuitet iznosi 890,01 kuna, a ukupan iznos koji klijent treba platiti #IZNOS FINANCIRANJA + KAMATA kuna.Prikazani rezultati na osnovi podataka koje ste unijeli mogu se primijeniti isključivo u informativne svrhe i ne obvezuju Banku na pružanje bankarske usluge. Računica se prikazuje u skladu s Općim uvjetima poslovanja i Banka zadržava pravo izmijeniti odredbe navedenog dokumenta. Banka donosi odluku o pružanju bankarske usluge u skladu s uvjetima koji su navedeni u Općim uvjetima poslovanja, na osnovi procjene kreditne sposobnosti. Zbog specifičnosti statusa, molimo nerezidentnog klijenta da se o cjelokupnoj ponudi informira tako što će ugovoriti sastanak s bankarom u Centru za nerezidente.</span>
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
                settings: {
                    participationMin: 0,
                    participationMax: 0,
                    participationStep: 1,
                    participationDefault: 0,
                    durationMin: 0,
                    durationMax: 0,
                    durationStep: 0
                },
                calculation: {
                    financing_type: 'credit',
                    participation: 0,
                    duration: 0,
                    bundle_selected: false
                },
                calculationResults: {
                    financing_amount: 0,
                    nominal_interest_rate: 0,
                    effective_interest_rate: 0,
                    administration_fee: 0,
                    monthly_installment: 0,
                    currency: 'HRK',
                    bundle: []
                }
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
            this.fetchSettings()
                .then((settings) => {
                    this.setDefaultValues(settings);
                    this.calculate();
                })
        },

        computed: {
            durationTabs() {
                let items = [];
                if (this.settings.durationMax > this.settings.durationMin && this.settings.durationMax > 0) {
                    for (let i = this.settings.durationMin; i <= this.settings.durationMax; i = i + this.settings.durationStep) {
                        items.push(i);
                    }
                }
                return items;
            },

            summary() {
                return [
                    { label: 'Vrijednost vozila', value: formatNumber(window.RCI_SIMULATOR_CONFIG.vehicle_price, 2) + ' ' + this.calculationResults.currency },
                    { label: 'Učešće', value: formatNumber(this.calculation.participation, 2) + ' ' + this.calculationResults.currency },
                    { label: 'Iznos financiranja', value: formatNumber(this.calculationResults.financing_amount, 2) + ' ' + this.calculationResults.currency },
                    { label: 'Trajanje otplate', value: this.calculation.duration + ' mjeseci' },
                    { label: 'Nominalna kamatna stopa', value: formatNumber(this.calculationResults.nominal_interest_rate, 2) + '%' },
                    { label: 'Efektivna kamatna stopa', value: formatNumber(this.calculationResults.effective_interest_rate, 2) + '%' },
                    { label: 'Trošak obrade', value: formatNumber(this.calculationResults.administration_fee, 2) + '%' },
                    { label: 'Mjesečna rata', value: formatNumber(this.calculationResults.monthly_installment, 2) + ' ' + this.calculationResults.currency },
                ];
            }
        },

        methods: {
            fetchSettings() {
                return new Promise((resolve, reject) => {
                    let endpoint = 'https://rna.sto2.hr/api/rci-simulator/settings';

                    axios.get(endpoint)
                        .then((response) => {
                            resolve(response.data);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            },

            setDefaultValues(settings) {
                this.settings.participationMax = parseFloat(window.RCI_SIMULATOR_CONFIG.vehicle_price);
                this.settings.participationStep = parseInt(settings.kredit_ucesce_korak);
                this.settings.durationMin = parseInt(settings.kredit_otplata_min);
                this.settings.durationMax = parseInt(settings.kredit_otplata_max);
                this.settings.durationStep = parseInt(settings.kredit_otplata_korak);

                this.calculation.participation = parseFloat(window.RCI_SIMULATOR_CONFIG.vehicle_price) * parseFloat(settings.kredit_ucesce_default);
                this.calculation.duration = parseInt(settings.kredit_otplata_default);
            },

            setDuration(duration) {
                this.calculation.duration = duration;
                this.calculate();
            },

            calculate() {
                this.loading = true;
                let endpoint = 'https://rna.sto2.hr/api/rci-simulator/calculate';

                let data = window.RCI_SIMULATOR_CONFIG;
                for (let key in this.calculation) {
                    data [key] = this.calculation [key];
                }

                axios.post(endpoint, data)
                    .then((response) => {
                        this.loading = false;
                        this.calculationResults = response.data;

                        document.querySelector('.rci-calculator-price-wrapper').style.display = 'block';
                        document.querySelector('.price-calculation-info-button').innerText = 'VEČ OD';
                        document.querySelector('.price-calculation-price-month-installment').innerText = formatNumber(this.calculationResults.monthly_installment, 2) + ' ' + this.calculationResults.currency + '/mj*';
                    })
            },

            changeFinancingType(type) {
                this.calculation.financing_type = type;
                this.calculate();
            },

            downscaleParticipation() {
                let step = this.settings.participationStep;
                if (this.calculation.participation - step >= this.settings.participationMin) {
                    this.calculation.participation -= step;
                    this.calculate();
                }
            },

            upscaleParticipation() {
                let step = this.settings.participationStep;
                if (this.calculation.participation + step <= this.settings.participationMax) {
                    this.calculation.participation += step;
                    this.calculate();
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