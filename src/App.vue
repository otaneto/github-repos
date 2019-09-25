<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-layout :justify-center="$vuetify.breakpoint.smAndDown" align-center>
        <img
          class="mr-3"
          src="@/assets/images/github-logo.svg"
          alt="Github Logo"
          width="32"
        />
        <span class="text-capitalize title">Github Repos</span>
      </v-layout>
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
