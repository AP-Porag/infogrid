<template>
    <div class="">
        <form>
            <!--            :title="`Create Third party with ${step_count} steps`"-->
            <!--        :subtitle="form_wizard_subtitle"-->
            <!--        @on-change="handleTabChange"-->
            <form-wizard
                @on-complete="submit"
                color="#3476ae"
                title=""
                subtitle=""
                next-button-text="Continue"
                finish-button-text="Save"
            >

                <template v-slot:footer="props">
                    <div class="wizard-footer-left">
                        <wizard-button  v-if="props.activeTabIndex > 0" @click.native="props.prevTab()" :style="props.fillButtonStyle">Back</wizard-button>
                    </div>
                    <div class="wizard-footer-right">
                        <wizard-button @click.native="cancel" class="wizard-footer-right finish-button" style="background: orange;margin-left: 15px;color: white;">Cancel</wizard-button>
                        <wizard-button v-if="!props.isLastStep"@click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Continue</wizard-button>
                        <wizard-button v-else @click.native="submit" class="wizard-footer-right" :style="props.fillButtonStyle">Save</wizard-button>
                    </div>
                </template>
<!--                <tab-content-->
<!--                    title="Customer Info"-->
<!--                    icon="ti-user"-->
<!--                    :before-change="checkFirstStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Customer Name-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.customer"-->
<!--                                                        @change="customerNameChangeEvent"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(customer,index) in customers" :value="customer" :key="customer.id">{{customer.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.name" :options="customers" placeholder="Select customer..." @change="customerNameChangeEvent($event)" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.name.required.$invalid && show_error_one">-->
<!--                                                    Customer name is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-md-6 bg-black">-->
<!--                                            <a href="/admin/customers/create" class="btn btn-light bg-white" style="margin-top: 28px; float: right;">Add New Customer</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </tab-content>-->
<!--                <tab-content-->
<!--                    title="Grading Location"-->
<!--                    icon="ti-map-alt"-->
<!--                    :before-change="checkSecondStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            &lt;!&ndash;                        <div class="card shipping_address_card">&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="card-body">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Drop Off Center&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Contact Name&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.contact_name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.contact_name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                contact name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Email Address&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="email"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.email.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.email.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                email is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                            <h3 class="mb-only-name">{{v$.form_data.name.$model}}</h3>-->
<!--                        </div>-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Select the grading location for this order-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="v$.form_data.grading_location.$model"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(location,index) in gradingLocations" :value="location.id" :key="location.id">{{location.name}}</option>-->
<!--                                                </select>-->

<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.grading_location" :options="gradingLocations" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.grading_location.required.$invalid && show_error_two">-->
<!--                                                    Grading location is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </tab-content>-->
<!--                <tab-content-->
<!--                    title="Billing Address"-->
<!--                    icon="ti-infinite"-->
<!--                    :before-change="checkThirdStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            &lt;!&ndash;                        <div class="card shipping_address_card">&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="card-body">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Drop Off Center&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Contact Name&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.contact_name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.contact_name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                contact name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Email Address&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="email"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.email.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.email.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                email is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                            <h3 class="mb-only-name">{{v$.form_data.name.$model}}</h3>-->
<!--                        </div>-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Address Line one-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    autofocus-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.billing_address_line_one.$model"-->
<!--                                                    ref="billing_address_line_one"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.billing_address_line_one.required.$invalid && show_error_three">-->
<!--                                                    One Address Line is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Address Line two-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="form_data.billing_address_line_two"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.billing_address_line_two.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Second address Line two is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    City-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.billing_city.$model"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.billing_city.required.$invalid && show_error_three">-->
<!--                                                    City is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Province/State-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="v$.form_data.billing_province.$model"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(province,index) in provinces" :value="province.name.toLowerCase()" :key="province.id">{{province.name}}</option>-->
<!--                                                </select>-->
<!--                                                <div class="error" v-if="v$.form_data.billing_province.required.$invalid && show_error_three">-->
<!--                                                    Province is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->


<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    postal/Zip code-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.billing_postal.$model"-->
<!--                                                    @input="event => v$.form_data.billing_postal.$model = event.target.value.toUpperCase()"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.billing_postal.required.$invalid && show_error_three">-->
<!--                                                    Postal is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="row">-->
<!--                                            <div class="col-md-3">-->
<!--                                                <div class="mb-3">-->
<!--                                                    <label class="form-label w-100 text-capitalize">-->
<!--                                                        Country-->
<!--                                                        <span class="error">*</span>-->
<!--                                                    </label>-->
<!--                                                    <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                            v-model.trim="v$.form_data.billing_country.$model"-->
<!--                                                    >-->
<!--                                                        <option selected disabled>Open this select menu</option>-->
<!--                                                        <option v-for="(country,index) in countries" :value="country.name.toLowerCase()" :key="country.id">{{country.name}}</option>-->
<!--                                                    </select>-->
<!--                                                    <div class="error" v-if="v$.form_data.billing_country.required.$invalid && show_error_three">-->
<!--                                                        Country is required-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-md-4">-->
<!--                                                <div class="mb-3">-->
<!--                                                    <label class="form-label w-100 text-capitalize">-->
<!--                                                        Telephone#-->
<!--                                                        &lt;!&ndash;                                                        <span class="error">*</span>&ndash;&gt;-->
<!--                                                    </label>-->
<!--                                                    <VuePhoneNumberInput-->
<!--                                                        id="phoneNumber1"-->
<!--                                                        class="mb-text-only"-->
<!--                                                        v-model.trim="form_data.billing_phone"-->
<!--                                                        default-country-code="CA"-->
<!--                                                        :only-countries="countries_phone"-->
<!--                                                        style="background-color: #e8f0fe !important;"-->
<!--                                                    />-->
<!--                                                    &lt;!&ndash;                                                    <div class="error" v-if="v$.form_data.billing_phone.required.$invalid && show_error_three">&ndash;&gt;-->
<!--                                                    &lt;!&ndash;                                                        Phone is required&ndash;&gt;-->
<!--                                                    &lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </tab-content>-->
<!--                <tab-content-->
<!--                    title="Shipping Address"-->
<!--                    icon="ti-infinite"-->
<!--                    :before-change="checkFourthStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            &lt;!&ndash;                        <div class="card shipping_address_card">&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="card-body">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Drop Off Center&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Contact Name&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.contact_name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.contact_name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                contact name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Email Address&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="email"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.email.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.email.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                email is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                            <h3 class="mb-only-name">{{v$.form_data.name.$model}}</h3>-->
<!--                        </div>-->

