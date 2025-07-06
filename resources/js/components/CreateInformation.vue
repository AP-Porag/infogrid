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
                        <div class="col-md-12" v-if="showItemTypeCardBox || showItemTypeAutoAthenticationBox || showItemTypeCombinedServiceBox || showItemTypeReholderBox || showItemTypeCrossoverBox || showItemTypeBoilerBox || showItemTypeCoolingTowerBox || showItemTypeAHUBox">
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.pump.pumpYearOfInstallationRated"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpFlowRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpFlowMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpFlowUnit"
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
                                                    Head
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
                                                            v-model.trim="form_data.pump.pumpHeadRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpHeadMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpVoltageRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpVoltageMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpCurrentRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpCurrentMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpPowerFactorRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpPowerFactorMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpMotorPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpMotorPowerMeasured"
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
                                                    Frequency
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
                                                            v-model.trim="form_data.pump.pumpFrequencyRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpFrequencyMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Hz</span>
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
                                                            v-model.trim="form_data.pump.pumpSpeedRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpSpeedMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpMotorEfficiencyRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                                v-model.trim="form_data.pump.pumpMotorEfficiencyClassRated"
                                                        >
                                                            <option value="not_available">Not Available</option>
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpMotorFrameSizeRated"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpInsulationClassRated"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpSuctionHeadMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpDischargeHeadMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.pump.pumpEfficiencyRated"
                                                        />
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
                                                            v-model.trim="form_data.pump.pumpEfficiencyMeasured"
                                                            readonly
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.fan.fanYearOfInstallationRated"
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
<!--                                                        v-model.trim="form_data.fan.fanYearOfInstallationMeasured"-->
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanFlowRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanFlowMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanFlowUnit"
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
                                                    Head
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
                                                            v-model.trim="form_data.fan.fanHeadRated"
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
<!--                                                            v-model.trim="form_data.fan.fanHeadMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanVoltageRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanVoltageMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanCurrentRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanCurrentMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanPowerFactorRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanPowerFactorMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanMotorPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanMotorPowerMeasured"
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
                                                    Frequency
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
                                                            v-model.trim="form_data.fan.fanFrequencyRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanFrequencyMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Hz</span>
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
                                                            v-model.trim="form_data.fan.fanSpeedRated"
                                                        />
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
                                                            v-model.trim="form_data.fan.fanSpeedMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanMotorEfficiencyRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
<!--                                                            v-model.trim="form_data.fan.fanMotorEfficiencyMeasured"-->
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
                                                                v-model.trim="form_data.fan.fanMotorEfficiencyClassRated"
                                                        >
                                                            <option value="not_available">Not Available</option>
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
<!--                                                                v-model.trim="form_data.fan.fanMotorEfficiencyClassMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanMotorFrameSizeRated"
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
<!--                                                            v-model.trim="form_data.fan.fanMotorFrameSizeMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanInsulationClassRated"
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
<!--                                                            v-model.trim="form_data.fan.fanInsulationClassMeasured"-->
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
<!--                                                            v-model.trim="form_data.fan.fanSuctionDuctSizeRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionDuctSizeMeasured"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionStaticPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionStaticPressureAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionStaticPressureUnit"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionVelocityPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionVelocityPressureAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanSuctionVelocityPressureUnit"
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
<!--                                                            v-model.trim="form_data.fan.fanDischargeDuctSizeRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeDuctSizeMeasured"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeStaticPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeStaticPressureAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeStaticPressureUnit"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeVelocityPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeVelocityPressureAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeVelocityPressureUnit"
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
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeVelocityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="number"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanDischargeVelocityAverage"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m/s</span>
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.fan.fanEfficiencyRated"
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
<!--                                                            v-model.trim="form_data.fan.fanEfficiencyMeasured"-->
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.compressor.airCompressorYearOfInstallationRated"
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
<!--                                                        v-model.trim="form_data.compressor.airCompressorYearOfInstallationMeasured"-->
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorFlowRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorFlowMeasured"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorFlowUnit"
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
                                                    Pressure
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
                                                            v-model.trim="form_data.compressor.airCompressorPressureRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorPressureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Bar</span>
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorVoltageRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorVoltageMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorCurrentRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorCurrentMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorPowerFactorRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorPowerFactorMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorMotorPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorMotorPowerMeasured"
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
                                                    Frequency
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
                                                            v-model.trim="form_data.compressor.airCompressorFrequencyRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorFrequencyMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Hz</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorSpeedRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorSpeedMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorMotorEfficiencyRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorMotorEfficiencyMeasured"-->
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
                                                                v-model.trim="form_data.compressor.airCompressorMotorEfficiencyClassRated"
                                                        >
                                                            <option value="not_available">Not Available</option>
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
<!--                                                                v-model.trim="form_data.compressor.airCompressorMotorEfficiencyClassMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorMotorFrameSizeRated"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorMotorFrameSizeMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorInsulationClassRated"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorInsulationClassMeasured"-->
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorLoadPressureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorLoadPressureMeasured"
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
                                                    Unload Pressure
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorUnLoadPressureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorUnLoadPressureMeasured"
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
                                                    Receiver Size
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorRecieverSizeRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorRecieverSizeMeasured"
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
                                                <!--                                                            v-model.trim="form_data.compressor.airCompressorRecieverSizeRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorPipeVolumeMeasured"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorInitialPressureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorInitialPressureMeasured"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorFinalPressureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorFinalPressureMeasured"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorTimeToReachFinalPressureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorTimeToReachFinalPressureMeasured"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorTemperatureRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorTemperatureMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.compressor.airCompressorCompressorSECRated"
                                                        />
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
                                                            v-model.trim="form_data.compressor.airCompressorCompressorSECMeasured"
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
                                                            v-model.trim="form_data.compressor.airCompressorDryerTypeRated"
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
<!--                                                            v-model.trim="form_data.compressor.airCompressorCompressorSECMeasured"-->
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
                                                            v-model.trim="form_data.compressor.airCompressorDryerMakeModelRated"
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
                                                <!--                                                            v-model.trim="form_data.compressor.airCompressorCompressorSECMeasured"-->
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
                                                            v-model.trim="form_data.compressor.airCompressorLoadTimeReadingOne"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorLoadTimeReadingTwo"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorLoadTimeReadingThree"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorUnLoadTimeReadingOne"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorUnLoadTimeReadingTwo"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorUnLoadTimeReadingThree"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Second</span>
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
                                                            v-model.trim="form_data.compressor.airCompressorLeakageReadingOne"
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
                                                            v-model.trim="form_data.compressor.airCompressorLeakageReadingTwo"
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
                                                            v-model.trim="form_data.compressor.airCompressorLeakageReadingThree"
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.chiller.chillerYearOfInstallationRated"
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
<!--                                                        v-model.trim="form_data.chiller.chillerYearOfInstallationMeasured"-->
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.chiller.chillerTypeOfChillerRated"
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
                                                <!--                                                        v-model.trim="form_data.chiller.chillerYearOfInstallationMeasured"-->
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
                                                        v-model.trim="form_data.chiller.chillerNosOfCompressorRated"
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
                                                                                                        v-model.trim="form_data.chiller.chillerNosOfCompressorMeasured"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerCapacityRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerCapacityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerCapacityUnit"
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
                                                    Voltage
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
                                                            v-model.trim="form_data.chiller.chillerVoltageRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerVoltageMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerCurrentRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerCurrentMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerPowerFactorRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerPowerFactorMeasured"
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
                                                    Frequency
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
                                                            v-model.trim="form_data.chiller.chillerFrequencyRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerFrequencyMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Hz</span>
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
                                                            v-model.trim="form_data.chiller.chillerSpeedRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerSpeedMeasured"
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
                                                    Motor power
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
                                                            v-model.trim="form_data.chiller.chillerMotorPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerMotorPowerMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerMotorEfficiencyRated"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
