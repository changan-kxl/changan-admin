import Main from '@/components/layout/main.vue'

/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  mode: 设置该属性，代表是子菜单栏(超过两级必填)
 * }
 */
// 非 menu菜单
const hideMenuItem = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/view/login')
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403',
      notCache: true,
      icon: 'AntDesignOutlined'
    },
    component: () => import('@/view/exception/403.vue')
  },
  {
    path: '/500',
    name: '500',
    meta: {
      hideInMenu: true,
      title: '500',
      notCache: true,
      icon: 'AntDesignOutlined'
    },
    component: () => import('@/view/exception/500.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error_404',
    meta: {
      hideInMenu: true,
      title: '404',
      notCache: true,
      icon: 'AntDesignOutlined'
    },
    component: () => import('@/view/exception/404.vue')
  },
  {
    path: '/detail/:id',
    component: Main,
    meta: {
      notCache: false,
      hideInMenu: true
    },
    children: [
      {
        path: 'detail',
        name: 'detail',
        meta: {
          title: '详情',
          icon: 'AntDesignOutlined'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  }
]

// 菜单栏路由
const Menu = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'AntDesignOutlined'
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'multilevel',
        name: 'multilevel',
        meta: {
          icon: 'AntDesignOutlined',
          title: '多级菜单'
        },
        component: () => import('@/view/join-page.vue'),
        children: [
          {
            path: 'level_2_1',
            name: 'level_2_1',
            meta: {
              mode: 'multiple',
              icon: 'AntDesignOutlined',
              title: '二级-1'
            },
            component: () => import('@/view/multilevel/level-2-1.vue')
          },
          {
            path: 'level_2_2',
            name: 'level_2_2',
            meta: {
              mode: 'multiple',
              access: ['super_admin'],
              icon: 'AntDesignOutlined',
              showAlways: true,
              title: '二级-2'
            },
            component: () => import('@/view/multilevel/level-2-3.vue'),
            children: [
              {
                path: 'level_2_2_1',
                name: 'level_2_2_1',
                meta: {
                  mode: 'multiple',
                  icon: 'AntDesignOutlined',
                  title: '三级'
                },
                component: () => import('@/view/multilevel/level-2-3.vue'),
                children: [
                  {
                    path: 'level_2_2_1_1',
                    name: 'level_2_2_1_1',
                    meta: {
                      mode: 'multiple',
                      icon: 'AntDesignOutlined',
                      title: '三级'
                    },
                    component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
                  },
                  {
                    path: 'level_2_2_1_2',
                    name: 'level_2_2_1_2',
                    meta: {
                      mode: 'multiple',
                      icon: 'AntDesignOutlined',
                      title: '三级'
                    },
                    component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
                  }
                ],
                component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
              },
              {
                path: 'level_2_2_2',
                name: 'level_2_2_2',
                meta: {
                  mode: 'multiple',
                  icon: 'AntDesignOutlined',
                  title: '三级'
                },
                component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
              }
            ]
          },
          {
            path: 'level_2_3',
            name: 'level_2_3',
            meta: {
              mode: 'multiple',
              icon: 'AntDesignOutlined',
              title: '二级-3'
            },
            component: () => import('@/view/multilevel/level-2-3.vue')
          }
        ]
      }
    ]
  }
]

export default hideMenuItem.concat(Menu)
