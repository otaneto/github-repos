<template>
  <v-container
    class="initial-content"
    fill-height
  >
    <v-layout
      column
      align-center
      justify-center
    >
      <img
        width="200" src="@/assets/images/octocat.png"
        alt="Logo Github"
      />
      <span class="mt-3 headline text-center">
        Busque seus repositórios favoritos do Github digitando o nome no campo acima.
      </span>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'InitialContent',
};
</script>

<style>
  .initial-content {
    height: 430px;
  }
</style>
