export default {
  home: {
    title: '首頁',
    new_users: '新增用户',
    total_clicks: '累计点击',
    total_QnA: '新增问答',
    total_share: '分享统计',
    total_chat: '新增互动',
    total_pages: '新增页面',
    total_interview: '直接访问',
    email_marketing: '邮件营销',
    affiliate_advertising: '联盟广告',
    video_advertising: '视频广告',
    search_engine: '搜索引擎',
    users_access: '用户访问来源',
    users_activity: '每周用户活跃量'
  },
  example: {
    total: '总量',
    carrier_network: '运营商/网络服务',
    bank_securities: '银行/证券',
    gaming_video: '游戏/视频',
    catering_takeaway: '餐饮/外卖',
    courier_ecommerce: '快递/电商'
  },
  login: {
    title: '登錄',
    form: {
      title: 'Login please',
      username: 'Please enter your username',
      password: 'Please enter your password',
      login: 'Login',
      logout: '退出登录'
    },
    messages: {
      error: {
        username: 'Username cannot be empty',
        password: 'Password cannot be empty'
      }
    },
    tips: {
      bottom: 'Enter any username and password'
    }
  },
  i18n: {
    title: '多语言',
    content: '这是模态框内容',
    modalTitle: '模态框题目',
    buttonText: '显示模态框',
    tip: '注：仅此页做了多语言，其他页面没有在多语言包中添加语言内容',
    select_date: 'Select date',
    select_time: 'Select time'
  },
  join: {
    title: '社区',
    qq_number: 'QQ 群号: {number}',
    zhihu_column: 'iView 知乎专栏',
    juejin: '掘金',
    bilibili: '活动直播间',
    twitter: '推特'
  },
  treeSelect: {
    update_selected_data: '更新选中数据',
    update_tree_data: '更新树数据'
  },
  countTo: {
    title: 'count-to组件基础用法',
    total: '总',
    times: '次',
    left_right: '可添加左右文字',
    custom_style: '自定义样式',
    format_data: '设置数据格式',
    convert_data: '转换单位简化数据',
    custom_units: {
      title: '自定义单位',
      raw: '原始数据：{number} => '
    },
    async_data: '可异步更新数据',
    example: '综合实例',
    qty: {
      thousand: '千多',
      tenthousand: '万多',
      over_hundred_thousand: '十万多',
      over_million: '百万多',
      over_ten_million: '千万多',
      billion: '亿多',
      dozen: '十多',
      hundred: '百多'
    }
  },
  dragList: {
    toDo: '待办事项',
    completion: '完成事项',
    operation_record: '操作记录'
  },
  dragDrawer: {
    content: 'drawer组件是对iview的drawer组件的封装，在支持drawer所有api的基础上，支持可拖动和footer底部插槽',
    direction: '方向',
    left: '左',
    right: '右',
    whether_draggable: '是否可拖动',
    close: '关闭',
    open: '打开',
    container_drawer: '容器内抽屉',
    open_fullscreen: '打开全屏抽屉',
    example: {
      title: '这是标题'
    },
    show_miltilayer: '显示多层'
  },
  orgTree: {
    documentation: '文档',
    menu: {
      editorial_department: '编辑部门',
      view_department: '查看部门',
      new_sector: '新增子部门',
      delete_department: '删除部门',
      click: '点击了《{label}》节点的\'{key}\'菜单'
    }
  },
  treeTable: {
    name: '树状表格组件',
    based_on: '基于',
    develop: '进行开发',
    fixed_some: '修复了一些bug',
    add_features: '添加了一些新属性',
    supported_slot: '支持使用',
    perfom_custom_column: '进行自定义列渲染内容',
    see_documentation: '文档请看',
    columns: {
      name: '名称',
      gender: '性别',
      score: '得分了',
      likes: '喜欢'
    }
  },
  cropper: {
    button: '确认提交',
    button_crop: '裁剪',
    upload_image: '上传图片',
    messages: {
      success: {
        upload: '上传成功〜'
      }
    }
  },
  table: {
    export_csv: '导出为Csv文件',
    columns: {
      name: '名称',
      email: '电子邮件',
      create_time: '创建时间',
      handle: '处理',
      delete_message: '你确定要删除吗?',
      delete_button: '自定义删除'
    },
    search_placeholder: '输入关键字搜索',
    search_button: '搜索'
  },
  menu: {
    components: {
      title: '组件',
      submenu: {
        tree_select_page: {
          title: '樹狀下拉選擇器'
        },
        count_to_page: {
          title: '数字渐变'
        },
        drag_list_page: {
          title: '拖拽列表'
        },
        drag_drawer_page: {
          title: '可拖動抽屜'
        },
        org_tree_page: {
          title: '組織結構樹'
        },
        tree_table_page: {
          title: '樹狀表格'
        },
        cropper_page: {
          title: '圖片裁剪'
        },
        tables_page: {
          title: '多功能表格'
        },
        split_pane_page: {
          title: '分割窗口'
        },
        markdown_page: {
          title: 'Markdown編輯器'
        },
        editor_page: {
          title: '富文本編輯器'
        },
        icons_page: {
          title: '自定義圖標'
        }
      }
    },
    img_cropper_page: '圖片編輯器',
    update: {
      title: '上傳數據',
      submenu: {
        update_table_page: {
          title: '上傳CSV文件'
        },
        update_paste_page: {
          title: '粘貼表格數據'
        }
      }
    },
    join_page: {
      title: 'QQ群'
    },
    doc: {
      title: '文檔'
    },
    multilevel: {
      title: '多级菜单',
      submenu: {
        level_1: {
          title: 'Level-1'
        },
        level_2: {
          title: 'Level-2'
        },
        level_2_1: {
          title: 'Level-2-1'
        },
        level_2_3: {
          title: 'Level-2-3'
        },
        level_2_2: {
          title: 'Level-2-2',
          submenu: {
            level_2_2_1: {
              title: 'Level-2-2-1'
            },
            level_2_2_2: {
              title: 'Level-2-2-2'
            }
          }
        }
      }
    },
    directive_page: {
      title: '指令'
    },
    excel: {
      title: 'Excel',
      submenu: {
        'upload-excel': {
          title: '上傳excel'
        },
        'export-excel': {
          title: '導出excel'
        }
      }
    },
    tools_methods_page: {
      title: '工具函數'
    },
    error_store_page: {
      title: '錯誤收集'
    },
    error_logger_page: {
      title: '錯誤日誌'
    },
    query: '帶參路由',
    params: '動態路由'
  },
  top: {
    message_page: {
      title: '消息中心'
    },
    fullscreen: {
      open: '全屏',
      exit: '退出全屏'
    },
    tags: {
      close_all: '关闭所有',
      close_other: '关闭其他'
    }
  },
  date: {
    week: {
      Mon: '周一',
      Tue: '周二',
      Wed: '周三',
      Thu: '周四',
      Fri: '周五',
      Sat: '周六',
      Sun: '周日'
    }
  }
}
