<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data" key="index">
      <span @click="toggle(item, index)">
        <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text', loading ? loadingIconList[index] : '']"></i>
        {{ item[name] || item.menuName }}
      </span>
      <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
    </li>
  </ul>
</template>
<script>
export default {
    name: 'treeMenu',
    props: {
        data: Array,
        name: String,
        loading: Boolean
    },
    data() {
        return {
            folderIconList: [],
            loadingIconList: [],
            scope: {}
        }
    },
    created() {
        this.data.forEach((item, index) => {
            if(item.children && item.children.length) {
                this.folderIconList[index] = 'folder'
            }
        })
    },
    methods: {
        doTask(index) {
            this.$set(this.scope, index, !this.scope[index])
            console.log(this.scope)
            this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder'
        },
        toggle(item, index) {
            this.loadingIconList = []
            if (item.children && item.children.length) {
                this.doTask(index)
            } else {
                this.loadingIconList[index] = 'loading'
                this.$emit('getSubMenu', item, (subMeunList) => {
                    if (subMeunList && subMeunList.length) {
                        this.doTask(index)
                    }
                })
            }
        }
    }
}
</script>
<style>
.tree-menu {
  list-style: none;
}
.tree-menu li {
  line-height: 2;
}
.tree-menu li span {
  cursor: default;
}
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: -2px;
}
.icon.folder {
  background-image: url(/static/imgs/treeMenu/folder.png);
}
.icon.folder-open {
  background-image: url(/static/imgs/treeMenu/folder-open.png);
}
.icon.file-text {
  background-image: url(/static/imgs/treeMenu/file-text.png);
}
.icon.loading {
  background-image: url(/static/imgs/treeMenu/loading.gif);
  background-size: 15px;
}
</style>
© 2018 GitHub, Inc.