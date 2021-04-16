import Main from "@/components/layout/main.vue";

/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 *  mode: 设置该属性，代表是子菜单栏(超过两级必填)
 * }
 */
// 非 menu菜单
const hideMenuItem = [
  {
    path: "/403",
    name: "403",
    meta: { 
      title: "403",
      notCache: true,
      icon: "AntDesignOutlined",
    },
    component: () => import("@/view/exception/403.vue")
  },
  {
    path: "/500",
    name: "500",
    meta: {
      hideInMenu: true,
      title: "500",
      notCache: true,
      icon: "AntDesignOutlined",
    },
    component: () => import("@/view/exception/500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error_404",
    meta: {
      hideInMenu: true,
      title: "404",
      notCache: true,
      icon: "AntDesignOutlined",
    },
    component: () => import("@/view/exception/404.vue"),
  },
];

// 菜单栏路由
const Menu = [
  {
    path: "/home",
    name: "_home",
    component: Main,
    meta: {
      notCache: true,
    },
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "首页",
          notCache: true,
          icon: "AntDesignOutlined",
        },
        component: () => import("@/view/single-page/home.vue"),
      },
    ],
  },
  {
    path: "",
    name: "doc",
    meta: {
      title: "文档",
      href: "https://lison16.github.io/iview-admin-doc/#/",
      icon: "AntDesignOutlined",
    },
  },
  {
    path: "/join",
    name: "join",
    component: Main,
    meta: {
      hideInBread: true,
    },
    children: [
      {
        path: "join_page",
        name: "join_page",
        meta: {
          icon: "AntDesignOutlined",
          title: "QQ群",
        },
        component: () => import("@/view/join-page.vue"),
      },
    ],
  },
  {
    path: "/message",
    name: "message",
    component: Main,
    meta: {
      hideInBread: true,
    },
    children: [
      {
        path: "message_page",
        name: "message_page",
        meta: {
          icon: "AntDesignOutlined",
          title: "消息中心",
        },
        component: () => import("@/view/single-page/message/index.vue"),
      },
    ],
  },
  {
    path: "/multilevel",
    name: "multilevel",
    meta: {
      icon: "AntDesignOutlined",
      title: "多级菜单",
    },
    component: Main,
    children: [
      {
        path: "level_2_1",
        name: "level_2_1",
        meta: {
          mode: "multiple",
          icon: "AntDesignOutlined",
          title: "二级-1",
        },
        component: () => import("@/view/multilevel/level-2-1.vue"),
      },
      {
        path: "level_2_2",
        name: "level_2_2",
        meta: {
          mode: "multiple",
          access: ["super_admin"],
          icon: "AntDesignOutlined",
          showAlways: true,
          title: "二级-2",
        },
        component: () => import("@/view/multilevel/level-2-2/level-2-2-1.vue"),
        children: [
          {
            path: "level_2_2_1",
            name: "level_2_2_1",
            meta: {
              mode: "multiple",
              icon: "AntDesignOutlined",
              title: "三级",
            },
            component: () =>
              import("@/view/multilevel/level-2-2/level-2-2-1.vue"),
            children: [
              {
                path: "level_2_2_1_1",
                name: "level_2_2_1_1",
                meta: {
                  mode: "multiple",
                  icon: "AntDesignOutlined",
                  title: "三级",
                },
                component: () =>
                  import("@/view/multilevel/level-2-2/level-2-2-1.vue"),
              },
              {
                path: "level_2_2_1_2",
                name: "level_2_2_1_2",
                meta: {
                  mode: "multiple",
                  icon: "AntDesignOutlined",
                  title: "三级",
                },
                component: () =>
                  import("@/view/multilevel/level-2-2/level-2-2-2.vue"),
              },
            ],
            component: () =>
              import("@/view/multilevel/level-2-2/level-2-2-1.vue"),
          },
          {
            path: "level_2_2_2",
            name: "level_2_2_2",
            meta: {
              mode: "multiple",
              icon: "AntDesignOutlined",
              title: "三级",
            },
            component: () =>
              import("@/view/multilevel/level-2-2/level-2-2-2.vue"),
          },
        ],
      },
      {
        path: "level_2_3",
        name: "level_2_3",
        meta: {
          mode: "multiple",
          icon: "AntDesignOutlined",
          title: "二级-3",
        },
        component: () => import("@/view/multilevel/level-2-3.vue"),
      },
    ],
  },
];

export default hideMenuItem.concat(Menu);
