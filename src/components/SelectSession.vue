<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import activitiesData from "../../public/data_activities.json";

const route = useRoute();
const activities = ref(activitiesData);
const selectedActivityName = ref(route.query.activity);
const selectedCategory = ref(route.query.category);

// Computed property to filter sessions based on the selected activity and age category
const filteredSessions = computed(() => {
  const activity = activities.value.find(
    (act) => act.name === selectedActivityName.value
  );
  if (!activity) return [];

  return activity.sessions.filter(
    (session) => session.categories === selectedCategory.value
  );
});
const isLoading = ref(true);
const error = ref(null);

async function fetchSessions() {
  try {
    const response = await fetch(activitiesData);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    filteredSessions.value = data.sessions; // Adjust according to your data structure
    selectedActivityName.value = data.activityName; // Adjust according to your data structure
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchSessions();
});
</script>

<template>
  <div class="form-step">
    <p class="steps done-step">1</p>
    <div class="line done-line"></div>
    <p class="steps done-step">2</p>
    <div class="line done-line"></div>
    <p class="steps current-step">3</p>
    <div class="line current-line"></div>
    <p class="steps">4</p>
  </div>
  <div>
    <h1>Select a session for {{ selectedActivityName }}</h1>
    <div v-if="filteredSessions.length > 0">
      <div
        v-for="session in filteredSessions"
        :key="session.date"
        class="ticket"
      >
        <p>Date: {{ session.date }}</p>
        <p>Time: {{ session.start_at }} - {{ session.end_at }}</p>
        <p>Option: {{ session.option }}</p>
        <p>Category: {{ session.categories }}</p>
        <p>Registered: {{ session.registered }}</p>
        <p>Places Available: {{ session.available_places }}</p>
      </div>
    </div>
    <div v-else>
      <p>No sessions available for the selected activity and category.</p>
    </div>
  </div>
</template>
