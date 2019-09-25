<template>
  <v-container class="searching-content" fill-height>
    <v-layout column align-center justify-center>
      <v-progress-circular
        size="56"
        indeterminate
      />
      <span class="headline mt-3 text-center">Buscando repositórios...</span>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SearchingContent',
};
</script>

<style>
  .searching-content {
    height: 430px;
  }
</style>
