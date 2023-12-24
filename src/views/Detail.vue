<template>



    <div class="flag" v-if="country">
      <h1>{{ country.name.common }}</h1>
      <div>
        <img :src="country.flags.png" alt="Drapeau">
      </div>
      <div>
        <p><strong>Capitale:</strong> {{ country.capital[0] || 'N/A' }}</p>
        <p><strong>Population:</strong> {{ country.population || 'N/A' }}</p>

      </div>
      <router-link to="/paysList">Retour à la liste des drapeaux</router-link>
    </div>
    <div v-else>
      Chargement en cours...
    </div>


</template>


<script>
export default {
  data() {
    return {
      country: null,
    };
  },
  mounted() {
    const countryId = this.$route.params.id;
    this.fetchCountryDetails(countryId);
  },
  methods: {
    async fetchCountryDetails(countryId) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryId}`);
        const data = await response.json();
        this.country = data[0];
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du pays', error);
      }
    },
  },
};
</script>

<style>

.flag{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
}
</style>
