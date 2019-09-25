<template>
  <v-container fill-height>
    <v-layout column justify-center align-center>
      <v-card :width="$vuetify.breakpoint.mdAndUp ? '70%' : '95%'" height="550">
        <v-card-text>
          <v-text-field
            v-model="search"
            outlined
            :append-icon="search.length > 0 ? 'mdi-close': ''"
            @click:append="onClear"
            :loading="loading"
            label="Busca"
            placeholder="Procurar repositório..."
          />

          <initial-content v-if="repos.length === 0 && search.length < 3" />

          <searching-content v-if="loading" />

          <div
            :class="{'cards-container': repos.length >= 3}"
            v-if="repos.length > 0 && !loading"
          >
            <repository-card v-for="repo in repos" :key="repo.id" :repo="repo" />
          </div>

          <not-found v-else-if="repos.length === 0 && search.length > 3 && !loading" />

        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import githubService from '@/services/github-service';
import InitialContent from '@/components/InitialContent.vue';
import NotFound from '@/components/NotFound.vue';
import RepositoryCard from '@/components/RepositoryCard.vue';
import SearchingContent from '@/components/SearchingContent.vue';

export default {
  name: 'Home',
  components: {
    InitialContent,
    NotFound,
    RepositoryCard,
    SearchingContent,
  },
  data() {
    return {
      loading: false,
      timeout: null,
      selectedRepo: {},
      search: '',
    };
  },
  methods: {
    searchRepos(query) {
      this.loading = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        githubService.search(query)
          .then(({ data }) => {
            this.setRepos(data.items);
          })
          .catch((err) => {
            this.setSnackbar({
              show: true,
              message: err.response.data.message || 'Erro ao buscar repositório',
              color: 'red darken-1',
              bottom: true,
              icon: 'la-warning',
            });
          })
          .finally(() => {
            this.loading = false;
          });
      }, 500);
    },
    onClear() {
      this.search = '';
    },
    ...mapActions('base', ['setSnackbar']),
    ...mapActions('github', ['setRepos']),
  },
  computed: {
    ...mapGetters('github', ['repos']),
  },
  watch: {
    search(val) {
      if (val.length >= 3) {
        this.searchRepos(val);
      }
    },
  },
};
</script>

<style>
  .cards-container {
    overflow-y: scroll;
    max-height: 420px;
  }
</style>
