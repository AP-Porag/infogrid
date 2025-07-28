<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <h3 class="mb-4">Your Project Contributions</h3>

                <div v-if="loading">
                    <div class="progress mb-2" v-for="n in 3" :key="n">
                        <div class="progress-bar progress-placeholder" style="width: 100%; height: 24px;"></div>
                    </div>
                </div>

                <div v-else-if="projects.length > 0">
                    <div v-for="project in projects" :key="project.id" class="mb-4">
                        <div class="d-flex justify-content-between">
                            <strong>{{ project.name }}</strong>
                            <span>
                              {{ project.contribution_count }} / {{ project.total_entries }} entries ({{ project.percentage }}%)
                            </span>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar animated-progress-bar"
                                role="progressbar"
                                :style="{ width: project.percentage + '%', backgroundColor: getBarColor(project.id) }"
                                :aria-valuenow="project.percentage"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {{ project.percentage }}%
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <p>You haven't contributed to any project yet.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserContribution",
    data() {
        return {
            loading: true,
            projects: [],
            barColors: [
                '#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f',
                '#edc948', '#b07aa1', '#ff9da7', '#9c755f', '#bab0ab',
                '#003f5c', '#7a5195', '#ef5675', '#ffa600', '#58508d',
                '#bc5090', '#ff6361', '#003f5c', '#2f4b7c', '#665191'
            ]
        };
    },
    methods: {
        fetchData() {
            this.loading = true;
            axios.get('/user/project/project-contribution')
                .then(response => {
                    this.projects = response.data.projects;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.loading = false;
                });
        },
        getBarColor(id) {
            return this.barColors[id % this.barColors.length];
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<style scoped>
.progress {
    height: 24px;
}
.animated-progress-bar {
    transition: width 1s ease-in-out;
}
.progress-placeholder {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
    background-size: 400% 100%;
    animation: shimmer 1.4s ease infinite;
}
@keyframes shimmer {
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
}
</style>
