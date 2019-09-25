<template>
  <v-container
    class="not-found-content"
    fill-height
  >
    <v-layout
      column
      align-center
      justify-center
    >
      <img
        width="180" src="@/assets/images/octocat-not-found.jpg"
        alt="Logo Github"
      />
      <span class="mt-3 headline text-center">
        Não foram encontrados repositórios com o termo buscado!
      </span>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'NotFound',
  }
</script>

<style>
  .not-found-content {
    height: 430px;
  }
</style>