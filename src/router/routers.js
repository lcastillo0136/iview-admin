import Main from '@/components/main'
import parentView from '@/components/parent-view'
import config from '@/config'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
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
 * }
 */

if (!config.theme) config.theme = 'iview-theme'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login.title',
      hideInMenu: true,
      access: [
        'users/login'
      ]
    },
    component: () => import('@/view/' + config.theme + '/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: 'home.title',
          notCache: true,
          icon: 'md-home',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/single-page/home')
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: 'menu.doc.title',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/join',
    name: 'join',
    component: Main,
    meta: {
      hideInBread: true,
      access: [
        'users/login'
      ]
    },
    children: [
      {
        path: 'join_page',
        name: 'join_page',
        meta: {
          icon: '_qq',
          title: 'menu.join_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/join-page.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true,
      access: [
        'users/login'
      ]
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: 'top.message_page.title',
          access: ['users/getComments']
        },
        component: () => import('@/view/' + config.theme + '/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: 'menu.components.title'
    },
    component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: 'menu.components.submenu.tree_select_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/tree-select/index.vue')
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: 'menu.components.submenu.count_to_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: 'menu.components.submenu.drag_list_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: 'menu.components.submenu.drag_drawer_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: 'menu.components.submenu.org_tree_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: 'menu.components.submenu.tree_table_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: 'menu.components.submenu.cropper_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: 'menu.components.submenu.tables_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: 'menu.components.submenu.split_pane_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'menu.components.submenu.markdown_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: 'menu.components.submenu.editor_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: 'menu.components.submenu.icons_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/update',
    name: 'update',
    meta: {
      icon: 'md-cloud-upload',
      title: 'menu.update.title'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: 'update_table_page',
        meta: {
          icon: 'ios-document',
          title: 'menu.update.submenu.update_table_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: 'menu.update.submenu.update_paste_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'menu.excel.title'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: 'menu.excel.submenu.upload-excel.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: 'menu.excel.submenu.export-excel.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/pdf',
    name: 'pdf',
    meta: {
      icon: 'md-document',
      title: 'menu.pdf.title'
    },
    component: Main,
    children: [
      {
        path: 'upload-pdf',
        name: 'upload-pdf',
        meta: {
          icon: 'md-add',
          title: 'menu.pdf.submenu.upload-pdf.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/pdf/upload-pdf.vue')
      },
      {
        path: 'export-pdf',
        name: 'export-pdf',
        meta: {
          icon: 'md-download',
          title: 'menu.pdf.submenu.export-pdf.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/pdf/export-pdf.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hideInBread: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: 'menu.tools_methods_page.title',
          beforeCloseName: 'before_close_normal',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      hideInBread: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: 'i18n_page',
        meta: {
          icon: 'md-planet',
          title: 'i18n - {{ i18n.title }}',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/i18n/i18n-page.vue')
      }
    ]
  },
  {
    path: '/error_store',
    name: 'error_store',
    meta: {
      hideInBread: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'error_store_page',
        name: 'error_store_page',
        meta: {
          icon: 'ios-bug',
          title: 'menu.error_store_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/error-store/error-store.vue')
      }
    ]
  },
  {
    path: '/error_logger',
    name: 'error_logger',
    meta: {
      hideInBread: true,
      hideInMenu: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'error_logger_page',
        name: 'error_logger_page',
        meta: {
          icon: 'ios-bug',
          title: 'menu.error_logger_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/single-page/error-logger.vue')
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      hideInBread: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: 'menu.directive_page.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/directive/directive.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: 'menu.multilevel.title',
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: 'menu.multilevel.submenu.level_2_1.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          showAlways: true,
          title: 'menu.multilevel.submenu.level_2_2.title',
          access: [
            'users/login'
          ]
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: 'menu.multilevel.submenu.level_2_2.submenu.level_2_2_1.title',
              access: [
                'users/login'
              ]
            },
            component: () => import('@/view/' + config.theme + '/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: 'menu.multilevel.submenu.level_2_2.submenu.level_2_2_2.title',
              access: [
                'users/login'
              ]
            },
            component: () => import('@/view/' + config.theme + '/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: 'menu.multilevel.submenu.level_2_3.title',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/multilevel/level-2-3.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true,
      access: [
        'users/login'
      ]
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `${route.params.title}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal',
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ toolsMethods.dynamic_routing }}-${route.query.id}`,
          notCache: true,
          access: [
            'users/login'
          ]
        },
        component: () => import('@/view/' + config.theme + '/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/' + config.theme + '/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/' + config.theme + '/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/' + config.theme + '/error-page/404.vue')
  },
  {
    path: '/settings',
    meta: {
      title: 'settings.title',
      hideInMenu: false,
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: '',
        name: 'settings_page',
        meta: {
          icon: 'md-settings',
          title: 'settings.title',
          access: [
            'ManagePermission/*',
            'ManagePermission/index',
            'ManagePermission/get',
            'UserGroups/*',
            'UserGroups/index',
            'UserGroups/get'
          ]
        },
        component: () => import('@/view/' + config.theme + '/settings/settings.vue')
      }
    ]
  },
  // {
  //   path: '/users-roles',
  //   meta: {
  //     title: 'usersRoles.title',
  //     hideInMenu: false,
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: '',
  //       name: 'users-roles_page',
  //       meta: {
  //         icon: 'md-people',
  //         title: 'usersRoles.title',
  //         access: [
  //           'ManagePermission/*',
  //           'ManagePermission/index',
  //           'ManagePermission/get',
  //           'UserGroups/*',
  //           'UserGroups/index',
  //           'UserGroups/get'
  //         ]
  //       },
  //       component: () => import('@/view/' + config.theme + '/roles/roles.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/users',
  //   meta: {
  //     title: 'users.title',
  //     hideInMenu: false,
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: '',
  //       name: 'users_page',
  //       meta: {
  //         icon: 'md-person',
  //         title: 'users.title',
  //         access: [
  //           'Users/*',
  //           'Users/index',
  //           'Users/get'
  //         ]
  //       },
  //       component: () => import('@/view/' + config.theme + '/users/users.vue')
  //     }
  //   ]
  // }
]
