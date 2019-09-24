<template>
  <v-container fill-height>
    <v-layout column justify-center align-center>
      <v-card width="50%">
        <v-card-text>
          <v-autocomplete
            outlined
            label="Buscar repositório"
            no-data-text="Não foram encontrados repositórios com termo buscado"
          />
          <repository-card />
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import RepositoryCard from '@/components/RepositoryCard.vue';

export default {
  name: 'Home',
  components: {
    RepositoryCard,
  },
};
</script>
