<template>
  <div>
    <Title :title="promo.title" linkTitle/>
    <Detail :promo="promo"/>
    <Comments />
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'DetailPage',
  layout: 'app',
  data() {
    return {
      linkTitle: true
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('getPromo', params.id);
  },
  computed: {
    ...mapState(['promo'])
  }
}
</script>
