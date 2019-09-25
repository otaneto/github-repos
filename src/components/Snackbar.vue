<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :top="snackbar.top"
    :bottom="snackbar.bottom"
    :left="snackbar.left"
    :right="snackbar.right"
    multi-line
  >
  <span>
    <v-icon v-show="!!snackbar.icon" color="white" class="mr-3">{{snackbar.icon}}</v-icon>
    {{ snackbar.message }}
  </span>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'snackbar',
  computed: {
    ...mapGetters('base', ['snackbar']),
  },
  methods: {
    ...mapActions('base', ['setSnackbar']),
  },
  watch: {
    snackbar(val) {
      if (val.show) {
        setTimeout(() => {
          this.setSnackbar({ show: false });
        }, 6000);
      }
    },
  },
};
</script>
