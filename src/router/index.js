import Vue from 'vue'
import Router from 'vue-router'
import ball3d from '@/components/ball3d'
import bar3d from '@/components/bar3d'
import kLines from '@/components/kLines'
import treeBasic from '@/components/treeBasic'
import sunburst from '@/components/sunburst'
import sankey from '@/components/sankey'
import pictorialBar from '@/components/pictorialBar'
import bmap from '@/components/bmap'
import surfaceBall from '@/components/surfaceBall'
import lineBmap from '@/components/lineBmap'
import kunming from '@/components/kunming'
import transition from '@/components/transition'
import pingshan from '@/components/pingshan'
import treeMenu from '@/components/treeMenu'
import vueSlot from '@/components/vueSlot'
// import banber from '@/components/banber'
// import wordcloud from '@/components/wordcloud'

Vue.use(Router)

export default new Router({
    path: '/',
    mode: 'history',
    routes: [{
            path: '/',
            name: 'ball3d',
            component: ball3d
        },
        {
            path: '/bar3d',
            name: 'bar3d',
            component: bar3d
        },
        {
            path: '/kLines',
            name: 'kLines',
            component: kLines
        },
        {
            path: '/treeBasic',
            name: 'treeBasic',
            component: treeBasic
        },
        {
            path: '/sunburst',
            name: 'sunburst',
            component: sunburst
        },
        {
            path: '/sankey',
            name: 'sankey',
            component: sankey
        },
        {
            path: '/pictorialBar',
            name: 'pictorialBar',
            component: pictorialBar
        },
        {
            path: '/bmap',
            name: 'bmap',
            component: bmap
        },
        {
            path: '/surfaceBall',
            name: 'surfaceBall',
            component: surfaceBall
        },
        {
            path: '/lineBmap',
            name: 'lineBmap',
            component: lineBmap
        },
        {
            path: '/kunming',
            name: 'kunming',
            component: kunming
        },
        {
            path: '/transition',
            name: 'transition',
            component: transition
        },
        {
            path: '/pingshan',
            name: 'pingshan',
            component: pingshan
        },
        {
            path: '/treeMenu',
            name: 'treeMenu',
            component: treeMenu
        },
        {
            path: '/vueSlot',
            name: 'vueSlot',
            component: vueSlot
        },
        // {
        //     path: '/banber',
        //     name: 'banber',
        //     component: banber
        // },
        // {
        //     path: '/wordcloud',
        //     name: 'wordcloud',
        //     component: wordcloud
        // }
    ]
})