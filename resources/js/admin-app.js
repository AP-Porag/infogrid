require("./bootstrap");
window.Vue = require("vue").default;

import Vuelidate from "vuelidate";
// import Select2 from "v-select2-component";
import VueSweetalert2 from "vue-sweetalert2";
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import 'vue-phone-number-input/dist/vue-phone-number-input.css';


Vue.use(Vuelidate);
// Vue.component("Select2", Select2);
Vue.use(VueSweetalert2);
Vue.use(VueFormWizard)


Vue.component("example-component", () =>
    import("./components/ExampleComponent.vue")
);
Vue.component("create-information", () =>
    import("./components/CreateInformation.vue")
);

Vue.component("edit-information", () =>
    import("./components/EditInformation.vue")
);
Vue.component("project-contribution", () =>
    import("./components/ProjectContribution.vue")
);
Vue.component("user-contribution", () =>
    import("./components/UserContribution.vue")
);

Vue.component("user-project-contribution-line-chart", () =>
    import("./components/UserProjectContributionLineChart.vue")
);

Vue.component("auth-user-project-contribution-line-chart", () =>
    import("./components/AuthUserProjectContributionLineChart.vue")
);


// Global mixin
Vue.mixin({
    methods: {
        showValidationError(err) {
            let error_string = '<div class="error-sa-v text-left">';
            for (const [key, value] of Object.entries(
                err.response.data.errors
            )) {
                error_string = error_string + value[0] + "<br>";

                if (value[1] != "undefined" && value[1] != undefined) {
                    error_string = error_string + value[1] + "<br>";
                }
            }
            error_string = error_string + "<div>";

            Vue.swal({
                icon: "error",
                html: error_string,
            });
        },
        showSomethingWrong() {
            let timerInterval;
            Vue.swal({
                icon: "error",
                html: "<span>Something is wrong!</span>" + "<br>",
                showConfirmButton: true,
                timer: 2000,
                willClose: () => {
                    clearInterval(timerInterval);
                },
            });
        },
    },
});

const app = new Vue({
    el: "#app",
});
