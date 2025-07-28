<template>
    <div class="card p-4">
        <h4 class="mb-4">Daily Data Entry</h4>

        <div class="row">
            <div class="col-md-7">
                <label for="project" class="form-label">Total Entries: {{ totalEntries }}</label>
            </div>
            <div class="col-md-5">
                <div class="form-group mt-3 mb-4">
                    <label>Select Project</label>
                    <select class="form-control" v-model="selectedProject" @change="fetchChartData">
                        <option value="">-- All Projects --</option>
                        <option v-for="project in projects" :value="project.id" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="relative" style="height: 400px;">
<!--            <canvas v-if="chartData" ref="userChart"></canvas>-->
            <canvas v-if="chartData" ref="userChart" width="100%" height="400px"></canvas>
            <p v-else>Select a project to view user data entry chart.</p>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: "UserProjectContributionLineChart",
    data() {
        return {
            selectedProject: "",
            projects: [],
            chart: null,
            chartData: null,
            totalEntries: 0
        };
    },
    mounted() {
        this.fetchProjects();
        this.fetchChartData(); // load all project data by default
    },
    methods: {
        fetchProjects() {
            axios.get("/admin/project/all-projects").then((res) => {
                this.projects = res.data;
            });
        },
        fetchChartData() {
            axios
                .get("/admin/project/user-daily-contributions", {
                    params: { project_id: this.selectedProject },
                })
                .then((res) => {
                    this.chartData = res.data;
                    this.totalEntries = res.data.totalEntries;
                    this.$nextTick(() => {
                        this.renderChart();
                    });
                });
        },
        renderChart() {
            const ctx = this.$refs.userChart;

            this.destroyChart();

            this.chart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: this.chartData.labels,
                    datasets: this.chartData.datasets,
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // << important line
                    title: {
                        display: true,
                        text: "User-wise Daily Data Entry (Last 3 Months)",
                        fontSize: 18,
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true,
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: { display: true, labelString: "Date" }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: { display: true, labelString: "Entries" }
                        }],
                    },
                }
            });
        },
        destroyChart() {
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }
        },
    },
};
</script>

