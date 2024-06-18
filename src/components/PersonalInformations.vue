<script setup>
import { ref, computed } from "vue";

const nom = ref("");
const prenom = ref("");
const email = ref("");
const telephone = ref("");
const codePostal = ref("");

const isValidNom = computed(() => /^[A-Za-z]+$/.test(nom.value));
const isValidPrenom = computed(() => /^[A-Za-z]+$/.test(prenom.value));
const isValidEmail = computed(() =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)
);
const isValidTelephone = computed(() => /^[0-9]{10}$/.test(telephone.value));
const isValidCodePostal = computed(() => /^[0-9]{5}$/.test(codePostal.value));
</script>

<template>
  <div class="form-step">
    <p class="steps current-step">1</p>
    <p class="steps">2</p>
    <p class="steps">3</p>
    <p class="steps">4</p>
  </div>
  <div>
    <h1>Informations Personnelles</h1>

    <form>
      <div class="form-element">
        <input id="nom" type="text" v-model="nom" placeholder="Nom" />
        <span v-if="!isValidNom">Le nom ne doit contenir que des lettres.</span>
      </div>
      <div class="form-element">
        <input id="prenom" type="text" v-model="prenom" placeholder="Prénom" />
        <span v-if="!isValidPrenom"
          >Le prénom ne doit contenir que des lettres.</span
        >
      </div>
      <div class="form-element">
        <input id="email" type="email" v-model="email" placeholder="Email" />
        <span v-if="!isValidEmail"
          >L'email doit être valide (nom@domaine.com).</span
        >
      </div>
      <div class="form-element">
        <input
          id="telephone"
          type="tel"
          v-model="telephone"
          placeholder="Téléphone"
        />
        <span v-if="!isValidTelephone"
          >Le numéro de téléphone doit être valide.</span
        >
      </div>
      <div class="form-element">
        <input
          id="codePostal"
          type="text"
          v-model="codePostal"
          placeholder="Code postal"
        />
        <span v-if="!isValidCodePostal">Le code postal doit être valide.</span>
      </div>
      <router-link
        to="/event-choice"
        v-if="
          isValidNom &&
          isValidPrenom &&
          isValidEmail &&
          isValidTelephone &&
          isValidCodePostal
        "
        type="submit"
      >
        Continuer
      </router-link>
    </form>
  </div>
</template>
