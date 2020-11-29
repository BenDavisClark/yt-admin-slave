import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  qiankun: {
    slave: {}
  },
  routes: [
    {
      path: '/',
      component: '@/pages'
    }
  ]
})
