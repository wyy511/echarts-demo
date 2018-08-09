<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="item in list">
      <a :href="item.url">{{item.name}}</a>
      </li>
    </ul>
    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      list: [
        {
          name: 'ball3d',
          url: '/'
        },
        {
          name: 'bar3d',
          url: '/bar3d'
        },
        {
          name: 'kLines',
          url: '/kLines'
        },
        {
          name: 'treeBasic',
          url: '/treeBasic'
        },
        {
          name: 'sunburst',
          url: '/sunburst'
        },
        {
          name: 'sankey',
          url: '/sankey'
        },
        {
          name: 'pictorialBar-people',
          url: '/pictorialBar'
        },
        {
          name: 'bmap',
          url: '/bmap'
        },
        {
          name: 'surfaceBall',
          url: '/surfaceBall'
        },
        {
          name: 'lineBmap',
          url: '/lineBmap'
        },
        // {
        //   name: 'banber',
        //   url: '/banber'
        // },
        {
          name: 'wordcloud',
          url: '/wordcloud'
        },
        {
          name: 'transition',
          url: '/transition'
        },
        {
          name: 'pingshan',
          url: '/pingshan'
        },
        {
          name: 'treeMenu',
          url: '/treeMenu'
        },
        {
          name: 'vueSlot',
          url: '/vueSlot'
        },
        {
          name: 'gaode',
          url: '/gaode'
        },
        {
          name: 'authCode',
          url: '/authCode'
        },
      ]
    }
  }
}
</script>

<style>
.container {
  // width: 500px;
  // height: 500px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10%)
}
</style>