<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-12">-->
<!--                                            <div class="mb-3 d-flex justify-content-start">-->
<!--                                                <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                    Same as billing address-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="checkbox"-->
<!--                                                    class="form-check"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="form_data.same_as_billing"-->
<!--                                                    @change="sameAsBillingChanged($event)"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.same_as_billing.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Same as Billing is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Customer Name (if different)-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    autofocus-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="form_data.shipping_name"-->
<!--                                                    ref="shipping_name"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.shipping_name.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Name for shipping is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Contact Name (if different)-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.shipping_company_name.$model"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.shipping_company_name.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Company name is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Address Line one-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.shipping_address_line_one.$model"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.shipping_address_line_one.required.$invalid && show_error_four">-->
<!--                                                    One Address is required for shipping-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Address Line two-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="form_data.shipping_address_line_two"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.shipping_address_line_two.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Second shipping address required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    City-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.shipping_city.$model"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.shipping_city.required.$invalid && show_error_four">-->
<!--                                                    city is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Province/State-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="v$.form_data.shipping_province.$model"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(province,index) in provinces" :value="province.name.toLowerCase()" :key="province.id">{{province.name}}</option>-->
<!--                                                </select>-->
<!--                                                <div class="error" v-if="v$.form_data.shipping_province.required.$invalid && show_error_four">-->
<!--                                                    Province is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    postal/Zip code-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="text"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="v$.form_data.shipping_postal.$model"-->
<!--                                                    @input="event => v$.form_data.shipping_postal.$model = event.target.value.toUpperCase()"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.shipping_postal.required.$invalid && show_error_four">-->
<!--                                                    Postal is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="row">-->
<!--                                            <div class="col-md-3">-->
<!--                                                <div class="mb-3">-->
<!--                                                    <label class="form-label w-100 text-capitalize">-->
<!--                                                        Country-->
<!--                                                        <span class="error">*</span>-->
<!--                                                    </label>-->
<!--                                                    <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                            v-model.trim="v$.form_data.shipping_country.$model"-->
<!--                                                    >-->
<!--                                                        <option selected disabled>Open this select menu</option>-->
<!--                                                        <option v-for="(country,index) in countries" :value="country.name.toLowerCase()" :key="country.id">{{country.name}}</option>-->
<!--                                                    </select>-->
<!--                                                    <div class="error" v-if="v$.form_data.shipping_country.required.$invalid && show_error_four">-->
<!--                                                        Country is required-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="col-md-4">-->
<!--                                                <div class="mb-3">-->
<!--                                                    <label class="form-label w-100 text-capitalize">-->
<!--                                                        Telephone#-->
<!--                                                        &lt;!&ndash;                                                        <span class="error">*</span>&ndash;&gt;-->
<!--                                                    </label>-->
<!--                                                    <VuePhoneNumberInput-->
<!--                                                        id="phoneNumber1"-->
<!--                                                        class="mb-text-only"-->
<!--                                                        v-model.trim="form_data.shipping_phone"-->
<!--                                                        default-country-code="CA"-->
<!--                                                        :only-countries="countries_phone"-->
<!--                                                    />-->
<!--                                                    &lt;!&ndash;                                                    <div class="error" v-if="v$.form_data.shipping_phone.required.$invalid && show_error_four">&ndash;&gt;-->
<!--                                                    &lt;!&ndash;                                                        Phone is required&ndash;&gt;-->
<!--                                                    &lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </tab-content>-->
<!--                <tab-content-->
<!--                    title="Extra Fields"-->
<!--                    icon="ti-server"-->
<!--                    :before-change="checkFifthStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            &lt;!&ndash;                        <div class="card shipping_address_card">&ndash;&gt;-->
<!--                            &lt;!&ndash;                            <div class="card-body">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                <div class="row">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Drop Off Center&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Contact Name&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="text"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.contact_name.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.contact_name.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                contact name is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    <div class="col-md-4">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        <div class="mb-3">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <label class="form-label w-100 text-capitalize">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                Email Address&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </label>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <input&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                type="email"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                class="form-control md-readonly"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                placeholder=""&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                v-model.trim="v$.form_data.email.$model"&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                readonly&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            />&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.email.required.$invalid && show_error_one">&ndash;&gt;-->
<!--                            &lt;!&ndash;                                                email is required&ndash;&gt;-->
<!--                            &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                                </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                            &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                            <h3 class="mb-only-name">{{v$.form_data.name.$model}}</h3>-->
<!--                        </div>-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Submission date-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    autofocus-->
<!--                                                    type="date"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    :max="maxDate"-->
<!--                                                    v-model.trim="v$.form_data.submission_date.$model"-->
<!--                                                    ref="billing_address_line_one"-->
<!--                                                />-->
<!--                                                <div class="error" v-if="v$.form_data.submission_date.required.$invalid && show_error_five">-->
<!--                                                    Submission date is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Promo code-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.promo_code"-->
<!--                                                >-->
<!--                                                    <option selected disabled v-if="promos.length > 0">Open this select menu</option>-->
<!--                                                    <option selected disabled v-else>There is no promo code</option>-->
<!--                                                    <option v-for="(promo,index) in promos" :value="promo.id" :key="promo.id">{{promo.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.promo_code" :options="promoCodes" />&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-2">-->
<!--                                            <div class="mb-3 d-flex justify-content-start" style="margin-top: 25px;">-->
<!--                                                <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                    Payment Made-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="radio"-->
<!--                                                    class="form-check"-->
<!--                                                    name="payment_method"-->
<!--                                                    placeholder=""-->
<!--                                                    value="pym"-->
<!--                                                    v-model.trim="form_data.payment_method"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                            <div class="error" v-if="v$.form_data.same_as_billing.required.$invalid && show_error">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                Same as Billing is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-2">-->
<!--                                            <div class="mb-3 d-flex justify-content-end" style="margin-top: 25px;">-->
<!--                                                <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                    Pay on pickup-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="radio"-->
<!--                                                    class="form-check"-->
<!--                                                    name="payment_method"-->
<!--                                                    placeholder=""-->
<!--                                                    value="pop"-->
<!--                                                    v-model.trim="form_data.payment_method"-->
<!--                                                />-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-1">-->
<!--                                            <div class="mb-3 d-flex justify-content-end" style="margin-top: 25px;">-->
<!--                                                <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                    COD-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="radio"-->
<!--                                                    class="form-check"-->
<!--                                                    name="payment_method"-->
<!--                                                    placeholder=""-->
<!--                                                    value="cod"-->
<!--                                                    v-model.trim="form_data.payment_method"-->
<!--                                                />-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-1">-->
<!--                                            <div class="mb-3 d-flex justify-content-end" style="margin-top: 25px;">-->
<!--                                                <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                    N/A-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="radio"-->
<!--                                                    class="form-check"-->
<!--                                                    name="payment_method"-->
<!--                                                    placeholder=""-->
<!--                                                    value="n/a"-->
<!--                                                    v-model.trim="form_data.payment_method"-->
<!--                                                />-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-3">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Shopify order number-->
<!--                                                </label>-->
<!--                                                <input-->
<!--                                                    type="number"-->
<!--                                                    class="form-control mb-text-only"-->
<!--                                                    placeholder=""-->
<!--                                                    v-model.trim="form_data.shopify_order_number"-->
<!--                                                />-->
<!--                                                &lt;!&ndash;                                                <div class="error" v-if="v$.form_data.billing_city.required.$invalid && show_error_two">&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                    City is required&ndash;&gt;-->
<!--                                                &lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </tab-content>-->
<!--                <tab-content-->
<!--                    title="Shipping Method"-->
<!--                    icon="ti-credit-card"-->
<!--                    :before-change="checkSixthStep"-->
<!--                >-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-6">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Shipping Method-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.shipping_method"-->
<!--                                                        @change="shippingMethodsChangeEvent"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(shipping,index) in shippingMethods" :value="shipping.name" :key="shipping.id">{{shipping.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.shipping_method" :options="shippingMethods" @change="shippingMethodsChangeEvent($event)" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.shipping_method.required.$invalid && show_error_six">-->
<!--                                                    Shipping method is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6" v-if="showPickupLocationBox">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Pickup location-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.pickup_location"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(pickup,index) in pickUpLocations" :value="pickup.name" :key="pickup.id">{{pickup.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.pickup_location" :options="pickUpLocations" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.pickup_location.required.$invalid && show_error_seven">-->
<!--                                                    Pickup location is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6" v-if="showShowPickupLocationBox">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Pickup Location-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.show_pickup_location"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(showPickup,index) in pickUpLocations" :value="showPickup.name" :key="showPickup.id">{{showPickup.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.show_pickup_location" :options="pickUpLocations" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.show_pickup_location.required.$invalid && show_error_eight">-->
<!--                                                    Pickup location is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6" v-if="showThirdPartyBox">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Third party drop off center-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="form_data.third_party_drop_center"-->
<!--                                                >-->
<!--                                                    <option selected disabled v-if="parties.length > 0">Open this select menu</option>-->
<!--                                                    <option selected disabled v-else>There is no third party</option>-->
<!--                                                    <option v-for="(third,index) in parties" :value="third.id" :key="third.id">{{third.name}}</option>-->
<!--                                                </select>-->
<!--                                                <div class="error" v-if="v$.form_data.third_party_drop_center.required.$invalid && show_error_nine">-->
<!--                                                    Third party drop off center is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                        <div class="col-md-6" v-if="showUPSBox">-->
<!--                                            <div class="row">-->
<!--                                                <div class="col-md-6">-->
<!--                                                    <div class="mb-3 d-flex justify-content-start" style="margin-top: 25px;">-->
<!--                                                        <label class="form-label text-capitalize" style="margin-top: 6px;margin-right: 15px;">-->
<!--                                                            Use Customer Account-->
<!--                                                        </label>-->
<!--                                                        <input-->
<!--                                                            type="checkbox"-->
<!--                                                            class="form-check"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.use_customer_account"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->

<!--                                                <div class="col-md-6">-->
<!--                                                    <div class="mb-3">-->
<!--                                                        <label class="form-label w-100 text-capitalize">-->
<!--                                                            Customer Account number-->
<!--                                                            <span class="error">*</span>-->
<!--                                                        </label>-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control mb-text-only"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="v$.form_data.customer_account_number.$model"-->
<!--                                                        />-->
<!--                                                        <div class="error" v-if="v$.form_data.customer_account_number.required.$invalid && show_error_ten">-->
<!--                                                            Customer account number is required-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </tab-content>-->
                <tab-content
                    title="Item Type"
                    icon="ti-gift"
                    :before-change="checkFirstStep"
                >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Select the Equipment type to be entered
                                                    <span class="error">*</span>
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.itemType"
                                                        @change="itemTypeChangeEvent"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option v-for="(type,index) in itemTypes" :value="type.name" :key="type.id">{{type.name}}</option>
                                                </select>
                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_one">
                                                    Item type is required
                                                </div>
                                            </div>
                                        </div>

<!--                                        <div class="col-md-6" v-if="showItemTypeCrossoverBox">-->
<!--                                            <div class="mb-3">-->
<!--                                                <label class="form-label w-100 text-capitalize">-->
<!--                                                    Crossover Item Type-->
<!--                                                    <span class="error">*</span>-->
<!--                                                </label>-->
<!--                                                <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                        v-model.trim="v$.form_data.crossover_item_type.$model"-->
<!--                                                >-->
<!--                                                    <option selected disabled>Open this select menu</option>-->
<!--                                                    <option v-for="(coType,index) in crossoverItemTypes" :value="coType.name" :key="coType.id">{{coType.name}}</option>-->
<!--                                                </select>-->
<!--                                                &lt;!&ndash;                                            <Select2 v-model="form_data.crossover_item_type" :options="crossoverItemTypes" />&ndash;&gt;-->
<!--                                                <div class="error" v-if="v$.form_data.crossover_item_type.required.$invalid && show_error_sixteen">-->
<!--                                                    Crossover item type is required-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--name & location-->
                        <div class="col-md-12" v-if="showItemTypeCardBox || showItemTypeAutoAthenticationBox || showItemTypeCombinedServiceBox || showItemTypeReholderBox || showItemTypeCrossoverBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Name , Location & Make , Model
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Name & Location
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.name_location"
                                                    />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Make & Model
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.make_model"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Pump-->
                        <div class="col-md-12" v-if="showItemTypeCardBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="number"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.pumpYearOfInstallationRated"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Flow
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpFlowRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpFlowMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Head
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpHeadRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpHeadMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Voltage
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpVoltageRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpVoltageMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Current
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpCurrentRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpCurrentMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Power factor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpPowerFactorRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpPowerFactorMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor power
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpMotorPowerRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpMotorPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Speed
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpSpeedRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">rpm</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpSpeedMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">rpm</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpMotorEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor Efficiency class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <select class="form-select mb-text-only" aria-label="Default select example"
                                                                v-model.trim="form_data.pumpMotorEfficiencyClassRated"
                                                        >
                                                            <option value="IE2">IE2</option>
                                                            <option value="IE3">IE3</option>
                                                            <option value="IE4">IE4</option>
                                                            <option value="IE5">IE5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor frame size
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpMotorFrameSizeRated"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Insulation class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpInsulationClassRated"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Suction head
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpSuctionHeadMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Discharge head
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpDischargeHeadMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Pump efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pumpEfficiencyMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Fan-->
                        <div class="col-md-12" v-if="showItemTypeAutoAthenticationBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="number"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.fanYearOfInstallationRated"
                                                    />
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <input-->
<!--                                                        type="number"-->
<!--                                                        class="form-control"-->
<!--                                                        placeholder=""-->
<!--                                                        v-model.trim="form_data.fanYearOfInstallationMeasured"-->
<!--                                                    />-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Flow
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanFlowRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanFlowMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Head
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanHeadRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanHeadMeasured"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Voltage
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanVoltageRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanVoltageMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Current
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanCurrentRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanCurrentMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Power factor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanPowerFactorRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanPowerFactorMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor power
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanMotorPowerRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanMotorPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Speed
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanSpeedRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanSpeedMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanMotorEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanMotorEfficiencyMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor Efficiency class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <select class="form-select mb-text-only" aria-label="Default select example"
                                                                v-model.trim="form_data.fanMotorEfficiencyClassRated"
                                                        >
                                                            <option value="IE2">IE2</option>
                                                            <option value="IE3">IE3</option>
                                                            <option value="IE4">IE4</option>
                                                            <option value="IE5">IE5</option>
                                                        </select>
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                                v-model.trim="form_data.fanMotorEfficiencyClassMeasured"-->
<!--                                                        >-->
<!--                                                            <option value="IE2">IE2</option>-->
<!--                                                            <option value="IE3">IE3</option>-->
<!--                                                            <option value="IE4">IE4</option>-->
<!--                                                            <option value="IE5">IE5</option>-->
<!--                                                        </select>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor frame size
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanMotorFrameSizeRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanMotorFrameSizeMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Insulation class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanInsulationClassRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanInsulationClassMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Suction Duct Size
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanSuctionDuctSizeRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">m2</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanSuctionDuctSizeMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Suction Static pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanSuctionStaticPressureRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanSuctionStaticPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Suction Velocity pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanSuctionVelocityPressureRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanSuctionVelocityPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Discharge Duct Size
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanDischargeDuctSizeRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">m2</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanDischargeDuctSizeMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Discharge Static pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanDischargeStaticPressureRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanDischargeStaticPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Discharge Velocity pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanDischargeVelocityPressureRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanDischargeVelocityPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Discharge Velocity
                                                </label>
                                                <!--                                                <div class="col-md-6">-->
                                                <!--                                                    <label class="form-label w-100">-->
                                                <!--                                                        Rated Parameter-->
                                                <!--                                                    </label>-->
                                                <!--                                                    <div class="d-flex justify-content-between">-->
                                                <!--                                                        <input-->
                                                <!--                                                            type="number"-->
                                                <!--                                                            class="form-control"-->
                                                <!--                                                            placeholder=""-->
                                                <!--                                                            v-model.trim="form_data.fanDischargeVelocityPressureRated"-->
                                                <!--                                                        />-->
                                                <!--                                                    </div>-->
                                                <!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanDischargeVelocityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Fan efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fanEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.fanEfficiencyMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Air Compressor-->
                        <div class="col-md-12" v-if="showItemTypeCombinedServiceBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.airCompressorYearOfInstallationRated"
                                                    />
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <input-->
<!--                                                        type="text"-->
<!--                                                        class="form-control"-->
<!--                                                        placeholder=""-->
<!--                                                        v-model.trim="form_data.airCompressorYearOfInstallationMeasured"-->
<!--                                                    />-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Flow
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorFlowRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorFlowMeasured"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Pressure
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorPressureRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Voltage
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorVoltageRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorVoltageMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Current
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorCurrentRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorCurrentMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Power factor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorPowerFactorRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorPowerFactorMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor power
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorMotorPowerRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorMotorPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Speed
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorSpeedRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorSpeedMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorMotorEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorMotorEfficiencyMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor Efficiency class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <select class="form-select mb-text-only" aria-label="Default select example"
                                                                v-model.trim="form_data.airCompressorMotorEfficiencyClassRated"
                                                        >
                                                            <option value="IE2">IE2</option>
                                                            <option value="IE3">IE3</option>
                                                            <option value="IE4">IE4</option>
                                                            <option value="IE5">IE5</option>
                                                        </select>
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                                v-model.trim="form_data.airCompressorMotorEfficiencyClassMeasured"-->
<!--                                                        >-->
<!--                                                            <option value="IE2">IE2</option>-->
<!--                                                            <option value="IE3">IE3</option>-->
<!--                                                            <option value="IE4">IE4</option>-->
<!--                                                            <option value="IE5">IE5</option>-->
<!--                                                        </select>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor frame size
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorMotorFrameSizeRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorMotorFrameSizeMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Insulation class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorInsulationClassRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorInsulationClassMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Load Pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorLoadPressureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLoadPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Unnload Pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorUnLoadPressureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorUnLoadPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Reciever Size
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorRecieverSizeRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">m3</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorRecieverSizeMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Pipe volume
                                                </label>
                                                <!--                                                <div class="col-md-6">-->
                                                <!--                                                    <label class="form-label w-100">-->
                                                <!--                                                        Rated Parameter-->
                                                <!--                                                    </label>-->
                                                <!--                                                    <div class="d-flex justify-content-between">-->
                                                <!--                                                        <input-->
                                                <!--                                                            type="number"-->
                                                <!--                                                            class="form-control"-->
                                                <!--                                                            placeholder=""-->
                                                <!--                                                            v-model.trim="form_data.airCompressorRecieverSizeRated"-->
                                                <!--                                                        />-->
                                                <!--                                                        <span class="mt-2" style="margin-left: .5rem;">m3</span>-->
                                                <!--                                                    </div>-->
                                                <!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorPipeVolumeMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Initial Pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorInitialPressureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorInitialPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Final Pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorFinalPressureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorFinalPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">bar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Time to reach final pressure
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorTimeToReachFinalPressureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">Minutes</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorTimeToReachFinalPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Minutes</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Temperature
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorTemperatureRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorTemperatureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Compressor SEC
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorCompressorSECRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW/CFM</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorCompressorSECMeasured"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW/CFM</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Dryer type
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorDryerTypeRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.airCompressorCompressorSECMeasured"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">kW/CFM</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Dryer make and model
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorDryerMakeModelRated"
                                                        />
                                                    </div>
                                                </div>
                                                <!--                                                <div class="col-md-6">-->
                                                <!--                                                    <label class="form-label w-100">-->
                                                <!--                                                        Measured Parameter-->
                                                <!--                                                    </label>-->
                                                <!--                                                    <div class="d-flex justify-content-between">-->
                                                <!--                                                        <input-->
                                                <!--                                                            type="number"-->
                                                <!--                                                            class="form-control"-->
                                                <!--                                                            placeholder=""-->
                                                <!--                                                            v-model.trim="form_data.airCompressorCompressorSECMeasured"-->
                                                <!--                                                        />-->
                                                <!--                                                        <span class="mt-2" style="margin-left: .5rem;">kW/CFM</span>-->
                                                <!--                                                    </div>-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <p>Leakage test</p>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Load time
                                                </label>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 1
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLoadTimeReadingOne"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 2
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLoadTimeReadingTwo"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 3
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLoadTimeReadingThree"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Unload time
                                                </label>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 1
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorUnLoadTimeReadingOne"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 2
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorUnLoadTimeReadingTwo"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 3
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorUnLoadTimeReadingThree"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Sec.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Leakage %
                                                </label>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Leakage 1
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLeakageReadingOne"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 2
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLeakageReadingTwo"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Reading 3
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.airCompressorLeakageReadingThree"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Chiller-->
                        <div class="col-md-12" v-if="showItemTypeReholderBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.chillerYearOfInstallationRated"
                                                    />
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <input-->
<!--                                                        type="text"-->
<!--                                                        class="form-control"-->
<!--                                                        placeholder=""-->
<!--                                                        v-model.trim="form_data.chillerYearOfInstallationMeasured"-->
<!--                                                    />-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Type of chiller
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.chillerTypeOfChillerRated"
                                                    />
                                                </div>
                                                <!--                                                <div class="col-md-6">-->
                                                <!--                                                    <label class="form-label w-100">-->
                                                <!--                                                        Measured Parameter-->
                                                <!--                                                    </label>-->
                                                <!--                                                    <input-->
                                                <!--                                                        type="text"-->
                                                <!--                                                        class="form-control"-->
                                                <!--                                                        placeholder=""-->
                                                <!--                                                        v-model.trim="form_data.chillerYearOfInstallationMeasured"-->
                                                <!--                                                    />-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Nos. of Compressor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.chillerNosOfCompressorRated"
                                                    />
                                                </div>
                                                                                                <div class="col-md-6">
                                                                                                    <label class="form-label w-100">
                                                                                                        Measured Parameter
                                                                                                    </label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        class="form-control"
                                                                                                        placeholder=""
                                                                                                        v-model.trim="form_data.chillerNosOfCompressorMeasured"
                                                                                                    />
                                                                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Capacity
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCapacityRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">TR</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCapacityMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">TR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Voltage
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerVoltageRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerVoltageMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Current
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCurrentRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCurrentMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Power factor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerPowerFactorRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerPowerFactorMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Speed
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerSpeedRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerSpeedMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor power
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerMotorPowerRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerMotorPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerMotorEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.chillerMotorEfficiencyMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor Efficiency class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <select class="form-select mb-text-only" aria-label="Default select example"
                                                                v-model.trim="form_data.chillerMotorEfficiencyClassRated"
                                                        >
                                                            <option value="IE2">IE2</option>
                                                            <option value="IE3">IE3</option>
                                                            <option value="IE4">IE4</option>
                                                            <option value="IE5">IE5</option>
                                                        </select>
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                                v-model.trim="form_data.chillerMotorEfficiencyClassMeasured"-->
<!--                                                        >-->
<!--                                                            <option value="IE2">IE2</option>-->
<!--                                                            <option value="IE3">IE3</option>-->
<!--                                                            <option value="IE4">IE4</option>-->
<!--                                                            <option value="IE5">IE5</option>-->
<!--                                                        </select>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor frame size
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerMotorFrameSizeRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.chillerMotorFrameSizeMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Chiller loading
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.chillerChillerLoadingRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                                                                <div class="col-md-6">
                                                                                                    <label class="form-label w-100">
                                                                                                        Measured Parameter
                                                                                                    </label>
                                                                                                    <div class="d-flex justify-content-between">
                                                                                                        <input
                                                                                                            type="number"
                                                                                                            class="form-control"
                                                                                                            placeholder=""
                                                                                                            v-model.trim="form_data.chillerChillerLoadingMeasured"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Supply Temp.
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.chillerSupplyTempRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerSupplyTempMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Return Temp.
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.chillerReturnTempRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerReturnTempMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Flow
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerFlowRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerFlowMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Chiller SEC
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerChillerSECRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW/TR</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerChillerSECMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW/TR</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Condenser Approch
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCondenserApprochRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chillerCondenserApprochMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">C</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Motors-->
                        <div class="col-md-12" v-if="showItemTypeCrossoverBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.motorYearOfInstallationRated"
                                                    />
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <input-->
<!--                                                        type="text"-->
<!--                                                        class="form-control"-->
<!--                                                        placeholder=""-->
<!--                                                        v-model.trim="form_data.motorYearOfInstallationMeasured"-->
<!--                                                    />-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
<!--                            <div class="card shipping_address_card">-->
<!--                                <div class="card-body">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-md-12">-->
<!--                                            <div class="row mb-3">-->
<!--                                                <label class="form-label w-100">-->
<!--                                                    Name of equipment-->
<!--                                                </label>-->
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="text"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.motorNameOfEquipmentRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="text"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.motorNameOfEquipmentMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Voltage
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorVoltageRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorVoltageMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Current
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorCurrentRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorCurrentMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Power factor
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorPowerFactorRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorPowerFactorMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Speed
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorSpeedRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorSpeedMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Temp.
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.motorPowerFactorRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorTempMeasured"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor power
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorMotorPowerRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorMotorPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor efficiency
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorMotorEfficiencyRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.motorMotorEfficiencyMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor Efficiency class
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <select class="form-select mb-text-only" aria-label="Default select example"
                                                                v-model.trim="form_data.motorMotorEfficiencyClassRated"
                                                        >
                                                            <option value="IE2">IE2</option>
                                                            <option value="IE3">IE3</option>
                                                            <option value="IE4">IE4</option>
                                                            <option value="IE5">IE5</option>
                                                        </select>
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <select class="form-select mb-text-only" aria-label="Default select example"-->
<!--                                                                v-model.trim="form_data.motorMotorEfficiencyClassMeasured"-->
<!--                                                        >-->
<!--                                                            <option value="IE2">IE2</option>-->
<!--                                                            <option value="IE3">IE3</option>-->
<!--                                                            <option value="IE4">IE4</option>-->
<!--                                                            <option value="IE5">IE5</option>-->
<!--                                                        </select>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Motor frame size
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motorMotorFrameSizeRated"
                                                        />
                                                    </div>
                                                </div>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="number"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.motorMotorFrameSizeMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>
                <tab-content
                title="Checklist"
                icon="ti-check"
                >

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row" v-if="form_data.itemType === 'Pump'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD or not
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.pumpVFDorNot"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.pumpVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting in Hz
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pumpVFDSetting"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Pump throttling
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.pumpThrottling"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Flow Modulation required
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.pumpFlowModulationRequired"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Parallel pump operation
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.pumpParallelPumpOperation"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Nos. of rewiding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pumpNosOfRewidingOfMotor"
                                                />

<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check cavitation
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.pumpCheckCavitation"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Operating Hours in day
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pumpOperatingHours"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Fan'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD or not
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.fanVFDorNot"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.fanVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fanVFDSetting"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Damper opening %
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fanOpening"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Flow Modulation required
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.fanFlowModulationRequired"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Parallel fan operation
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.fanParallelFanOperation"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Nos. of rewiding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fanNosOfRewidingOfMotor"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Operating Hours
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fanOperatingHours"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Air Compressor'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD or not
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.airCompressorVFDorNot"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.airCompressorVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Nos. of rewiding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorNosOfRewidingOfMotor"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check Required pressure
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckRequiredpressure"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check Pressure drop
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckPressureDrop"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check end use point pressure
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckEndUsePointPressure"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check inlet air filter DP
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckInletAirFilterDp"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check load time
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckLoadTime"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check unload time
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckUnLoadTime"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Load hours
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckLoadHours"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Run hours
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckRunHours"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Ambient Temp.
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorCheckAmbientTemp"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Operating Hours
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.airCompressorOperatingHours"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Chiller'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD or not
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.chillerVFDorNot"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.chillerVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.chillerVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check set temp.
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.chillerSetTemp"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check condenser condition
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.chillerCheckCondenserCondition"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Take chiller HMI data
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.chiller.chillerTakeChillerHMIData"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Operating Hours
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.chillerOperatingHours"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Motors'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD or not
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motorVFDorNot"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="nos">Nos</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.motorVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.motor.motorVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check per phase current
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motorCheckPerPhaseCurrent"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="nos">Nos</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check Phasor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motorCheckPhasor"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="nos">Nos</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Nos. of rewiding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motorNosOfRewidingOfMotor"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="nos">Nos</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Operating Hours
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motorOperatingHours"
                                                >
                                                    <option selected disabled>Open this select menu</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="nos">Nos</option>
                                                </select>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>

                <tab-content
                title="Observation & Image"
                icon="ti-image"
                >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button class="btn btn-dark" @click="openPopUpModal" type="button">
                                                Take Image
                                            </button>
                                            <div class="mt-3" v-if="form_data.images.length > 0">
                                                <p class="form-label active">
                                                    Images
                                                </p>
                                                <div id="images" class="row">
                                                    <div class="col-md-4" v-for="(image, index ) in form_data.images"
                                                         :key="index">
                                                        <div class="position-relative">
                                                            <button class="ïc--close" @click.prevent="cancelImage(index)"><i class="ti-close"></i></button>
                                                            <img
                                                                :src="image"
                                                                alt="Captured images"
                                                                class="img-fluid"
                                                                style="height: 215px;width: 290px;"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3 mt-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Observations
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <textarea v-model="form_data.observations" class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Write the observations here..."></textarea>
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tab-content>
            </form-wizard>
        </form>


        <!--open pop up modal start-->
        <div
            class="modal fade"
            id="openPopUpModal"
            tabindex="-1"
            aria-labelledby="formModal"
            style="display: none"
            aria-hidden="true"
            data-keyboard="false"
            data-backdrop="static"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="formPopUpModal">Open Camera or Upload Image</h5>
                        <button @click="closePopUpModal" type="button" class="close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <button class="btn btn-secondary" @click="openCamera" type="button">
                            Open Camera
                        </button>
                        <h4 class="text-warning mt-3">OR</h4>
                        <h5 class="card-inside-title">Upload Image</h5>
                        <div class="file-field input-field">
                            <div class="btn btn-secondary">
                                <span>Browse</span>
                                <input type="file" @change="uploadImage($event)" multiple>
                            </div>
<!--                            <div class="file-path-wrapper">-->
<!--                                <input class="file-path validate valid" type="text">-->
<!--                            </div>-->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-danger waves-effect"
                            @click="closePopUpModal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--open pop up modal end-->


        <!--open camera modal start-->
        <div
            class="modal fade"
            id="openCameraModal"
            tabindex="-1"
            aria-labelledby="formModal"
            style="display: none"
            aria-hidden="true"
            data-keyboard="false"
            data-backdrop="static"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="formModal">Take A Snap</h5>
                        <button @click="closeCameraModal" type="button" class="close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">

<!--                        <web-cam ref="webcam" width="640" height="480"></web-cam>-->
                        <video ref="video" autoplay playsinline style="width: 100%; max-height: 400px;"></video>
                        <canvas ref="canvas" style="display: none;"></canvas>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            @click="snapshot"
                            class="btn btn-info waves-effect"
                        >
                            Capture
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger waves-effect"
                            @click="closeCameraModal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--open camera modal end-->
    </div>

</template>

<script>
// import VuePhoneNumberInput from 'vue-phone-number-input';
import { useVuelidate } from '@vuelidate/core'
import {required, email, requiredIf, numeric} from '@vuelidate/validators'
// import {isReadonly} from "vue";
import { WebCam } from "vue-web-cam";


export default {
    name: "CreateInformation",
    props: ["project_id"],
    components: {
        WebCam
    },
    setup: () => ({ v$: useVuelidate() }),
    data(){
        return{
            maxDate: "",
            show_error_one: false,
            isReadonly:false,
            step_count:4,
            completed_step_count:'',
            form_wizard_subtitle:'Start here',
            isAllSelected: false,


            showPickupLocationBox:false,
            showShowPickupLocationBox:false,
            showThirdPartyBox:false,
            showUPSBox:false,

            showItemTypeCardBox:false,
            showItemTypeAutoAthenticationBox:false,
            showItemTypeCombinedServiceBox:false,
            showItemTypeReholderBox:false,
            showItemTypeCrossoverBox:false,

            itemTypes:[
                {
                    'id':1,
                    'name':'Pump',
                },
                {
                    'id':2,
                    'name':'Fan',
                },
                {
                    'id':3,
                    'name':'Air Compressor',
                },
                {
                    'id':4,
                    'name':'Chiller',
                },
                {
                    'id':5,
                    'name':'Motors',
                },
            ],
            form_data:{
                itemType:'',
                images:[],
                project_id: null,
                name_location: '',
                make_model: '',
                observations:'',
                //item type Pump
                pump : {
                    pumpYearOfInstallationRated:'',
                    pumpYearOfInstallationMeasured:'',
                    pumpFlowRated:'',
                    pumpFlowMeasured:'',
                    pumpHeadRated:'',
                    pumpHeadMeasured:'',
                    pumpVoltageRated:'',
                    pumpVoltageMeasured:'',
                    pumpCurrentRated:'',
                    pumpCurrentMeasured:'',
                    pumpPowerFactorRated:'',
                    pumpPowerFactorMeasured:'',
                    pumpMotorPowerRated:'',
                    pumpMotorPowerMeasured:'',
                    pumpSpeedRated:'',
                    pumpSpeedMeasured:'',
                    pumpMotorEfficiencyRated:'',
                    pumpMotorEfficiencyMeasured:'',
                    pumpMotorEfficiencyClassRated:'',
                    pumpMotorEfficiencyClassMeasured:'',
                    pumpMotorFrameSizeRated:'',
                    pumpMotorFrameSizeMeasured:'',
                    pumpInsulationClassRated:'',
                    pumpInsulationClassMeasured:'',
                    pumpSuctionHeadRated:'',
                    pumpSuctionHeadMeasured:'',
                    pumpDischargeHeadRated:'',
                    pumpDischargeHeadMeasured:'',
                    pumpEfficiencyRated:'',
                    pumpEfficiencyMeasured:'',
                    //checklist
                    pumpVFDorNot:'',
                    pumpVFDSetting:'',
                    pumpThrottling :'',
                    pumpFlowModulationRequired :'',
                    pumpParallelPumpOperation:'',
                    pumpNosOfRewidingOfMotor:'',
                    pumpCheckCavitation:'',
                    pumpOperatingHours:'',
                },
                //item type Fan
                fan : {
                    fanYearOfInstallationRated:'',
                    fanYearOfInstallationMeasured:'',
                    fanFlowRated:'',
                    fanFlowMeasured:'',
                    fanHeadRated:'',
                    fanHeadMeasured:'',
                    fanVoltageRated:'',
                    fanVoltageMeasured:'',
                    fanCurrentRated:'',
                    fanCurrentMeasured:'',
                    fanPowerFactorRated:'',
                    fanPowerFactorMeasured:'',
                    fanMotorPowerRated:'',
                    fanSpeedRated:'',
                    fanSpeedMeasured:'',
                    fanMotorPowerMeasured:'',
                    fanMotorEfficiencyRated:'',
                    fanMotorEfficiencyMeasured:'',
                    fanMotorEfficiencyClassRated:'',
                    fanMotorEfficiencyClassMeasured:'',
                    fanMotorFrameSizeRated:'',
                    fanMotorFrameSizeMeasured:'',
                    fanInsulationClassRated:'',
                    fanInsulationClassMeasured:'',
                    fanSuctionDuctSizeRated:'',
                    fanSuctionDuctSizeMeasured:'',
                    fanSuctionStaticPressureRated:'',
                    fanSuctionStaticPressureMeasured:'',
                    fanSuctionVelocityPressureRated:'',
                    fanSuctionVelocityPressureMeasured:'',
                    fanDischargeDuctSizeRated:'',
                    fanDischargeDuctSizeMeasured:'',
                    fanDischargeStaticPressureRated:'',
                    fanDischargeStaticPressureMeasured:'',
                    fanDischargeVelocityPressureRated:'',
                    fanDischargeVelocityPressureMeasured:'',
                    fanDischargeVelocityRated:'',
                    fanDischargeVelocityMeasured:'',
                    fanEfficiencyRated:'',
                    fanEfficiencyMeasured:'',
                    //checklist
                    fanVFDorNot:'',
                    fanVFDSetting:'',
                    fanOpening  :'',
                    fanFlowModulationRequired :'',
                    fanParallelFanOperation:'',
                    fanNosOfRewidingOfMotor:'',
                    fanOperatingHours:'',
                },
                //item type Air Compressor
                compressor : {
                    airCompressorYearOfInstallationRated:'',
                    airCompressorYearOfInstallationMeasured:'',
                    airCompressorFlowRated:'',
                    airCompressorFlowMeasured:'',
                    airCompressorPressureRated:'',
                    airCompressorPressureMeasured:'',
                    airCompressorVoltageRated:'',
                    airCompressorVoltageMeasured:'',
                    airCompressorCurrentRated:'',
                    airCompressorCurrentMeasured:'',
                    airCompressorPowerFactorRated:'',
                    airCompressorPowerFactorMeasured:'',
                    airCompressorMotorPowerRated:'',
                    airCompressorMotorPowerMeasured:'',
                    airCompressorSpeedRated:'',
                    airCompressorSpeedMeasured:'',
                    airCompressorMotorEfficiencyRated:'',
                    airCompressorMotorEfficiencyMeasured:'',
                    airCompressorMotorEfficiencyClassRated:'',
                    airCompressorMotorEfficiencyClassMeasured:'',
                    airCompressorMotorFrameSizeRated:'',
                    airCompressorMotorFrameSizeMeasured:'',
                    airCompressorInsulationClassRated:'',
                    airCompressorInsulationClassMeasured:'',
                    airCompressorLoadPressureRated:'',
                    airCompressorLoadPressureMeasured:'',
                    airCompressorUnLoadPressureRated:'',
                    airCompressorUnLoadPressureMeasured:'',
                    airCompressorRecieverSizeRated:'',
                    airCompressorRecieverSizeMeasured:'',
                    airCompressorPipeVolumeRated:'',
                    airCompressorPipeVolumeMeasured:'',
                    airCompressorInitialPressureRated:'',
                    airCompressorInitialPressureMeasured:'',
                    airCompressorFinalPressureRated:'',
                    airCompressorFinalPressureMeasured:'',
                    airCompressorTimeToReachFinalPressureRated:'',
                    airCompressorTimeToReachFinalPressureMeasured:'',
                    airCompressorTemperatureRated:'',
                    airCompressorTemperatureMeasured:'',
                    airCompressorCompressorSECRated:'',
                    airCompressorCompressorSECMeasured:'',
                    airCompressorDryerTypeRated:'',
                    airCompressorDryerTypeMeasured:'',
                    airCompressorDryerMakeModelRated:'',
                    airCompressorDryerMakeModelMeasured:'',
                    //Leakage test
                    airCompressorLoadTimeReadingOne:'',
                    airCompressorLoadTimeReadingTwo:'',
                    airCompressorLoadTimeReadingThree:'',
                    airCompressorUnLoadTimeReadingOne:'',
                    airCompressorUnLoadTimeReadingTwo:'',
                    airCompressorUnLoadTimeReadingThree:'',
                    airCompressorLeakageReadingOne:'',
                    airCompressorLeakageReadingTwo:'',
                    airCompressorLeakageReadingThree:'',
                    //checklist
                    airCompressorVFDorNot:'',
                    airCompressorVFDSetting:'',
                    airCompressorNosOfRewidingOfMotor:'',
                    airCompressorCheckRequiredpressure:'',
                    airCompressorCheckPressureDrop  :'',
                    airCompressorCheckEndUsePointPressure:'',
                    airCompressorCheckInletAirFilterDp:'',
                    airCompressorCheckLoadTime:'',
                    airCompressorCheckUnLoadTime:'',
                    airCompressorCheckLoadHours:'',
                    airCompressorCheckRunHours:'',
                    airCompressorCheckAmbientTemp:'',
                    airCompressorOperatingHours:'',
                },
                //item type Chiller
                chiller : {
                    chillerYearOfInstallationRated:'',
                    chillerYearOfInstallationMeasured:'',
                    chillerTypeOfChillerRated:'',
                    chillerTypeOfChillerMeasured:'',
                    chillerNosOfCompressorRated:'',
                    chillerNosOfCompressorMeasured:'',
                    chillerCapacityRated:'',
                    chillerCapacityMeasured:'',
                    chillerVoltageRated:'',
                    chillerVoltageMeasured:'',
                    chillerCurrentRated:'',
                    chillerCurrentMeasured:'',
                    chillerPowerFactorRated:'',
                    chillerPowerFactorMeasured:'',
                    chillerSpeedRated:'',
                    chillerSpeedMeasured:'',
                    chillerMotorPowerRated:'',
                    chillerMotorPowerMeasured:'',
                    chillerMotorEfficiencyRated:'',
                    chillerMotorEfficiencyMeasured:'',
                    chillerMotorEfficiencyClassRated:'',
                    chillerMotorEfficiencyClassMeasured:'',
                    chillerMotorFrameSizeRated:'',
                    chillerMotorFrameSizeMeasured:'',
                    chillerChillerLoadingRated:'',
                    chillerChillerLoadingMeasured:'',
                    chillerSupplyTempRated:'',
                    chillerSupplyTempMeasured:'',
                    chillerReturnTempRated:'',
                    chillerReturnTempMeasured:'',
                    chillerFlowRated:'',
                    chillerFlowMeasured:'',
                    chillerChillerSECRated:'',
                    chillerChillerSECMeasured:'',
                    chillerCondenserApprochRated:'',
                    chillerCondenserApprochMeasured:'',
                    //checklist
                    chillerVFDorNot:'',
                    chillerVFDSetting:'',
                    chillerSetTemp:'',
                    chillerCheckCondenserCondition:'',
                    chillerTakeChillerHMIData:'',
                    chillerOperatingHours:'',
                },
                //item type Motors
                motor: {
                    motorYearOfInstallationRated:'',
                    motorYearOfInstallationMeasured:'',
                    // motorNameOfEquipmentRated:'',
                    // motorNameOfEquipmentMeasured:'',
                    motorVoltageRated:'',
                    motorVoltageMeasured:'',
                    motorCurrentRated:'',
                    motorCurrentMeasured:'',
                    motorPowerFactorRated:'',
                    motorPowerFactorMeasured:'',
                    motorSpeedRated:'',
                    motorSpeedMeasured:'',
                    motorTempRated:'',
                    motorTempMeasured:'',
                    motorMotorPowerRated:'',
                    motorMotorPowerMeasured:'',
                    motorMotorEfficiencyRated:'',
                    motorMotorEfficiencyMeasured:'',
                    motorMotorEfficiencyClassRated:'',
                    motorMotorEfficiencyClassMeasured:'',
                    motorMotorFrameSizeRated:'',
                    motorMotorFrameSizeMeasured:'',
                    //checklist
                    motorVFDorNot:'',
                    motorVFDSetting:'',
                    motorCheckPerPhaseCurrent:'',
                    motorCheckPhasor:'',
                    motorNosOfRewidingOfMotor:'',
                    motorOperatingHours:'',
                },
            },

        }
    },
    methods:{
        async submit(){
            let self = this;
            // if (this.checkSeventhStep()){
                Swal.fire({
                    // title: "Are the selected product offerings applicable for drop off center: <br> West's Card Edmonton",
                    // title: `Do you want to save this data: <br> ${this.form_data.name}`,
                    title: `Do you want to save this data`,
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Yes",
                    denyButtonText: `No`,
                    icon: "question",
                }).then((result) => {
                    console.log(result)
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        // Swal.fire("Saved!", "", "success");
                        // window.location.href = `/admin/entries/10`;
                        // Submit form

                        axios
                            .post("/admin/information", this.form_data)
                            .then(function (response) {
                                console.log(response)
                                Swal.fire("Saved!", "", "success").then((result)=>{
                                    if (result.isConfirmed){
                                        if (response.status == 200){
                                            // window.location.href = `/admin/information/`;
                                            window.location.href = `/admin/project/${self.project_id}`;
                                        }
                                    }
                                });

                                // window.location.reload()
                                // window.location.href = "/admin/thirds";
                            })
                            .catch(function (err) {
                                try {
                                    self.showValidationError(err);
                                } catch (e) {
                                    self.showSomethingWrong();
                                }
                            });
                        // Swal.fire("Saved!", "", "success");
                    }else if (result.isDismissed){
                        // window.location.href = "/admin/information";
                        window.location.href = `/admin/project/${self.project_id}`;
                    }else if (result.isDenied) {
                        console.log(result.isDenied)
                        // Swal.fire("Changes are not saved", "", "info");
                    }
                });

            // }else {
            //     return;
            // }
        },
        async checkFirstStep(){
            this.v$.$touch()
            if (this.v$.form_data.itemType.$invalid) {
                this.show_error_one = true;
                return false;
            }
            this.completed_step_count = 1;
            this.form_wizard_subtitle = 'Please Continue to next'
            return true;

        },
        checkSecondStep(){
            this.v$.$touch()
            if (this.v$.form_data.grading_location.$invalid) {
                this.show_error_two = true;
                return false;
            }
            this.completed_step_count = 2;
            this.form_wizard_subtitle = 'Please Continue to next'
            return true;
        },
        checkThirdStep(){
            this.v$.$touch()
            if (this.v$.form_data.billing_address_line_one.$invalid ||
                this.v$.form_data.billing_country.$invalid ||
                this.v$.form_data.billing_province.$invalid ||
                this.v$.form_data.billing_city.$invalid ||
                this.v$.form_data.billing_postal.$invalid
                // this.v$.form_data.billing_phone.$invalid
            ) {
                this.show_error_three = true;
                return false;
            }
            this.completed_step_count = 3;
            this.form_wizard_subtitle = 'Almost Done'
            return true;
        },
        checkFourthStep(){
            this.v$.$touch()
            if (this.v$.form_data.shipping_address_line_one.$invalid ||
                this.v$.form_data.shipping_country.$invalid ||
                this.v$.form_data.shipping_province.$invalid ||
                this.v$.form_data.shipping_city.$invalid ||
                this.v$.form_data.shipping_postal.$invalid
                // this.v$.form_data.shipping_phone.$invalid
            ) {
                this.show_error_four = true;
                return false;
            }
            this.completed_step_count = 4;
            this.form_wizard_subtitle = 'Almost Done'
            return true;
        },
        checkFifthStep(){
            this.v$.$touch()
            if (this.v$.form_data.submission_date.$invalid) {
                this.show_error_five = true;
                return false;
            }else {
                return true;
            }
        },
        checkSixthStep(){
            this.v$.$touch()
            if (this.v$.form_data.shipping_method.$invalid) {
                this.show_error_six = true;
                return false;
            }else if (this.v$.form_data.pickup_location.$invalid) {
                this.show_error_seven = true;
                return false;
            }else if (this.v$.form_data.show_pickup_location.$invalid) {
                this.show_error_eight = true;
                return false;
            }else if (this.v$.form_data.third_party_drop_center.$invalid) {
                this.show_error_nine = true;
                return false;
            }else if (this.v$.form_data.customer_account_number.$invalid) {
                this.show_error_ten = true;
                return false;
            }else {
                return true;
            }
        },
        checkSeventhStep(){
            this.v$.$touch()
            if (this.v$.form_data.itemType.$invalid) {
                this.show_error_eleven = true;
                return false;
            }else if (this.v$.form_data.card_description_one.$invalid) {
                this.show_error_twelve = true;
                return false;
            }else if (this.v$.form_data.card_authenticator_name.$invalid) {
                this.show_error_twelve = true;
                return false;
            }else if (this.v$.form_data.card_authenticator_cert_no.$invalid) {
                this.show_error_twelve = true;
                return false;
            }else if (this.v$.form_data.card_estimated_value.$invalid) {
                this.show_error_twelve = true;
                return false;
            }else if (this.v$.form_data.auto_authentication_description_one.$invalid) {
                this.show_error_thirteen = true;
                return false;
            }else if (this.v$.form_data.auto_authentication_authenticator_name.$invalid) {
                this.show_error_thirteen = true;
                return false;
            }else if (this.v$.form_data.auto_authentication_authenticator_cert_no.$invalid) {
                this.show_error_thirteen = true;
                return false;
            }else if (this.v$.form_data.auto_authentication_estimated_value.$invalid) {
                this.show_error_thirteen = true;
                return false;
            }else if (this.v$.form_data.combined_service_description_one.$invalid) {
                this.show_error_fourteen = true;
                return false;
            }else if (this.v$.form_data.combined_service_authenticator_name.$invalid) {
                this.show_error_fourteen = true;
                return false;
            }else if (this.v$.form_data.combined_service_authenticator_cert_no.$invalid) {
                this.show_error_fourteen = true;
                return false;
            }else if (this.v$.form_data.combined_service_estimated_value.$invalid) {
                this.show_error_fourteen = true;
                return false;
            }else if (this.v$.form_data.reholder_certification_number.$invalid) {
                this.show_error_fifteen = true;
                return false;
            }else if (this.v$.form_data.reholder_estimated_value.$invalid) {
                this.show_error_fifteen = true;
                return false;
            }else if (this.v$.form_data.crossover_description_one.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else if (this.v$.form_data.crossover_authenticator_name.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else if (this.v$.form_data.crossover_authenticator_cert_no.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else if (this.v$.form_data.crossover_estimated_value.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else if (this.v$.form_data.crossover_minimum_grade.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else if (this.v$.form_data.crossover_item_type.$invalid) {
                this.show_error_sixteen = true;
                return false;
            }else {
                return true;
            }
        },
        sameAsBillingChanged(event){
            if (this.form_data.same_as_billing){
                this.form_data.shipping_address_line_one = this.form_data.billing_address_line_one;
                this.form_data.shipping_address_line_two = this.form_data.billing_address_line_two;
                this.form_data.shipping_country = this.form_data.billing_country;
                this.form_data.shipping_province = this.form_data.billing_province;
                this.form_data.shipping_city = this.form_data.billing_city;
                this.form_data.shipping_postal = this.form_data.billing_postal;
                this.form_data.shipping_phone = this.form_data.billing_phone;
            }else {
                this.form_data.shipping_address_line_one = '';
                this.form_data.shipping_address_line_two = '';
                this.form_data.shipping_country = '';
                this.form_data.shipping_province = '';
                this.form_data.shipping_city = ''
                this.form_data.shipping_postal = '';
                this.form_data.shipping_phone = '';
            }
        },
        handleTabChange(prevIndex, nextIndex){
            console.log('tab change called')
            console.log(prevIndex)
            console.log(nextIndex)
            let focusField = this.$refs.name;
            focusField.focus();
            switch (nextIndex) {
                case 0:
                    focusField.focus()
                    console.log('index 0')
                    console.log(focusField.value)
                    break;
                case 1:
                    focusField = this.$refs.billing_address_line_one;
                    focusField.focus();
                    console.log(focusField.value)
                    console.log('index 1')
                    break;
                case 2:
                    focusField = this.$refs.shipping_name;
                    focusField.focus();
                    console.log(focusField.value)
                    console.log('index 2')
                    break;
            }
        },
        cancel(){
            window.location.assign("/admin/information");
        },
        selectAllCats () {
            if (this.isAllSelected) {
                this.form_data.products = []
                this.isAllSelected = false
            } else {
                this.form_data.products = []
                for (let product in this.products) {
                    this.form_data.products.push(this.products[product].id)
                }
                this.isAllSelected = true
            }
        },
        select () {
            if (this.form_data.products.length !== this.products.length) {
                this.isAllSelected = false
            } else {
                this.isAllSelected = true
            }
        },
        async customerNameChangeEvent(){
            let self = this;
            console.log(this.form_data.customer)
            this.form_data.name = this.form_data.customer.name
            this.form_data.customerId = this.form_data.customer.id

            console.log(this.form_data.customerId)
            await axios
                .get(`/admin/entries/get-customer/info/${self.form_data.customerId}`)
                .then(function (res) {
                    // console.log(res)
                    self.form_data.billing_address_line_one = res.data.data.billing_address_line_one
                    self.form_data.billing_address_line_two = res.data.data.billing_address_line_two
                    self.form_data.billing_country = res.data.data.billing_country
                    self.form_data.billing_province = res.data.data.billing_province
                    self.form_data.billing_city = res.data.data.billing_city
                    self.form_data.billing_postal = res.data.data.billing_postal
                    self.form_data.billing_phone = res.data.data.billing_phone
                    // self.form_data.same_as_billing = res.data.data.same_as_billing == 0 ? false: true
                    self.form_data.shipping_name = res.data.data.shipping_name
                    self.form_data.shipping_company_name = res.data.data.shipping_company_name
                    self.form_data.shipping_address_line_one = res.data.data.shipping_address_line_one
                    self.form_data.shipping_address_line_two = res.data.data.shipping_address_line_two
                    self.form_data.shipping_country = res.data.data.shipping_country
                    self.form_data.shipping_province = res.data.data.shipping_province
                    self.form_data.shipping_city = res.data.data.shipping_city
                    self.form_data.shipping_postal = res.data.data.shipping_postal
                    self.form_data.shipping_phone = res.data.data.shipping_phone
                })
                .catch(function (err) {
                    try {
                        self.showValidationError(err);
                    } catch (e) {
                        self.showSomethingWrong();
                    }
                });

        },
        customerNameSelectEvent({id, text}){
            console.log({id, text})
        },
        itemTypeChangeEvent(){
            if (this.form_data.itemType == 'Pump'){
                this.showItemTypeCardBox=true;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
            }
            if (this.form_data.itemType == 'Fan'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=true;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
            }
            if (this.form_data.itemType == 'Air Compressor'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=true;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
            }
            if (this.form_data.itemType == 'Chiller'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=true;
                this.showItemTypeCrossoverBox=false;
            }
            if (this.form_data.itemType == 'Motors'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=true;
            }
        },
        shippingMethodsChangeEvent(){
            console.log(this.form_data.shipping_method)
            if (this.form_data.shipping_method == 'Pickup'){
                this.showPickupLocationBox=true;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.showUPSBox=false;
            }
            if (this.form_data.shipping_method == 'Show Pickup'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=true;
                this.showThirdPartyBox=false;
                this.showUPSBox=false;
            }
            if (this.form_data.shipping_method == 'Return to Third Party'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=true;
                this.showUPSBox=false;
            }
            if (this.form_data.shipping_method == 'UPS'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.showUPSBox=true;
            }
            if (this.form_data.shipping_method == 'Delivery'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.showUPSBox=false;
            }
            if (this.form_data.shipping_method == 'Canada Post'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.form_data.customer_account_number = '';
                this.showUPSBox=true;
            }
            if (this.form_data.shipping_method == 'DHL'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.form_data.customer_account_number = '';
                this.showUPSBox=true;
            }
            if (this.form_data.shipping_method == 'FedEx'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.form_data.customer_account_number = '';
                this.showUPSBox=true;
            }
            if (this.form_data.shipping_method == 'Purolator'){
                this.showPickupLocationBox=false;
                this.showShowPickupLocationBox=false;
                this.showThirdPartyBox=false;
                this.form_data.customer_account_number = '';
                this.showUPSBox=true;
            }
        },
        dummyStep(){
            return true;
        },

        // Show camera modal and open camera
        openCamera() {
            // Close other modal if open
            $('#openPopUpModal').modal('hide');

            // Show camera modal
            $('#openCameraModal').modal('show');

            // Once modal is fully visible, start the camera
            $('#openCameraModal').off('shown.bs.modal').on('shown.bs.modal', async () => {
                const constraints = { video: true };
                try {
                    this.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
                    const video = this.$refs.video;
                    if (video) {
                        video.srcObject = this.cameraStream;
                        video.play();
                    }
                } catch (error) {
                    console.error("Error accessing camera:", error);
                    alert("Could not access camera. Please allow camera permissions.");
                    $('#openCameraModal').modal('hide');
                }
            });
        },

        // Capture image from camera
        snapshot() {
            const video = this.$refs.video;
            const canvas = this.$refs.canvas;

            if (!video || !canvas) {
                console.error("Video or Canvas element not found!");
                return;
            }

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const base64Image = canvas.toDataURL('image/png');

            // Save to array (assuming you're storing in formData.images)
            this.form_data.images.push(base64Image);

            // Close camera modal
            this.closeCameraModal();
        },

        // Close camera and modal
        closeCameraModal() {
            const video = this.$refs.video;
            if (video) {
                video.pause();
                video.srcObject = null;
            }

            // Stop all video tracks
            if (this.cameraStream) {
                this.cameraStream.getTracks().forEach(track => track.stop());
                this.cameraStream = null;
            }

            $('#openCameraModal').modal('hide');
        },

        // Open file upload modal
        openPopUpModal() {
            $('#openPopUpModal').modal('show');
        },

        // Close file upload modal
        closePopUpModal() {
            $('#openPopUpModal').modal('hide');
        },

        // Upload image from file input
        uploadImage(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = () => {
                    this.form_data.images.push(reader.result);
                };
            }
            this.closePopUpModal();
        },

        // Cancel/remove image by index
        cancelImage(index) {
            this.$swal({
                title: 'Confirmation!',
                text: 'Do you want to remove this image?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.form_data.images.splice(index, 1);

                    const Toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    });

                    Toast.fire({
                        icon: 'success',
                        title: 'Removed successfully'
                    });
                }
            });
        }
    },
    mounted() {
        // Set maxDate to today's date when the component is mounted
        this.maxDate = new Date().toISOString().split("T")[0];
    },
    created() {
        this.form_data.project_id = this.project_id;
    },
    computed: {
        pumpEfficiency() {
            // Convert motor efficiency from percentage to decimal (e.g., 90% → 0.90)
            const motorEfficiencyDecimal = this.form_data.pumpMotorEfficiencyRated / 100;

            // Calculate numerator and denominator separately for clarity
            const numerator = this.form_data.pumpFlowMeasured *
                (this.form_data.pumpDischargeHeadMeasured + this.form_data.pumpSuctionHeadMeasured) *
                9.81;

            const denominator = 3600 * this.form_data.pumpMotorPowerMeasured * motorEfficiencyDecimal;

            // Avoid division by zero
            if (denominator === 0) return 0;

            // Calculate efficiency percentage
            return (numerator / denominator) * 100;
        },
        airCompressorFlow() {
            // Convert time from minutes to seconds if needed (remove if your time is already in seconds)
            const timeInSeconds = this.form_data.airCompressorTimeToReachFinalPressureMeasured * 60;

            // Avoid division by zero
            if (timeInSeconds <= 0) return 0;

            // Calculate flow using the provided formula
            return 0.987 *
                (this.form_data.airCompressorFinalPressureMeasured - this.form_data.airCompressorInitialPressureMeasured) *
                (this.form_data.airCompressorRecieverSizeMeasured + this.form_data.airCompressorPipeVolumeMeasured) /
                timeInSeconds;
        },
        compressorSEC() {
            // Convert CFM to m³/min (0.0283 conversion factor)
            const flowInM3PerMin = this.form_data.airCompressorFlowMeasured * 0.0283;

            // Avoid division by zero
            if (flowInM3PerMin <= 0) return 0;

            // Calculate SEC
            return this.form_data.airCompressorMotorPowerMeasured / flowInM3PerMin;
        },
        leakagePercentageOne() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.airCompressorLoadTimeReadingOne)
            const unload = Number(this.form_data.airCompressorUnLoadTimeReadingOne)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
        leakagePercentageTwo() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.airCompressorLoadTimeReadingTwo)
            const unload = Number(this.form_data.airCompressorUnLoadTimeReadingTwo)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
        leakagePercentageThree() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.airCompressorLoadTimeReadingThree)
            const unload = Number(this.form_data.airCompressorUnLoadTimeReadingThree)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
    },
    watch: {
        pumpEfficiency(newVal) {
            this.form_data.pumpEfficiencyMeasured = parseFloat(newVal.toFixed(2));
        },
        airCompressorFlow(newVal) {
            this.form_data.airCompressorFlowMeasured = parseFloat(newVal.toFixed(2));
        },
        compressorSEC(newVal) {
            this.form_data.airCompressorCompressorSECMeasured = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageOne(newVal) {
            this.form_data.airCompressorLeakageReadingOne = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageTwo(newVal) {
            this.form_data.airCompressorLeakageReadingTwo = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageThree(newVal) {
            this.form_data.airCompressorLeakageReadingThree = parseFloat(newVal.toFixed(2));
        },
        immediate: true // To set initial value
    },

    validations: {
        form_data: {
            itemType:{
                required,
            },
            //item type card
            // card_description_one:{
            //     required: requiredIf(function () {
            //         return this.showItemTypeCardBox // return true if this field is required
            //     }),
            // },
            // card_authenticator_name:{
            //     required: requiredIf(function () {
            //         return this.form_data.card_autographed;// return true if this field is required
            //     }),
            // },
        }
    }

}
</script>

<style scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
.shipping_address_card{
    background: #eeeeee;
}
#images img {
    border-radius: 5px;
}
.ïc--close {
    background-color: rgb(47, 47, 47, 0.77);
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    line-height: 36px;
    text-align: center;
    font-size: 15px;
    color: red;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
