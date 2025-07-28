<template>
    <div class="card p-4">
        <h4 class="mb-4">My Performance</h4>

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
            <canvas v-if="chartData" ref="userChart"></canvas>
            <p v-else>Select a project to view user data entry chart.</p>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js";

export default {
    name: "AuthUserProjectContributionLineChart",
    data() {
        return {
            selectedProject: "",
            projects: [],
            chart: null,
            chartData: null,
            totalEntries: 0,
            loading: false,
            colors: [
                "#00C49F", "#FF6B6B", "#FFA07A", "#6A5ACD", "#40E0D0",
                "#FFB347", "#87CEFA", "#FF69B4", "#8FBC8F", "#CD5C5C",
                "#FFD700", "#6495ED", "#20B2AA", "#9370DB", "#F08080",
                "#48D1CC", "#FF8C00", "#7B68EE", "#00FA9A", "#FF6347"
            ],
        };
    },
    mounted() {
        this.fetchProjects();
        this.fetchChartData(); // load all data by default
    },
    methods: {
        fetchProjects() {
            axios.get("/admin/project/all-projects")
                .then((res) => {
                    this.projects = res.data;
                })
                .catch((error) => {
                    console.error("Error fetching projects:", error);
                });
        },
        async fetchChartData() {
            this.loading = true;
            try {
                const response = await axios.get("/user/project/user-contributions", {
                    params: {
                        project_id: this.selectedProject
                    }
                });

                // response should contain chart data and total entries
                this.chartData = response.data.chartData || null;
                this.totalEntries = response.data.totalEntries || 0;

                if (this.chartData && this.chartData.labels && this.chartData.datasets) {
                    this.$nextTick(() => {
                        this.renderChart();
                    });
                } else {
                    this.destroyChart();
                }
            } catch (error) {
                console.error("Error fetching chart data:", error);
                this.destroyChart();
            } finally {
                this.loading = false;
            }
        },
        renderChart() {
            const ctx = this.$refs.userChart;

            this.destroyChart();

            this.chart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: this.chartData.labels,
                    datasets: this.chartData.datasets.map((dataset, i) => ({
                        ...dataset,
                        borderColor: this.colors[i % this.colors.length],
                        fill: false,
                        lineTension: 0.1,
                    })),
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Daily Data Entry (Last 3 Months)",
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
                            scaleLabel: {
                                display: true,
                                labelString: "Date",
                            },
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Entries",
                            },
                            ticks: {
                                beginAtZero: true,
                                precision: 0,
                            },
                        }],
                    },
                },
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
