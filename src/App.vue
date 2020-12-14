<template>
  <main id="app">
    <div class="container">
      <div class="row">
        <div class="column column-first">
          <signature-fields :signature-data="signatureData" />
        </div>
        <div class="column column-second">
          <signature-card :signature-data="signatureData" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SignatureCard from './components/SignatureCard.vue';
import SignatureFields from './components/SignatureFields.vue';

export default {
  name: 'App',
  components: {
    SignatureCard,
    SignatureFields
  },
  computed: {
    signatureData() {
      return this.$store.state.appData;
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  padding-top: var(--space-12);
}

.column {
  &-first {
    flex: 0 0 100%;

    @media (--viewport-md) {
      flex: 0 0 40%;
    }
  }

  &-second {
    flex: 0 0 100%;

    @media (--viewport-md) {
      flex: 0 0 60%;
    }
  }
}
</style>
