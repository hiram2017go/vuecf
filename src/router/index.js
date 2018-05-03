import Vue from 'vue'
import Router from 'vue-router'
import Onepage from '@/components/public/onepage'
import Cannular from '@/components/page/chartannular'
import Ccurve from '@/components/page/chartcurve'
import Ccolumn from '@/components/page/chartcolumn'
import Cpie from '@/components/page/chartpie'
import Cblend from '@/components/page/chartblend'
import Basicfrom from '@/components/page/basicfrom'
import Upflie from '@/components/page/upflie'
import Tableplugin from '@/components/page/tablestyle'
import Drag from '@/components/page/drag'
import File from '@/components/page/file'
import Down from '@/components/page/down'
import UploadA from '@/components/page/uploada'
import UploadB from '@/components/page/uploadb'
import First from '@/components/page/first'
import Final from '@/components/page/final'
import FileMge from '@/components/page/filemge'
import FileView from '@/components/page/fileview'
import UserMge from '@/components/page/usermge'
import SystemSet from '@/components/page/systemset'
import Log from '@/components/page/log'

const Dday = resolve => require(['@/components/page/dday'], resolve)   //懒加载
const Tday = resolve => require(['@/components/page/tday'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Onepage
    },
    {
      path:'/file',
      component:File
    },
    {
      path:'/uploada',
      component:UploadA
    },
    {
      path:'/uploadb',
      component:UploadB
    },
    {
      path:'/down',
      component:Down
    },
    {
      path:'/first',
      component:First,
    },
    {
      path:'/final',
      component:Final,
    },
    {
      path:'/filemge',
      component:FileMge,
    },
    {
      path:'/fileview',
      component:FileView,
    },
    {
      path:'/usermge',
      component:UserMge,
    },
    {
      path:'/systemset',
      component:SystemSet,
    },
    {
      path:'/log',
      component:Log,
    },
    {
      path: '/Dday',
      component: Dday
    },
    {
      path: '/Tday',
      component: Tday
    },
    {
      path: '/Cannular',
      component: Cannular
    },
    {
      path: '/Ccurve',
      component: Ccurve
    },
    {
      path: '/Ccolumn',
      component: Ccolumn
    },
    {
      path: '/Cpie',
      component: Cpie
    },
    {
      path: '/Cblend',
      component: Cblend
    },
    {
      path: '/Basicfrom',
      component: Basicfrom
    },
    {
      path: '/Upflie',
      component: Upflie
    },
    {
      path: '/Tableplugin',
      component: Tableplugin
    },
    {
      path: '/Drag',
      component: Drag
    }

  ]
})
