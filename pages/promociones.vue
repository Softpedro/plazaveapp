<template>
  <div>
    <Title :title="title" />
    <Sales :promos="promos.items" :loading="loading"/>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import axios from '@/plugins/axios';

export default {
  name: 'PromosPage',
  layout: 'app',
  data() {
    return {
      title: 'Todas las promociones',
      loading: false,
      validLoading: true,
      newConsult: 2
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('getPromos', params.page)
  },
  computed: {
    ...mapState(['promos'])
  },
  methods:{
    scroll () {
      const listElm = document.querySelector('#listPromos');
      document.addEventListener('scroll', e => {
        if(listElm.offsetTop + listElm.clientHeight <= window.scrollY + window.outerHeight && this.validLoading) {
          this.validLoading = false;
          this.loading = true;
          this.fetchData();
        }
      });
    },
    async fetchData(){
      let {data} = await axios.get(`/posts/?page=${this.newConsult}&limit=10`);
      this.promos.items.push(...data.items);
      this.validLoading = true;
      this.newConsult++;
      if(data.items.length === 0){
        this.validLoading = false;
        this.loading = false;
      }
    }
  },
  mounted() {
    this.scroll()
  }
}
</script>
