import Main from '@/components/layout/Main.vue'

export const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/tables/detail',
        name: 'tablesDetail',
        meta: {
          title: '详情'
        },
        component: () => import('@/view/tables/detail.vue')
      }
    ]
  }
]
