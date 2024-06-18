<script setup>
import { ref, computed } from "vue";

const name = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const postalCode = ref("");

const isValidName = computed(() => /^[A-Za-z]+$/.test(name.value));
const isValidLastName = computed(() => /^[A-Za-z]+$/.test(lastName.value));
const isValidEmail = computed(() =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)
);
const isValidPhone = computed(() => /^[0-9]{10}$/.test(phone.value));
const isValidPostalCode = computed(() => /^[0-9]{5}$/.test(postalCode.value));
</script>

<template>
  <div class="form-step">
    <p class="steps current-step">1</p>
    <div class="line current-line"></div>
    <p class="steps">2</p>
    <div class="line"></div>
    <p class="steps">3</p>
    <div class="line"></div>
    <p class="steps">4</p>
  </div>
  <div>
    <h1>Personal informations</h1>

    <form>
      <div class="form-element">
        <input id="name" type="text" v-model="name" placeholder="Name" />
        <span v-if="!isValidName">Name must contain only letters.</span>
      </div>
      <div class="form-element">
        <input
          id="lastName"
          type="text"
          v-model="lastName"
          placeholder="Last Name"
        />
        <span v-if="!isValidLastName"
          >Last name must contain only letters.</span
        >
      </div>
      <div class="form-element">
        <input id="email" type="email" v-model="email" placeholder="Email" />
        <span v-if="!isValidEmail"
          >Email must be valid (name@domaine.com).</span
        >
      </div>
      <div class="form-element">
        <input id="phone" type="tel" v-model="phone" placeholder="Phone" />
        <span v-if="!isValidPhone"
          >Phone number must be valid (XXXXXXXXXX).</span
        >
      </div>
      <div class="form-element">
        <input
          id="postalCode"
          type="text"
          v-model="postalCode"
          placeholder="Postal code"
        />
        <span v-if="!isValidPostalCode">Postal code must valid.</span>
      </div>
      <router-link
        to="/event-choice"
        v-if="
          isValidName &&
          isValidLastName &&
          isValidEmail &&
          isValidPhone &&
          isValidPostalCode
        "
        type="submit"
      >
        Continue
      </router-link>
    </form>
  </div>
</template>