<!--                                                            v-model.trim="form_data.chiller.chillerMotorEfficiencyMeasured"-->
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
                                                                v-model.trim="form_data.chiller.chillerMotorEfficiencyClassRated"
                                                        >
                                                            <option value="not_available">Not Available</option>
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
<!--                                                                v-model.trim="form_data.chiller.chillerMotorEfficiencyClassMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerMotorFrameSizeRated"
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
<!--                                                            v-model.trim="form_data.chiller.chillerMotorFrameSizeMeasured"-->
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
<!--                                                            v-model.trim="form_data.chiller.chillerChillerLoadingRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                                                                <div class="col-md-6">
                                                                                                    <label class="form-label w-100">
                                                                                                        Measured Parameter
                                                                                                    </label>
                                                                                                    <div class="d-flex justify-content-between">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            class="form-control"
                                                                                                            placeholder=""
                                                                                                            v-model.trim="form_data.chiller.chillerChillerLoadingMeasured"
                                                                                                        />
                                                                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
<!--                                                            v-model.trim="form_data.chiller.chillerSupplyTempRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerSupplyTempMeasured"
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
<!--                                                            v-model.trim="form_data.chiller.chillerReturnTempRated"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerReturnTempMeasured"
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
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerFlowRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerFlowMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Measured Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerFlowMeasuredAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.chiller.chillerFlowUnit"
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
                                                    Chiller SEC
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
                                                            v-model.trim="form_data.chiller.chillerChillerSECRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerChillerSECMeasured"
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
                                                    Condenser Approach
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
                                                            v-model.trim="form_data.chiller.chillerCondenserApprochRated"
                                                        />
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
                                                            v-model.trim="form_data.chiller.chillerCondenserApprochMeasured"
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
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.motor.motorYearOfInstallationRated"
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
<!--                                                        v-model.trim="form_data.motor.motorYearOfInstallationMeasured"-->
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
<!--                                                            v-model.trim="form_data.motor.motorNameOfEquipmentRated"-->
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
<!--                                                            v-model.trim="form_data.motor.motorNameOfEquipmentMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorVoltageRated"
                                                        />
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
                                                            v-model.trim="form_data.motor.motorVoltageMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorCurrentRated"
                                                        />
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
                                                            v-model.trim="form_data.motor.motorCurrentMeasured"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorPowerFactorRated"
                                                        />
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
                                                            v-model.trim="form_data.motor.motorPowerFactorMeasured"
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
                                                            type="text"
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorSpeedMeasured"
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
<!--                                                            v-model.trim="form_data.motor.motorPowerFactorRated"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorTempMeasured"
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
                                                    Motor power
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
                                                            v-model.trim="form_data.motor.motorMotorPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.motor.motorMotorPowerMeasured"
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
                                                    Frequency
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
                                                            v-model.trim="form_data.motor.motorFrequencyRated"
                                                        />
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
                                                            v-model.trim="form_data.motor.motorFrequencyMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">Hz</span>
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorMotorEfficiencyRated"
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
<!--                                                            v-model.trim="form_data.motor.motorMotorEfficiencyMeasured"-->
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
                                                                v-model.trim="form_data.motor.motorMotorEfficiencyClassRated"
                                                        >
                                                            <option value="not_available">Not Available</option>
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
<!--                                                                v-model.trim="form_data.motor.motorMotorEfficiencyClassMeasured"-->
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
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.motor.motorMotorFrameSizeRated"
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
<!--                                                            v-model.trim="form_data.motor.motorMotorFrameSizeMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Boiler-->
                        <div class="col-md-12" v-if="showItemTypeBoilerBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.boiler.boilerYearOfInstallationRated"
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
                                                    Type of boiler
                                                </label>
                                                <div class="col-md-6">
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerTypeOfBoilerRated"
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
<!--                                                            v-model.trim="form_data.pump.pumpFlowMeasured"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">m3/hr</span>-->
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
                                                    Capacity
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
                                                            v-model.trim="form_data.boiler.boilerCapacityRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerCapacityUnit"
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
<!--                                                            v-model.trim="form_data.pump.pumpHeadMeasured"-->
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
                                                    Type of fuel
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
                                                            v-model.trim="form_data.boiler.boilerTypeOfFuelRated"
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
<!--                                                            v-model.trim="form_data.pump.pumpVoltageMeasured"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">V</span>-->
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
                                                    Type of burner
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
                                                            v-model.trim="form_data.boiler.boilerTypeOfBurnerRated"
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
<!--                                                            v-model.trim="form_data.pump.pumpCurrentMeasured"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">A</span>-->
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
                                                    Average Quantity of Fuel Fired in a day
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
<!--                                                            v-model.trim="form_data.boiler.boilerAverageQuantityOfFuelFiredInADayMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAverageQuantityOfFuelFiredInADayMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAverageQuantityOfFuelFiredInADayUnit"
                                                        />
                                                    </div>
                                                </div>
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
<!--                                                    Analysis of Fuel-->
<!--                                                </label>-->
<!--&lt;!&ndash;                                                <div class="col-md-6">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <label class="form-label w-100">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Rated Parameter&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="d-flex justify-content-between">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <input&ndash;&gt;-->
<!--&lt;!&ndash;                                                            type="number"&ndash;&gt;-->
<!--&lt;!&ndash;                                                            class="form-control"&ndash;&gt;-->
<!--&lt;!&ndash;                                                            placeholder=""&ndash;&gt;-->
<!--&lt;!&ndash;                                                            v-model.trim="form_data.pump.pumpMotorPowerRated"&ndash;&gt;-->
<!--&lt;!&ndash;                                                        />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <span class="mt-2" style="margin-left: .5rem;">kW</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Measured Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="text"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.boiler.boilerAnalysisOfFuelMeasured"-->
<!--                                                        />-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                            <p>Analysis of Fuel</p>
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Ash
                                                </label>
