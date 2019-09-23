<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title class="headline text-uppercase">
        <img width="32" src="@/assets/images/github-logo.svg" alt="Github Logo" />
        <v-spacer />
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
