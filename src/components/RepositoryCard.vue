<template>
  <v-card elevation="0" round>
    <v-card-text>
      <!-- Main Info -->
      <v-layout align-center>
        <v-avatar @click="showOwner" class="mr-3 clickable">
          <img
            :title="repo.owner.login"
            :src="repo.owner.avatar_url"
            alt="Owner Avatar"
          />
        </v-avatar>

        <v-layout column>
          <v-layout>
            <a
              :class="{'title': $vuetify.breakpoint.mdAndUp, 'repo-name': true}"
              :href="repo.html_url"
            >
              {{ repo.full_name }}
            </a>
            <v-spacer />
            <span v-if="repo.language && $vuetify.breakpoint.smAndUp" class="ml-5">
              <v-icon :color="languageColor" size="12">mdi-circle</v-icon>
              {{ repo.language }}
            </span>
            <span v-if="$vuetify.breakpoint.smAndUp" class="ml-3">
              <v-icon size="12">mdi-star</v-icon>
              {{ repo.stargazers_count }}
            </span>
          </v-layout>
          <span
            class="grey--text text-truncate repo-description"
            :title="repo.description"
          >
            {{ repo.description }}
          </span>
        </v-layout>
      </v-layout>

      <!-- Details -->
      <v-layout column v-if="$vuetify.breakpoint.mdAndUp">
        <v-layout :column="$vuetify.breakpoint.smAndDown" class="mt-3">
          <span v-if="repo.license" class="mr-4">{{ repo.license.name }}</span>
          <span class="mr-4">Updated {{ updatedAt }}</span>
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import githubColors from 'github-colors';
import { formatDistance } from 'date-fns';

export default {
  name: 'RepositoryCard',
  props: {
    repo: {
      required: true,
      type: Object,
      default: () => {},
    },
  },
  computed: {
    languageColor() {
      return githubColors.get(this.repo.language) ? githubColors.get(this.repo.language).color : '';
    },
    updatedAt() {
      return formatDistance(new Date(this.repo.updated_at), new Date());
    },
  },
  methods: {
    formatDistance,
    showOwner() {
      window.open(this.repo.owner.html_url);
    },
  },
};
</script>

<style>
  .repo-name {
    text-decoration: unset;
  }
  .repo-description {
    width: 75%;
  }
</style>
