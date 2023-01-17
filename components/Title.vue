<!-- Please remove this file from your project -->
<template>
  <div class="title__wrap">
    <img src="~/static/images/plaza-vea-logo.png" class="title__logo" alt="">
    <h4 class="title">
      <NuxtLink v-if="linkTitle" to="/promociones">
        <img src="~/static/images/icon-back.svg" alt="">
      </NuxtLink>
      {{ title }}
      </h4>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
    }
  },
  props: {
    title: {
      type: String
    },
    linkTitle: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
  .title{
    max-width: 580px;
    margin: auto;
    color: #FC2016;
    font-size: 30px;
    display: flex;
    align-items: center;
    a{
      color: #FC2016;
      text-decoration: none;
      margin-right: 10px;
    }
    &__logo{
      display: none;
    }
  }
  @media screen and (max-width: 768px){
    .title{
      max-width: 100%;
      justify-content: center;
      font-size: 14px;
      &__logo{
        display: block;
        margin: auto;
        margin-bottom: 20px;
      }
    }
  }
</style>

