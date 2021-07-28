import Main from '../components/layout/Main.vue'
import CommerViews from '@/components/commerViews.vue'
import { routes as tablesRoutes } from './tables'
/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  role: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
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
        component: () => import('@/view/workplace/index.vue')
      }
    ]
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
      title: '500',
      notCache: true,
      icon: 'AntDesignOutlined'
    },
    component: () => import('@/view/exception/500.vue')
  },
  ...tablesRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'error_404',
    meta: {
      title: '404',
      icon: 'AntDesignOutlined'
    },
    component: () => import('@/view/exception/404.vue')
  }
]

// 菜单栏路由
const Menu = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'cache',
        name: 'cache',
        meta: {
          icon: 'AntDesignOutlined',
          title: '组件缓存'
        },
        component: CommerViews, // 无限极菜单的容器
        children: [
          {
            path: 'cachePage',
            name: 'cachePage',
            meta: {
              icon: 'AntDesignOutlined',
              title: '组件缓存',
              notCache: false // notCache:false 或 不设置 都可以实现组件缓存
            },
            component: () => import('@/view/cache/cache-page.vue')
          },
          {
            path: 'nocachePage',
            name: 'nocachePage',
            meta: {
              icon: 'AntDesignOutlined',
              title: '组件不缓存',
              notCache: true
            },
            component: () => import('@/view/cache/noCache-page.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'tables',
        name: 'tables',
        meta: {
          mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
          title: '表格',
          icon: 'AntDesignOutlined',
          notCache: false
        },
        component: () => import('@/view/tables/tables.vue')
      }
    ]
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'level_1',
        name: 'level_1',
        meta: {
          mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
          icon: 'AntDesignOutlined',
          title: '多级菜单'
        },
        component: CommerViews, // 无限极菜单的容器
        children: [
          {
            path: 'level_2_1',
            name: 'level_2_1',
            meta: {
              mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
              icon: 'AntDesignOutlined',
              title: 'level_2_1'
            },
            component: CommerViews, // 无限极菜单的容器
            children: [
              {
                path: 'level_2_1_1',
                name: 'level_2_1_1',
                meta: {
                  mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
                  icon: 'AntDesignOutlined',
                  title: 'level_2_1_1'
                },
                component: CommerViews, // 无限极菜单的容器
                children: [
                  {
                    path: 'level_2_1_1_1',
                    name: 'level_2_1_1_1',
                    meta: {
                      mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
                      icon: 'AntDesignOutlined',
                      title: 'level_2_1_1_1'
                    },
                    component: () =>
                      import('@/view/multilevel/level_2_1/level_2_1_1_1.vue')
                  },
                  {
                    path: 'level_2_1_1_2',
                    name: 'level_2_1_1_2',
                    meta: {
                      mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
                      icon: 'AntDesignOutlined',
                      title: 'level_2_1_1_2'
                    },
                    component: () =>
                      import('@/view/multilevel/level_2_1/level_2_1_1_2.vue')
                  }
                ]
              },
              {
                path: 'level_2_1_2',
                name: 'level_2_1_2',
                meta: {
                  mode: 'multiple', //设置该属性，代表是子菜单栏(超过两级必填)
                  icon: 'AntDesignOutlined',
                  title: 'level_2_1_2'
                },
                component: () => import('@/view/multilevel/level_2_1/level_2_1_2.vue')
              }
            ]
          },
          {
            path: 'level_2_2',
            name: 'level_2_2',
            meta: {
              icon: 'AntDesignOutlined',
              title: 'level_2_2'
            },
            component: () => import('@/view/multilevel/level_2_2.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'permission',
        name: 'permission',
        meta: {
          icon: 'AntDesignOutlined',
          title: '权限控制'
        },
        component: CommerViews, // 无限极菜单的容器
        children: [
          {
            path: 'button',
            name: 'button',
            meta: {
              icon: 'AntDesignOutlined',
              title: '按钮权限'
            },
            component: () => import('@/view/permission/button.vue')
          },
          {
            path: 'admin-page',
            name: 'admin-page',
            meta: {
              icon: 'AntDesignOutlined',
              title: 'admin可见页',
              role: ['admin']
            },
            component: () => import('@/view/permission/admin-page.vue')
          },
          {
            path: 'superadmin-page',
            name: 'superadmin-page',
            meta: {
              icon: 'AntDesignOutlined',
              title: 'super admin可见页',
              role: ['superAdmin']
            },
            component: () => import('@/view/permission/superadmin-page.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'exception',
        name: 'exception',
        meta: {
          icon: 'AntDesignOutlined',
          title: '异常页'
        },
        component: CommerViews, // 无限极菜单的容器
        children: [
          {
            path: '500',
            name: '500',
            meta: {
              icon: 'AntDesignOutlined',
              title: '500'
            },
            component: () => import('@/view/exception/500.vue')
          },
          {
            path: '403',
            name: '403',
            meta: {
              icon: 'AntDesignOutlined',
              title: '403'
            },
            component: () => import('@/view/exception/403.vue')
          },
          {
            path: '404',
            name: '404',
            meta: {
              icon: 'AntDesignOutlined',
              title: '404'
            },
            component: () => import('@/view/exception/404.vue')
          }
        ]
      }
    ]
  }
]

export { hideMenuItem, Menu }