<!--                                                <div class="col-md-6">-->
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
<!--                                                    <div class="d-flex justify-content-between">-->
<!--                                                        <input-->
<!--                                                            type="text"-->
<!--                                                            class="form-control"-->
<!--                                                            placeholder=""-->
<!--                                                            v-model.trim="form_data.boiler.pumpSpeedRated"-->
<!--                                                        />-->
<!--                                                        <span class="mt-2" style="margin-left: .5rem;">rpm</span>-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAshMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Moisture
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerMoistureMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Carbon
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerCarbonMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Hydrogen
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerHydrogenMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Nitrogen
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerNitrogenMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Oxygen
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerOxygenMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Sulphur
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerSulphurMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
<!--                                                            v-model.trim="form_data.pump.pumpEfficiencyMeasured"-->
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
                                                    Gross Calorific value of Fuel
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGrossCalorificValueOfFuelMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGrossCalorificValueOfFuelUnit"
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
                                                    Net Calorific value of Fuel
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerNetCalorificValueOfFuelMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerNetCalorificValueOfFuelUnit"
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
                                                    Flue gas Analysis CO2
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerFlueGasAnalysisCO2Measured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Flue gas Analysis CO
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerFlueGasAnalysisCOMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">ppm</span>
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
                                                    Flue gas Analysis Oxygen
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerFlueGasAnalysisOxygenMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    Flue Gas Temperature
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerFlueGasTemperatureMeasured"
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
                                                    Ambient Temperature
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAmbientTemperatureMeasured"
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
                                                    Humidity in Air / Kg of Dry Air
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerHumidityInAirKgOfDryAirMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerHumidityInAirKgOfDryAirUnit"
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
                                                    Total Surface Area of Boiler
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerTotalSurfaceAreaOfBoilerMeasured"
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
                                                    Velocity of Wind Around the Boiler
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerVelocityOfWindAroundTheBoilerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m/s</span>
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
                                                    Average Surface Temperature
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAverageSurfaceTemperatureMeasured"
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
                                                    Average Quantity of Fuel Fired per hour
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAverageQuantityOfFuelFiredPerHourMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerAverageQuantityOfFuelFiredPerHourUnit"
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
                                                    GCV of Fly-Ash
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGCVOfFlyAshMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGCVOfFlyAshUnit"
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
                                                    % of Fly-Ash / kg of Fuel
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerFlyAshKgOfFuelMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">%</span>
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
                                                    GCV of Bottom-Ash
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGCVOfBottomAshMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerGCVOfBottomAshUnit"
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
                                                    Operating Temp.
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
                                                            v-model.trim="form_data.boiler.boilerOperatingTempRated"
                                                        />
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
                                                            v-model.trim="form_data.boiler.boilerOperatingTempMeasured"
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
                                                    Operating Pressure
                                                </label>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerOperatingPressureRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerOperatingPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.boiler.boilerOperatingPressureUnit"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type Cooling Tower-->
                        <div class="col-md-12" v-if="showItemTypeCoolingTowerBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.cooling.coolingYearOfInstallationRated"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingCapacityRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingCapacityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingCapacityUnit"
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
                                                    Type of cooling tower
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
                                                            v-model.trim="form_data.cooling.coolingTypeOfCoolingTowerRated"
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
                                                    Entering Water temp.
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingEnteringWaterTempMeasured"
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
                                                    Leaving Water temp.
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingLeavingWaterTempMeasured"
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
                                                    Fan Power
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
                                                            v-model.trim="form_data.cooling.coolingFanPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.cooling.coolingFanPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">KW</span>
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
                                                    Number of cells
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
                                                            v-model.trim="form_data.cooling.coolingNumberOfCellsRated"
                                                        />
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
                                                            v-model.trim="form_data.cooling.coolingNumberOfCellsMeasured"
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
                                                    Entering air temp. (DBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingEnteringAirTempDBTMeasured"
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
                                                    Entering air temp. (WBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingEnteringAirTempWBTMeasured"
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
                                                    Leaving air temp. (DBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingLeavingAirTempDBTMeasured"
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
                                                    Leaving air temp. (WBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingLeavingAirTempWBTMeasured"
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
                                                    Flow of water
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingFlowOfWaterMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingFlowOfWaterUnit"
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
                                                    Air velocity
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingAirVelocityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingAirVelocityMeasuredAverage"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m/s</span>
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
                                                    Area of fan of CT
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.cooling.coolingAreaOfFanOfCTMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--item type AHU-->
                        <div class="col-md-12" v-if="showItemTypeAHUBox">
                            <div class="card shipping_address_card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row mb-3">
                                                <label class="form-label w-100">
                                                    Year of installation
                                                </label>
                                                <div class="col-md-6">
<!--                                                    <label class="form-label w-100">-->
<!--                                                        Rated Parameter-->
<!--                                                    </label>-->
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder=""
                                                        v-model.trim="form_data.ahu.ahuYearOfInstallationRated"
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
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuCapacityRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuCapacityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuCapacityUnit"
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
                                                    Type of AHU
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
                                                            v-model.trim="form_data.ahu.ahuTypeOfAHURated"
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
                                                    Entering Water temp.
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuEnteringWaterTempMeasured"
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
                                                    Leaving Water temp.
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuLeavingWaterTempMeasured"
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
                                                    Fan Power
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
                                                            v-model.trim="form_data.ahu.ahuFanPowerRated"
                                                        />
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
                                                            v-model.trim="form_data.ahu.ahuFanPowerMeasured"
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">KW</span>
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
                                                    Number of cells
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
                                                            v-model.trim="form_data.ahu.ahuNumberOfCellsRated"
                                                        />
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
                                                            v-model.trim="form_data.ahu.ahuNumberOfCellsMeasured"
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
                                                    Entering air temp. (DBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuEnteringAirTempDBTMeasured"
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
                                                    Entering air temp. (WBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuEnteringAirTempWBTMeasured"
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
                                                    Leaving air temp. (DBT)
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuLeavingAirTempDBTMeasured"
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
                                                    Leaving air temp. (WBT)
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
                                                            v-model.trim="form_data.ahu.ahuLeavingAirTempWBTMeasured"
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
                                                    Flow of water
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuFlowOfWaterMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuFlowOfWaterUnit"
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
                                                    Air velocity
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAirVelocityMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAirVelocityMeasuredAverage"
                                                            readonly
                                                        />
                                                        <span class="mt-2" style="margin-left: .5rem;">m/s</span>
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
                                                    Area of duct
                                                </label>
                                                <div class="col-md-6">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAirAreaOfDuctMeasured"
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
                                                    Static pressure
                                                </label>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuStaticPressureRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuStaticPressureMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuStaticPressureMeasuredAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuStaticPressureUnit"
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
                                                    AHU DP
                                                </label>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Rated Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAHUDPRated"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Measured Parameter
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAHUDPMeasured"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Average
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAHUDPMeasuredAverage"
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label class="form-label w-100">
                                                        Unit
                                                    </label>
                                                    <div class="d-flex justify-content-between">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder=""
                                                            v-model.trim="form_data.ahu.ahuAHUDPUnit"
                                                        />
                                                    </div>
                                                </div>
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
                                                        v-model.trim="form_data.pump.pumpVFDorNot"
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
                                        <div class="col-md-6" v-if="form_data.pump.pumpVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting in Hz
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pump.pumpVFDSetting"
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
                                                        v-model.trim="form_data.pump.pumpThrottling"
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
                                                        v-model.trim="form_data.pump.pumpFlowModulationRequired"
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
                                                        v-model.trim="form_data.pump.pumpParallelPumpOperation"
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
                                                    Nos. of rewinding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pump.pumpNosOfRewidingOfMotor"
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
                                                        v-model.trim="form_data.pump.pumpCheckCavitation"
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
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.pump.pumpOperatingHours"
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
                                                        v-model.trim="form_data.fan.fanVFDorNot"
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
                                        <div class="col-md-6" v-if="form_data.fan.fanVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fan.fanVFDSetting"
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
                                                    v-model.trim="form_data.fan.fanOpening"
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
                                                        v-model.trim="form_data.fan.fanFlowModulationRequired"
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
                                                        v-model.trim="form_data.fan.fanParallelFanOperation"
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
                                                    Nos. of rewinding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.fan.fanNosOfRewidingOfMotor"
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
                                                    v-model.trim="form_data.fan.fanOperatingHours"
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
                                                        v-model.trim="form_data.compressor.airCompressorVFDorNot"
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
                                        <div class="col-md-6" v-if="form_data.compressor.airCompressorVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.compressor.airCompressorVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Nos. of rewinding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.compressor.airCompressorNosOfRewidingOfMotor"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckRequiredpressure"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckPressureDrop"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckEndUsePointPressure"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckInletAirFilterDp"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckLoadTime"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckUnLoadTime"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckLoadHours"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckRunHours"
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
                                                    v-model.trim="form_data.compressor.airCompressorCheckAmbientTemp"
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
                                                    v-model.trim="form_data.compressor.airCompressorOperatingHours"
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
                                                        v-model.trim="form_data.chiller.chillerVFDorNot"
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
                                        <div class="col-md-6" v-if="form_data.chiller.chillerVFDorNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.chiller.chillerVFDSetting"
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
                                                    v-model.trim="form_data.chiller.chillerSetTemp"
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
                                                        v-model.trim="form_data.chiller.chillerCheckCondenserCondition"
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
                                                    v-model.trim="form_data.chiller.chillerOperatingHours"
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
                                                        v-model.trim="form_data.motor.motorVFDorNot"
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
                                        <div class="col-md-6" v-if="form_data.motor.motorVFDorNot === 'yes'">
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
                                                        v-model.trim="form_data.motor.motorCheckPerPhaseCurrent"
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
                                                    Check Phasor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.motor.motorCheckPhasor"
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
                                                    Nos. of rewinding of motor
<!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.motor.motorNosOfRewidingOfMotor"
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
                                                    v-model.trim="form_data.motor.motorOperatingHours"
                                                />
<!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
<!--                                                    Item type is required-->
<!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Boiler'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD on ID Fan
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerVFDOnIdFan"
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
                                        <div class="col-md-6" v-if="form_data.boiler.boilerVFDOnIdFan === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerVFDOnIdFanVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD on FD Fan
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerVFDOnFdFan"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6" v-if="form_data.boiler.boilerVFDOnFdFan === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerVFDOnFdFanVFDSetting"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Maximum temp. can sustain
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerMaximumTempCanSustain"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Alternate fuel possibility
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerAlternateFuelPossibility"
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
                                                    Blow down control
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerBlowDownControl"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Collect Feed water test report
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerCollectFeedWaterTestReport"
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
                                                    Blow down water TDS value
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerBlowDownWaterTDSvalue"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Waste heat recovery
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerWasteHeatRecovery"
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
                                                    Burner air max. temp. capacity
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerBurnerAirMaxTempCapacity"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Check steam traps
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerCheckSteamTraps"
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
                                                    Flue gas monitoring
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerFlueGasMonitoring"
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
                                                    Online monitoring & control
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.boiler.boilerOnlineMonitoringControl"
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
                                                    Water/steam Flow meter reading
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerWaterSteamFlowMeterReading"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Fuel Flow meter reading
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.boiler.boilerFuelFlowMeterReading"
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
                                                    v-model.trim="form_data.boiler.boilerOperatingHours"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>


                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'Cooling Tower'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD on fan or not
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.cooling.coolingVFDOnFanOrNot"
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
                                        <div class="col-md-6" v-if="form_data.cooling.coolingVFDOnFanOrNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.cooling.coolingVFDSettingFan"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD on pump or not
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.cooling.coolingVFDOnPumpOrNot"
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
                                        <div class="col-md-6" v-if="form_data.cooling.coolingVFDOnPumpOrNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.cooling.coolingVFDSettingPump"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Drift loss visible
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.cooling.coolingDriftLossVisible"
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
                                                    Nos. of rewinding of fan motor
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.cooling.coolingNosOfRewidingOfFanMotor"
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
                                                    v-model.trim="form_data.cooling.coolingOperatingHours"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" v-if="form_data.itemType === 'AHU'">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD on fan or not
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.ahu.ahuVFDOnFanOrNot"
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
                                        <div class="col-md-6" v-if="form_data.ahu.ahuVFDOnFanOrNot === 'yes'">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    VFD setting
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.ahu.ahuVFDSettingFan"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Damper position
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.ahu.ahuDamperPosition"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Connected with BMS
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <select class="form-select mb-text-only" aria-label="Default select example"
                                                        v-model.trim="form_data.ahu.ahuConnectedWithBMS"
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
                                                    Modulating valve is 2 way or 3 way
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.ahu.ahuModulatingValve"
                                                />
                                                <!--                                                <div class="error" v-if="v$.form_data.itemType.required.$invalid && show_error_eleven">-->
                                                <!--                                                    Item type is required-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label w-100 text-capitalize">
                                                    Set Temp.
                                                    <!--                                                    <span class="error">*</span>-->
                                                </label>
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    placeholder=""
                                                    v-model.trim="form_data.ahu.ahuSetTemp"
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
                                                    v-model.trim="form_data.ahu.ahuOperatingHours"
                                                />
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
                        <button class="btn btn-warning" @click="openCamera" type="button">
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
                        <button class="btn btn-warning" @click="switchCamera">
                            Switch Camera
                        </button>
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
            cameraStream: null,
            currentFacingMode: 'environment',// 'user' for front, 'environment' for rear
            maxDate: "",
            show_error_one: false,
            isReadonly:false,
            step_count:4,
            completed_step_count:'',
            form_wizard_subtitle:'Start here',

            showItemTypeCardBox:false,
            showItemTypeAutoAthenticationBox:false,
            showItemTypeCombinedServiceBox:false,
            showItemTypeReholderBox:false,
            showItemTypeCrossoverBox:false,
            showItemTypeBoilerBox:false,
            showItemTypeCoolingTowerBox:false,
            showItemTypeAHUBox:false,

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
                {
                    'id':6,
                    'name':'Boiler',
                },
                {
                    'id':7,
                    'name':'Cooling Tower',
                },
                {
                    'id':8,
                    'name':'AHU',
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
                    pumpFrequencyRated:'',
                    pumpFrequencyMeasured:'',
                    //checklist
                    pumpVFDorNot:'',
                    pumpVFDSetting:'',
                    pumpThrottling :'',
                    pumpFlowModulationRequired :'',
                    pumpParallelPumpOperation:'',
                    pumpNosOfRewidingOfMotor:'',
                    pumpCheckCavitation:'',
                    pumpOperatingHours:'',
                    //units
                    pumpFlowUnit: '',
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
                    fanSuctionStaticPressureAverage:'',
                    fanSuctionVelocityPressureRated:'',
                    fanSuctionVelocityPressureAverage:'',
                    fanSuctionVelocityPressureMeasured:'',
                    fanDischargeDuctSizeRated:'',
                    fanDischargeDuctSizeMeasured:'',
                    fanDischargeStaticPressureRated:'',
                    fanDischargeStaticPressureAverage:'',
                    fanDischargeStaticPressureMeasured:'',
                    fanDischargeVelocityPressureRated:'',
                    fanDischargeVelocityPressureAverage:'',
                    fanDischargeVelocityPressureMeasured:'',
                    fanDischargeVelocityRated:'',
                    fanDischargeVelocityAverage:'',
                    fanDischargeVelocityMeasured:'',
                    fanEfficiencyRated:'',
                    fanEfficiencyMeasured:'',
                    fanFrequencyRated:'',
                    fanFrequencyMeasured:'',
                    //checklist
                    fanVFDorNot:'',
                    fanVFDSetting:'',
                    fanOpening  :'',
                    fanFlowModulationRequired :'',
                    fanParallelFanOperation:'',
                    fanNosOfRewidingOfMotor:'',
                    fanOperatingHours:'',
                    //units
                    fanFlowUnit: '',
                    fanSuctionStaticPressureUnit: '',
                    fanSuctionVelocityPressureUnit: '',
                    fanDischargeStaticPressureUnit: '',
                    fanDischargeVelocityPressureUnit: '',
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
                    airCompressorFrequencyRated:'',
                    airCompressorFrequencyMeasured:'',
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
                    //units
                    airCompressorFlowUnit: '',
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
                    chillerFlowMeasuredAverage:'',
                    chillerChillerSECRated:'',
                    chillerChillerSECMeasured:'',
                    chillerCondenserApprochRated:'',
                    chillerCondenserApprochMeasured:'',
                    chillerFrequencyRated:'',
                    chillerFrequencyMeasured:'',
                    //checklist
                    chillerVFDorNot:'',
                    chillerVFDSetting:'',
                    chillerSetTemp:'',
                    chillerCheckCondenserCondition:'',
                    chillerTakeChillerHMIData:'',
                    chillerOperatingHours:'',
                    //units
                    chillerCapacityUnit: '',
                    chillerFlowUnit: '',
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
                    motorFrequencyRated:'',
                    motorFrequencyMeasured:'',
                    //checklist
                    motorVFDorNot:'',
                    motorVFDSetting:'',
                    motorCheckPerPhaseCurrent:'',
                    motorCheckPhasor:'',
                    motorNosOfRewidingOfMotor:'',
                    motorOperatingHours:'',
                },
                //item type Boiler
                boiler: {
                    boilerYearOfInstallationRated:'',
                    boilerTypeOfBoilerRated:'',
                    boilerCapacityRated:'',
                    boilerTypeOfFuelRated:'',
                    boilerTypeOfBurnerRated:'',
                    boilerAverageQuantityOfFuelFiredInADayMeasured:'',
                    boilerAnalysisOfFuelMeasured:'',
                    boilerAshMeasured:'',
                    boilerMoistureMeasured:'',
                    boilerCarbonMeasured:'',
                    boilerHydrogenMeasured:'',
                    boilerNitrogenMeasured:'',
                    boilerOxygenMeasured:'',
                    boilerSulphurMeasured:'',
                    boilerGrossCalorificValueOfFuelMeasured:'',
                    boilerNetCalorificValueOfFuelMeasured:'',
                    boilerFlueGasAnalysisCO2Measured:'',
                    boilerFlueGasAnalysisCOMeasured:'',
                    boilerFlueGasAnalysisOxygenMeasured:'',
                    boilerFlueGasTemperatureMeasured:'',
                    boilerAmbientTemperatureMeasured:'',
                    boilerHumidityInAirKgOfDryAirMeasured:'',
                    boilerTotalSurfaceAreaOfBoilerMeasured:'',
                    boilerVelocityOfWindAroundTheBoilerMeasured:'',
                    boilerAverageSurfaceTemperatureMeasured:'',
                    boilerAverageQuantityOfFuelFiredPerHourMeasured:'',
                    boilerGCVOfFlyAshMeasured:'',
                    boilerFlyAshKgOfFuelMeasured:'',
                    boilerGCVOfBottomAshMeasured:'',
                    boilerOperatingTempRated:'',
                    boilerOperatingTempMeasured:'',
                    boilerOperatingPressureRated:'',
                    boilerOperatingPressureMeasured:'',
                    //checklist
                    boilerVFDOnIdFan:'',
                    boilerVFDOnIdFanVFDSetting:'',
                    boilerVFDOnFdFan:'',
                    boilerVFDOnFdFanVFDSetting:'',
                    boilerMaximumTempCanSustain:'',
                    boilerAlternateFuelPossibility:'',
                    boilerBlowDownControl:'',
                    boilerCollectFeedWaterTestReport:'',
                    boilerBlowDownWaterTDSvalue:'',
                    boilerWasteHeatRecovery :'',
                    boilerBurnerAirMaxTempCapacity :'',
                    boilerCheckSteamTraps :'',
                    boilerFlueGasMonitoring :'',
                    boilerOnlineMonitoringControl :'',
                    boilerWaterSteamFlowMeterReading :'',
                    boilerFuelFlowMeterReading :'',
                    boilerOperatingHours :'',
                    //units
                    boilerCapacityUnit: '',
                    boilerAverageQuantityOfFuelFiredInADayUnit: '',
                    boilerGrossCalorificValueOfFuelUnit: '',
                    boilerNetCalorificValueOfFuelUnit: '',
                    boilerHumidityInAirKgOfDryAirUnit: '',
                    boilerAverageQuantityOfFuelFiredPerHourUnit: '',
                    boilerGCVOfFlyAshUnit: '',
                    boilerGCVOfBottomAshUnit: '',
                    boilerOperatingPressureUnit: '',
                },
                //item type Cooling Tower
                cooling:{
                    coolingYearOfInstallationRated:'',
                    coolingCapacityRated:'',
                    coolingCapacityMeasured:'',
                    coolingTypeOfCoolingTowerRated:'',
                    coolingEnteringWaterTempMeasured:'',
                    coolingLeavingWaterTempMeasured:'',
                    coolingFanPowerRated:'',
                    coolingFanPowerMeasured:'',
                    coolingNumberOfCellsRated:'',
                    coolingNumberOfCellsMeasured:'',
                    coolingEnteringAirTempDBTMeasured:'',
                    coolingEnteringAirTempWBTMeasured:'',
                    coolingLeavingAirTempDBTMeasured:'',
                    coolingLeavingAirTempWBTMeasured:'',
                    coolingFlowOfWaterMeasured:'',
                    coolingAirVelocityMeasured:'',
                    coolingAirVelocityMeasuredAverage:'',
                    coolingAreaOfFanOfCTMeasured:'',
                    //checklist
                    coolingVFDOnFanOrNot:'',
                    coolingVFDSettingFan:'',
                    coolingVFDSettingPump:'',
                    coolingVFDOnPumpOrNot:'',
                    coolingDriftLossVisible:'',
                    coolingNosOfRewidingOfFanMotor:'',
                    coolingOperatingHours:'',
                    //units
                    coolingCapacityUnit: '',
                    coolingFlowOfWaterUnit: '',
                },
                //item type AHU
                ahu:{
                    ahuYearOfInstallationRated:'',
                    ahuCapacityRated:'',
                    ahuCapacityMeasured:'',
                    ahuTypeOfAHURated:'',
                    ahuEnteringWaterTempMeasured:'',
                    ahuLeavingWaterTempMeasured:'',
                    ahuFanPowerRated:'',
                    ahuFanPowerMeasured:'',
                    ahuNumberOfCellsRated:'',
                    ahuNumberOfCellsMeasured:'',
                    ahuEnteringAirTempDBTMeasured:'',
                    ahuEnteringAirTempWBTMeasured:'',
                    ahuLeavingAirTempDBTMeasured:'',
                    ahuLeavingAirTempWBTMeasured:'',
                    ahuFlowOfWaterMeasured:'',
                    ahuAirVelocityMeasured:'',
                    ahuAirVelocityMeasuredAverage:'',
                    ahuAreaOfFanOfAHUMeasured:'',
                    ahuAirAreaOfDuctMeasured:'',
                    ahuStaticPressureRated:'',
                    ahuStaticPressureMeasured:'',
                    ahuStaticPressureMeasuredAverage:'',
                    ahuAHUDPRated:'',
                    ahuAHUDPMeasured:'',
                    ahuAHUDPMeasuredAverage:'',
                    //checklist
                    ahuVFDOnFanOrNot:'',
                    ahuVFDSettingFan:'',
                    ahuDamperPosition:'',
                    ahuConnectedWithBMS:'',
                    ahuModulatingValve:'',
                    ahuSetTemp:'',
                    ahuOperatingHours:'',
                    //units
                    ahuCapacityUnit: '',
                    ahuFlowOfWaterUnit: '',
                    ahuStaticPressureUnit: '',
                    ahuAHUDPUnit: '',
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
            // window.location.assign("/admin/information");
            window.location.assign(`/admin/project/${this.project_id}`);
        },
        itemTypeChangeEvent(){
            if (this.form_data.itemType == 'Pump'){
                this.showItemTypeCardBox=true;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'Fan'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=true;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'Air Compressor'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=true;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'Chiller'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=true;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'Motors'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=true;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }

            if (this.form_data.itemType == 'Boiler'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=true;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'Cooling Tower'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=true;
                this.showItemTypeAHUBox=false;
            }
            if (this.form_data.itemType == 'AHU'){
                this.showItemTypeCardBox=false;
                this.showItemTypeAutoAthenticationBox=false;
                this.showItemTypeCombinedServiceBox=false;
                this.showItemTypeReholderBox=false;
                this.showItemTypeCrossoverBox=false;
                this.showItemTypeBoilerBox=false;
                this.showItemTypeCoolingTowerBox=false;
                this.showItemTypeAHUBox=true;
            }
        },
        dummyStep(){
            return true;
        },

        // Show camera modal and open camera
        // openCamera() {
        //     // Close other modal if open
        //     $('#openPopUpModal').modal('hide');
        //
        //     // Show camera modal
        //     $('#openCameraModal').modal('show');
        //
        //     // Once modal is fully visible, start the camera
        //     $('#openCameraModal').off('shown.bs.modal').on('shown.bs.modal', async () => {
        //         const constraints = { video: true };
        //         try {
        //             this.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        //             const video = this.$refs.video;
        //             if (video) {
        //                 video.srcObject = this.cameraStream;
        //                 video.play();
        //             }
        //         } catch (error) {
        //             console.error("Error accessing camera:", error);
        //             alert("Could not access camera. Please allow camera permissions.");
        //             $('#openCameraModal').modal('hide');
        //         }
        //     });
        // },
        openCamera() {
            // Close other modal if open
            $('#openPopUpModal').modal('hide');

            // Show camera modal
            $('#openCameraModal').modal('show');

            // Once modal is fully visible, start the camera
            $('#openCameraModal').off('shown.bs.modal').on('shown.bs.modal', () => {
                this.startCamera();
            });
        },
        async startCamera() {
            // Stop existing stream
            if (this.cameraStream) {
                this.cameraStream.getTracks().forEach(track => track.stop());
            }

            const constraints = {
                video: {
                    facingMode: { exact: this.currentFacingMode }
                }
            };

            try {
                this.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
                const video = this.$refs.video;
                if (video) {
                    video.srcObject = this.cameraStream;
                    video.play();
                }
            } catch (error) {
                console.error("Error accessing camera:", error);

                // Fallback: try front camera if rear fails
                if (this.currentFacingMode === 'environment') {
                    this.currentFacingMode = 'user';
                    this.startCamera();
                } else {
                    alert("Could not access camera. Please allow camera permissions.");
                    $('#openCameraModal').modal('hide');
                }
            }
        },

        //switch camera
        switchCamera() {
            this.currentFacingMode = this.currentFacingMode === 'user' ? 'environment' : 'user';
            this.startCamera(); // restart camera with new facingMode
            console.log(this.currentFacingMode);
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
            const motorEfficiencyDecimal = this.form_data.pump.pumpMotorEfficiencyRated / 100;

            // Calculate numerator and denominator separately for clarity
            const numerator = this.form_data.pump.pumpFlowMeasured *
                (this.form_data.pump.pumpDischargeHeadMeasured + this.form_data.pump.pumpSuctionHeadMeasured) *
                9.81;

            const denominator = 3600 * this.form_data.pump.pumpMotorPowerMeasured * motorEfficiencyDecimal;

            // Avoid division by zero
            if (denominator === 0) return 0;

            // Calculate efficiency percentage
            return (numerator / denominator) * 100;
        },
        airCompressorFlow() {
            // Convert time from minutes to seconds if needed (remove if your time is already in seconds)
            const timeInSeconds = this.form_data.compressor.airCompressorTimeToReachFinalPressureMeasured * 60;

            // Avoid division by zero
            if (timeInSeconds <= 0) return 0;

            // Calculate flow using the provided formula
            return 0.987 *
                (this.form_data.compressor.airCompressorFinalPressureMeasured - this.form_data.compressor.airCompressorInitialPressureMeasured) *
                (this.form_data.compressor.airCompressorRecieverSizeMeasured + this.form_data.compressor.airCompressorPipeVolumeMeasured) /
                timeInSeconds;
        },
        compressorSEC() {
            // Convert CFM to m³/min (0.0283 conversion factor)
            const flowInM3PerMin = this.form_data.compressor.airCompressorFlowMeasured * 0.0283;

            // Avoid division by zero
            if (flowInM3PerMin <= 0) return 0;

            // Calculate SEC
            return this.form_data.compressor.airCompressorMotorPowerMeasured / flowInM3PerMin;
        },
        leakagePercentageOne() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.compressor.airCompressorLoadTimeReadingOne)
            const unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingOne)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
        leakagePercentageTwo() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.compressor.airCompressorLoadTimeReadingTwo)
            const unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingTwo)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
        leakagePercentageThree() {
            // Convert to numbers explicitly
            const load = Number(this.form_data.compressor.airCompressorLoadTimeReadingThree)
            const unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingThree)
            const total = load + unload

            if (total <= 0) return 0

            // Multiply before dividing to improve precision
            return (load * 100) / total
        },
        //counting avarage
        fanSuctionStaticPressureAverage() {
            const raw = this.form_data.fan.fanSuctionStaticPressureMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        fanSuctionVelocityPressureAverage() {
            const raw = this.form_data.fan.fanSuctionVelocityPressureMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        fanDischargeStaticPressureAverage() {
            const raw = this.form_data.fan.fanDischargeStaticPressureMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        fanDischargeVelocityPressureAverage() {
            const raw = this.form_data.fan.fanDischargeVelocityPressureMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        fanDischargeVelocityAverage() {
            const raw = this.form_data.fan.fanDischargeVelocityMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        chillerFlowMeasuredAverage() {
            const raw = this.form_data.chiller.chillerFlowMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        coolingAirVelocityMeasuredAverage() {
            const raw = this.form_data.cooling.coolingAirVelocityMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        ahuAirVelocityMeasuredAverage() {
            const raw = this.form_data.ahu.ahuAirVelocityMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        ahuStaticPressureMeasuredAverage() {
            const raw = this.form_data.ahu.ahuStaticPressureMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
        ahuAHUDPMeasuredAverage() {
            const raw = this.form_data.ahu.ahuAHUDPMeasured;

            // Clean and parse the input string to numbers
            const values = raw
                .split(',')
                .map(v => parseFloat(v.trim()))
                .filter(v => !isNaN(v));

            if (values.length === 0) return 0;

            const sum = values.reduce((a, b) => a + b, 0);
            return sum / values.length;
        },
    },
    watch: {
        pumpEfficiency(newVal) {
            this.form_data.pump.pumpEfficiencyMeasured = parseFloat(newVal.toFixed(2));
        },
        airCompressorFlow(newVal) {
            this.form_data.compressor.airCompressorFlowMeasured = parseFloat(newVal.toFixed(2));
        },
        compressorSEC(newVal) {
            this.form_data.compressor.airCompressorCompressorSECMeasured = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageOne(newVal) {
            this.form_data.compressor.airCompressorLeakageReadingOne = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageTwo(newVal) {
            this.form_data.compressor.airCompressorLeakageReadingTwo = parseFloat(newVal.toFixed(2));
        },
        leakagePercentageThree(newVal) {
            this.form_data.compressor.airCompressorLeakageReadingThree = parseFloat(newVal.toFixed(2));
        },

        //counting average
        fanSuctionStaticPressureAverage(newVal) {
            this.form_data.fan.fanSuctionStaticPressureAverage = parseFloat(newVal.toFixed(2));
        },
        fanSuctionVelocityPressureAverage(newVal) {
            this.form_data.fan.fanSuctionVelocityPressureAverage = parseFloat(newVal.toFixed(2));
        },
        fanDischargeStaticPressureAverage(newVal) {
            this.form_data.fan.fanDischargeStaticPressureAverage = parseFloat(newVal.toFixed(2));
        },
        fanDischargeVelocityPressureAverage(newVal) {
            this.form_data.fan.fanDischargeVelocityPressureAverage = parseFloat(newVal.toFixed(2));
        },
        fanDischargeVelocityAverage(newVal) {
            this.form_data.fan.fanDischargeVelocityAverage = parseFloat(newVal.toFixed(2));
        },
        chillerFlowMeasuredAverage(newVal) {
            this.form_data.chiller.chillerFlowMeasuredAverage = parseFloat(newVal.toFixed(2));
        },
        coolingAirVelocityMeasuredAverage(newVal) {
            this.form_data.cooling.coolingAirVelocityMeasuredAverage = parseFloat(newVal.toFixed(2));
        },
        ahuAirVelocityMeasuredAverage(newVal) {
            this.form_data.ahu.ahuAirVelocityMeasuredAverage = parseFloat(newVal.toFixed(2));
        },
        ahuStaticPressureMeasuredAverage(newVal) {
            this.form_data.ahu.ahuStaticPressureMeasuredAverage = parseFloat(newVal.toFixed(2));
        },
        ahuAHUDPMeasuredAverage(newVal) {
            this.form_data.ahu.ahuAHUDPMeasuredAverage = parseFloat(newVal.toFixed(2));
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
