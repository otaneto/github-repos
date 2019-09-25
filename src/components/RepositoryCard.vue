<template>
  <v-card elevation="0" round>
    <v-card-text>
      <!-- Main Info -->
      <v-layout>
        <a class="title repo-name" href="http://github.com">
          repo/user
        </a>
        <v-spacer />
        <span class="ml-5">
          <v-icon size="12">mdi-circle</v-icon>
          Language
        </span>
        <span class="ml-3">
          <v-icon size="12">mdi-star</v-icon>
          122k
        </span>
      </v-layout>

      <!-- Secondary Info -->
      <v-layout column>
        <!-- Description -->
        <span class="grey--text">
          A declarative, efficient, and flexible JavaScript library for building user interfaces.
        </span>
        <!-- Topics -->
        <v-layout class="mt-3">
          <v-btn
            class="ml-0 mr-2 text-lowercase blue--text text--darken-2 elevation-0"
            small
            color="blue lighten-5"
          >
            webpack
          </v-btn>
          <v-btn
            class="ml-0 mr-2 text-lowercase blue--text text--darken-2 elevation-0"
            small
            color="blue lighten-5"
          >
            javascript
          </v-btn>
        </v-layout>
        <!-- Details -->
        <v-layout class="mt-3">
          <span class="mr-4">MIT License</span>
          <span class="mr-4">MIT License</span>
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'RepositoryCard',
};
</script>

<style>
  .repo-name {
    text-decoration: unset;
  }
</style>
