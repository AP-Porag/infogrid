<template>
    <div class="mt-4">
        <div class="card">
            <div class="card-body">
                <h3 class="mb-4">User Contributions by Project</h3>
                <div class="row">
                    <div class="col-md-7">
                        <label for="project" class="form-label">Total Projects: {{ projects.length }}</label>
                    </div>
                    <div class="col-md-5">
                        <!-- Project Selector -->
                        <div class="mb-4">
                            <label for="project" class="form-label">Select Project</label>
                            <select
                                id="project"
                                class="form-select"
                                v-model="selectedProjectId"
                                @change="fetchContributions"
                            >
                                <option value="">-- All Projects --</option>
                                <option v-for="project in projects" :key="project.id" :value="project.id">
                                    {{ project.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Progress Bars -->
                <div v-if="loading">
                    <div class="progress mb-2" v-for="n in 3" :key="n">
                        <div class="progress-bar progress-placeholder" style="width: 100%; height: 24px;"></div>
                    </div>
                </div>

                <div v-else-if="contributions.length > 0">
                    <p>Total Records Collected: <strong>{{ totalRecords }}</strong></p>

                    <div v-for="user in contributions" :key="user.id" class="mb-3">
                        <div class="d-flex justify-content-between">
                            <strong>{{ user.first_name }} {{ user.last_name }}</strong>
                            <span>
                {{ user.contribution_count }} entries ({{ user.percentage }}%)
              </span>
                        </div>
                        <div class="progress">
                            <div
                                class="progress-bar animated-progress-bar"
                                role="progressbar"
                                :style="{
                  width: user.percentage + '%',
                  backgroundColor: user.barColor
                }"
                                :aria-valuenow="user.percentage"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {{ user.percentage }}%
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <p>No contributions found.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectContribution",
    data() {
        return {
            projects: [],
            selectedProjectId: "", // '' means show all projects
            contributions: [],
            totalRecords: 0,
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
        this.fetchContributions(); // fetch all on load
    },
    methods: {
        async fetchProjects() {
            try {
                const response = await axios.get("/admin/project/all-projects");
                this.projects = response.data;
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        },
        async fetchContributions() {
            this.loading = true;
            try {
                const url = this.selectedProjectId
                    ? `/admin/project/${this.selectedProjectId}/contributions`
                    : `/admin/project/contributions/all`;

                const response = await axios.get(url);

                this.contributions = response.data.users.map((user, index) => {
                    const colorIndex = index % this.colors.length;
                    return {
                        ...user,
                        barColor: this.colors[colorIndex],
                    };
                });
                this.totalRecords = response.data.totalRecords;
            } catch (error) {
                console.error("Error fetching contributions:", error);
            } finally {
                this.loading = false;
            }
        },
    },
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
