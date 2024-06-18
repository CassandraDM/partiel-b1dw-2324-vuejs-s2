<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import activitiesData from "../../public/data_activities.json";

const activities = ref(activitiesData);
const selectedSport = ref("");
const selectedCategory = ref("");
const ageCategory = ref("");
const router = useRouter();

// Computed property to filter activities based on age category
const filteredActivities = computed(() => {
  if (!ageCategory.value) return [];
  return activities.value
    .map((activity) => {
      const filteredSessions = activity.sessions.filter(
        (session) => session.categories === ageCategory.value
      );
      return {
        ...activity,
        sessions: filteredSessions,
        availableDatesCount: filteredSessions.length,
      };
    })
    .filter((activity) => activity.sessions.length > 0);
});

// Method to update selected sport and category
function selectActivity(sport, category) {
  selectedSport.value = sport;
  selectedCategory.value = category;
}

// Method to handle form submission
function submitForm() {
  // Placeholder for form submission logic
  // This could involve emitting an event or navigating to another component
  console.log(
    "Form submitted with:",
    selectedSport.value,
    selectedCategory.value
  );
}
</script>

<template>
  <div class="form-step">
    <p class="steps done-step">1</p>
    <div class="line done-line"></div>
    <p class="steps current-step">2</p>
    <div class="line current-line"></div>
    <p class="steps">3</p>
    <div class="line"></div>
    <p class="steps">4</p>
  </div>
  <div>
    <h1>Event's choice</h1>

    <select v-model="ageCategory">
      <option value="">Select Age Category</option>
      <option value="Children">Children</option>
      <option value="Adults">Adults</option>
    </select>

    <div v-for="activity in filteredActivities" :key="activity.name">
      <h2>{{ activity.name }}</h2>
      <p>Available dates: {{ activity.availableDatesCount }}</p>
      <router-link
        :to="{
          name: 'SelectSession',
          query: { activity: activity.name, category: ageCategory.value },
        }"
      >
        Select a session
      </router-link>
    </div>
  </div>
</template>
