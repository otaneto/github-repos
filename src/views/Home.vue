<template>
  <v-container fill-height>
    <v-layout column justify-center align-center>
      <v-card width="50%" height="550">
        <v-card-text>
          <v-text-field
            v-model="search"
            outlined
            :append-icon="search.length > 0 ? 'mdi-close': ''"
            @click:append="onClear"
            :loading="loading"
            label="Busca"
            placeholder="Digite o nome do repositório..."
          />
          <v-container
            v-if="repos.length === 0 && search.length < 3"
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

          <searching-content v-if="loading" />

          <div
            :class="{'cards-container': repos.length >= 3}"
            v-if="repos.length > 0 && !loading"
          >
            <repository-card v-for="repo in repos" :key="repo.id" />
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
import RepositoryCard from '@/components/RepositoryCard.vue';
import NotFound from '@/components/NotFound.vue';
import SearchingContent from '@/components/SearchingContent.vue';

export default {
  name: 'Home',
  components: {
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
          .finally(() => {
            this.loading = false;
          });
      }, 500);
    },
    onClear() {
      this.search = '';
    },
    ...mapActions('repos', ['setRepos']),
  },
  computed: {
    ...mapGetters('repos', ['repos']),
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
  .initial-content {
    height: 430px;
  }
  .searching-content {
    height: 430px;
  }
</style>
