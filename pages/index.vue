<template>
  <div>
    <Title :title="title"/>
    <Form />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'app',
  data() {
    return {
      title: 'Registrate para ingresar',
    }
  }
}
</script>
