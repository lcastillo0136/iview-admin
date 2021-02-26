export default {
  home: {
    title: '首页',
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
    title: '登录',
    form: {
      title: '欢迎登录',
      username: '请输入用户名',
      password: '请输入密码',
      login: '登录',
      logout: '退出登录'
    },
    messages: {
      error: {
        username: '账号不能为空',
        password: '密码不能为空',
        email: '無效的電子郵件格式',
        wrong_user_password: 'Wrong username or password',
        unauthorized: 'Unauthorized. You can\'t access',
        user_inactive: 'Please activate your account',
        email_no_verified: 'Please validate your email',
        please_accept_terms: 'Please accept our terms and conditions'
      }
    },
    tips: {
      bottom: '输入任意用户名和密码即可'
    }
  },
  logout: {
    messages: {
      error: {
        unauthorized: 'Unauthorized. You can\'t logout',
        unable_logout: 'Error in system. You can\'t logout'
      }
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
  richEditor: {
    button: '修改编辑器内容'
  },
  icons: {
    builtin_icon: 'iView内置图标',
    feature: 'Icons组件支持自定义图标的显示，具体自定义图标字体文件的制作请参考文档。',
    feature2: 'CommonIcon组件同时支持iView内置图标类型和自定义图标类型，为了区别这两种类型，需要在自定义图标名称前加下划线"_"'
  },
  uploadTable: {
    upload_csv: '上传Csv文件',
    tip_upload: '点击上传Csv文件',
    utilsjs: {
      tip: 'util.js提供两个方法用来实现这个功能',
      get_array: '将Csv文件解析为二维数组',
      get_table: '将二维数组转为表格数据，具体请看文档'
    },
    csv_first_row: '第一行是標題',
    only_csv_files: '只能上传Csv文件',
    only_csv_files_again: '只能上传Csv文件，请重新上传'
  },
  pasteTable: {
    paste_tip: '使用Tab键换列，使用回车键换行',
    show_data: '显示表格数据',
    messages: {
      error: {
        irregular: '您的内容不规范',
        row_irregular: '您的第{errorIndex}行数据不规范，请修改'
      }
    }
  },
  uploadExcel: {
    title: '导入EXCEL',
    upload_file: '上传文件',
    success: '成功',
    messages: {
      info: {
        file_deleted: '上传的文件已删除！'
      },
      error: {
        file_type: '文件类型错误',
        no_excel: '文件：{name}不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。',
        reading: '文件读取出错'
      },
      success: {
        read: '文件读取成功'
      }
    }
  },
  exportExcel: {
    title: '导出EXCEL',
    export_file: '导出文件',
    example: {
      columns: {
        primary: '一级分类',
        secondary: '二级分类',
        tertiary: '三级分类'
      },
      result: '分类列表'
    },
    messages: {
      error: {
        empty: '表格数据不能为空！'
      }
    }
  },
  uploadPDF: {
    title: 'Import PDF',
    upload_file: 'Upload files',
    success: 'Success',
    messages: {
      info: {
        file_deleted: 'The uploaded file has been deleted！'
      },
      error: {
        file_type: 'File type error',
        no_pdf: 'File：{name} not an pdf file，please select an pdf file with a .pdf extension。',
        reading: 'File reading error'
      },
      success: {
        read: 'File read successfully'
      }
    }
  },
  exportPDF: {
    title: 'Export PDF',
    export_file: 'Export File',
    example: {
      columns: {
        primary: 'Primary classification',
        secondary: 'Secondary classification',
        tertiary: 'Tertiary classification'
      },
      result: 'Category List'
    },
    messages: {
      error: {
        empty: 'Form data cannot be empty！'
      }
    }
  },
  toolsMethods: {
    add_label: '添加一个标签',
    dynamic_routing: '动态路由',
    add: '添加',
    parameter: '参数',
    close_this: '关闭工具方法页',
    close_manually: '手动关闭页面'
  },
  arguPage: {
    params: {
      close_button: '调用closeTag方法关闭本页'
    },
    query: {
      close_button: '调用closeTag方法关闭本页'
    }
  },
  errorStore: {
    content1: 'iview-admin会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。如果你不需要这个功能，将\'./src/config/index.js\'里的plugin的\'error-store\'属性删掉即可。',
    content2: '另外在开发环境下，你程序中的错误都会被收集起来，这样可能不利于你排查错误，你可以将\'./src/config/index.js\'的\'error-store\'的\'developmentOff\'设为true。',
    content3: '如果你只是想收集错误日志，不希望登录用户看到错误日志，你可以不提供查看日志的入口，只需将\'./src/config/index.js\'的\'error-store\'的\'showInHeader\'设为false。',
    click_test_error: '点击测试触发程序错误',
    click_test_ajax_error: '点击测试触发ajax接口请求错误',
    ajax_error_404: 'ajax接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。'
  },
  errorLogger: {
    button_export: '导出日志记录',
    logger_note: '注：这里只会显示成功保存到服务端的错误日志，而且页面错误日志不会在浏览器持久化存储，刷新页面即会丢失',
    columns: {
      serial_number: '序号',
      type: '类型',
      code: '编码',
      information: '信息',
      url: '網址',
      time: '时间'
    },
    file_name: '错误日志'
  },
  directives: {
    show_modal: '显示可拖动弹窗',
    this_button_draggable: '这个按钮也是可以拖动的',
    modal_title: '标题',
    drag_here: '拖动这里即可拖动整个弹窗',
    copy_button: '複製',
    copy_succed: '复制成功',
    copy_failedd: '复制失败',
    entered_input: '这是输入的内容'
  },
  multilevel: {
    level: {
      menu: '多级菜单',
      second: '二级-{second}',
      third: '{third}级{forth}'
    }
  },
  messageCenter: {
    unread_message: '未读消息',
    read_message: '已读消息',
    recycle_bin: '回收站',
    title_delete: '删除',
    title_restore: '还原'
  },
  menu: {
    components: {
      title: '组件',
      submenu: {
        tree_select_page: {
          title: '树状下拉选择器'
        },
        count_to_page: {
          title: '数字渐变'
        },
        drag_list_page: {
          title: '拖拽列表'
        },
        drag_drawer_page: {
          title: '可拖动抽屉'
        },
        org_tree_page: {
          title: '组织结构树'
        },
        tree_table_page: {
          title: '树状表格'
        },
        cropper_page: {
          title: '图片裁剪'
        },
        tables_page: {
          title: '多功能表格'
        },
        split_pane_page: {
          title: '分割窗口'
        },
        markdown_page: {
          title: 'Markdown编辑器'
        },
        editor_page: {
          title: '富文本编辑器'
        },
        icons_page: {
          title: '自定义图标'
        }
      }
    },
    img_cropper_page: '图片编辑器',
    update: {
      title: '上传数据',
      submenu: {
        update_table_page: {
          title: '上传CSV文件'
        },
        update_paste_page: {
          title: '粘贴表格数据'
        }
      }
    },
    join_page: {
      title: 'QQ群'
    },
    doc: {
      title: '文档'
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
          title: '上传excel'
        },
        'export-excel': {
          title: '导出excel'
        }
      }
    },
    pdf: {
      title: 'PDF',
      submenu: {
        'upload-pdf': {
          title: '上傳pdf'
        },
        'export-pdf': {
          title: '導出pdf'
        }
      }
    },
    tools_methods_page: {
      title: '工具函数'
    },
    i18n_page: {
      title: '多语言'
    },
    error_store_page: {
      title: '错误收集'
    },
    error_logger_page: {
      title: '错误日志'
    },
    query: '带参路由',
    params: '动态路由'
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
  },
  modal: {
    close: {
      title: '确定要关闭这一页吗?'
    }
  },
  error: {
    401: {
      desc: 'Oh~~您没有浏览这个页面的权限~',
      go_home: '返回首页',
      go_back: '返回上一页'
    }
  },
  profile: {
    title: 'User Profile',
    header: 'Profile',
    card: {
      description: 'Description'
    },
    button: {
      add_address: 'Add new address',
      edit_address: 'change',
      delete_address: 'delete'
    },
    personal_info: {
      title: 'Personal Information',
      first_name: 'First Name',
      name_title: {
        dr: 'Dr. (Doctor)',
        esq: 'Esq. (Esquire)',
        hon: 'Hon. (Honorable)',
        jr: 'Jr. (Junior)',
        mr: 'Mr.',
        mrs: 'Mrs.',
        ms: 'Ms.',
        msgr: 'Msgr. (Monsignor)',
        prof: 'Prof. (Professor)',
        rev: 'Rev. (Reverend)',
        rt_hon: 'Rt. Hon. (Right Honorable)',
        sr: 'Sr. (Senior)',
        st: 'St. (Saint)'
      },
      last_name: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      gender: 'Gender',
      female: 'Female',
      male: 'Male',
      not_sure: 'Not Sure',
      rather_not_say: 'Rather not say',
      other_pleasestate: 'Others (please state)',
      gender_other: 'Other',
      bday: 'Birthday',
      bday_placeholder: 'Select birthday',
      rfc: 'RFC',
      tel_oficina: 'Office Phone',
      no_licencia: 'Professional License',
      profesion: 'Profession',
      especialidad: 'Specialty',
      biography: 'Biography',
      address: {
        alias: 'Description name',
        update_address: 'Update Address',
        create_address: 'Add new address',
        delete_address: 'Delete selected address',
        delete_message: 'Are you sure you want to delete the selected address?',
        default: 'Favorite',
        street: 'Street',
        city: 'City',
        suburb: 'Neighborhood',
        township: 'Township',
        exterior_number: 'No. exterior',
        interior_number: 'No. interior',
        state: 'State',
        country: 'Country',
        directions: 'Directions'
      }
    },
    account_info: {
      title: 'Account Information',
      role: 'Role',
      active: 'Active',
      username: 'Account ID',
      status: 'Status',
      email_verified: 'Verified',
      email_no_verified: 'No Verified',
      email_verified_tooltip: 'Resend verification email',
      password: 'Account Password',
      confirm_password: 'Confirm account password'
    },
    messages: {
      error: {
        first_name: {
          empty_name: 'The name cannot be empty'
        },
        email: {
          empty_email: 'The email cannot be empty',
          used_email: 'Email used in another account. Please try another'
        },
        user_group_id: {
          wrong_user_group: 'Unknow role',
          empty_group_id: 'The role cannot be empty'
        },
        username: {
          empty_username: 'The account ID cannot be empty'
        },
        password: {
          empty_confirm: 'Please confirm with the same password',
          confirm_dont_match: 'Please confirm with the same password',
          empty_password: 'The field password cannot be empty'
        },
        not_found: 'Account Info not found',
        too_much_calls: 'Too much try\'s, please wait before try agains'
      },
      success: {
        update: 'Informacion de usuario actualizada'
      }
    }
  },
  usersRoles: {
    title: 'User Groups',
    tabs: {
      groups: 'Groups',
      permissions: 'Permissions'
    },
    table: {
      name: 'Name',
      description: 'Description',
      available_online: 'Available Online'
    },
    errors: {
      title: 'User Group saving error',
      name: {
        used_group_name: 'This User Group name is used by other record.',
        empty_group_name: 'Plase input an name for the user group'
      },
      create_error: 'There is a problem creating the group.',
      load_data: 'Load Data error',
      update_switch: 'Available online error',
      delete_error: 'Delete group error',
      add_error: 'Create user group error',
      edit_error: 'Edit user group error',
      no_autorized: 'The seasson has expired'
    },
    delete: {
      title: 'Delete confirmation',
      content: 'Are you sure you want to delete this?',
      button: 'Delete'
    },
    add: {
      title: 'Create new user group',
      button: 'Create',
      name: 'Name',
      description: 'Description',
      available_online: 'Available Online'
    },
    edit: {
      title: 'Edit user group',
      button: 'Edit'
    }
  },
  users: {
    title: 'Users',
    title_list: 'User List',
    user_count: 'users',
    profile: {
      title: 'Profile'
    },
    table: {
      name: 'Name',
      username: 'Login',
      role: 'Role',
      active: 'Status',
      last_login: 'Last Login',
      description: 'Description',
      available_online: 'Available Online'
    },
    status: {
      disabled: 'Disabled',
      active: 'Active'
    },
    delete: {
      title: 'Delete user',
      content: 'Are you sure you want to delete this user: {username}?',
      button: 'Delete'
    }
  },
  settings: {
    title: 'Settings',
    options: {
      general: 'General',
      users: 'Users',
      groups: 'Roles'
    }
  },
  i: {
    locale: 'en-US',
    select: {
      placeholder: 'Select',
      noMatch: 'No matching data',
      loading: 'Loading'
    },
    table: {
      noDataText: 'No Data',
      noFilteredDataText: 'No filter data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All'
    },
    datepicker: {
      selectDate: 'Select date',
      selectTime: 'Select time',
      startTime: 'Start Time',
      endTime: 'End Time',
      clear: 'Clear',
      ok: 'OK',
      datePanelLabel: '[mmmm] [yyyy]',
      month: 'Month',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      year: 'Year',
      weekStartDay: '0',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat'
      },
      months: {
        m1: 'Jan',
        m2: 'Feb',
        m3: 'Mar',
        m4: 'Apr',
        m5: 'May',
        m6: 'Jun',
        m7: 'Jul',
        m8: 'Aug',
        m9: 'Sep',
        m10: 'Oct',
        m11: 'Nov',
        m12: 'Dec'
      },
      format: 'dd/MM/yyyy'
    },
    transfer: {
      titles: {
        source: 'Source',
        target: 'Target'
      },
      filterPlaceholder: 'Search here',
      notFoundText: 'Not Found'
    },
    modal: {
      okText: 'OK',
      cancelText: 'Cancel'
    },
    poptip: {
      okText: 'OK',
      cancelText: 'Cancel'
    },
    page: {
      prev: 'Previous Page',
      next: 'Next Page',
      total: 'Total',
      item: 'item',
      items: 'items',
      prev5: 'Previous 5 Pages',
      next5: 'Next 5 Pages',
      page: '/page',
      goto: 'Goto',
      p: ''
    },
    rate: {
      star: 'Star',
      stars: 'Stars'
    },
    time: {
      before: ' ago',
      after: ' after',
      just: 'just now',
      seconds: ' seconds',
      minutes: ' minutes',
      hours: ' hours',
      days: ' days'
    },
    tree: {
      emptyText: 'No Data'
    }
  },
  wangEditor: {
    插入: 'Insert',
    默认: 'Default',
    创建: 'Create',
    修改: 'Edit',
    如: 'like',
    请输入正文: 'Please enter the text',
    menus: {
      title: {
        标题: 'Headers',
        加粗: 'Bold',
        字号: 'Font Size',
        字体: 'Font Type',
        斜体: 'Italic',
        下划线: 'Underscore',
        删除线: 'Strikethrough',
        缩进: 'Indentation',
        行高: 'Line Height',
        文字颜色: 'Text Color',
        背景色: 'Background Color',
        链接: 'Link',
        序列: 'Sequence',
        对齐: 'Align',
        引用: 'Quote',
        表情: 'Emoji',
        图片: 'Image',
        视频: 'Video',
        表格: 'Table',
        代码: 'Code',
        分割线: 'Divider',
        恢复: 'Restore',
        撤销: 'Cancel',
        全屏: 'Fullscreen',
        待办事项: 'To-do'
      },
      dropListMenu: {
        设置标题: 'Titles',
        背景颜色: 'Background',
        文字颜色: 'Font Color',
        设置字号: 'Font Size',
        设置字体: 'Font Family',
        设置缩进: 'Indent',
        对齐方式: 'Align',
        设置行高: 'Line height',
        序列: 'List',
        head: {
          正文: 'Normal'
        },
        indent: {
          增加缩进: 'Indent',
          减少缩进: 'Outdent'
        },
        justify: {
          靠左: 'Left',
          居中: 'Center',
          靠右: 'Right',
          两端: 'Justify'
        },
        list: {
          无序列表: 'Unordered',
          有序列表: 'Ordered'
        }
      },
      panelMenus: {
        删除: 'Delete',
        emoticon: {
          默认: 'Default',
          新浪: 'Sina',
          emoji: 'Emoji',
          手势: 'Gesture'
        },
        image: {
          图片链接: 'Image link',
          上传图片: 'Upload image',
          网络图片: 'Network image'
        },
        link: {
          链接: 'Link',
          链接文字: 'Link text',
          删除链接: 'Delete',
          查看链接: 'Open',
          取消链接: 'Disconnect'
        },
        video: {
          插入视频: 'Insert Video'
        },
        table: {
          行: 'Row',
          列: 'Column',
          的: ' ',
          表格: 'Table',
          添加行: 'add row',
          删除行: 'delete row',
          添加列: 'add column',
          删除列: 'delete column',
          设置表头: 'set header',
          取消表头: 'cancel header',
          插入表格: 'insert table',
          删除表格: 'delete table'
        },
        code: {
          删除代码: 'delete code',
          修改代码: 'edit code',
          插入代码: 'insert code'
        }
      }
    },
    validate: {
      张图片: 'images',
      大于: 'greater than',
      图片链接: 'image link',
      不是图片: 'is not image',
      返回结果: 'return results',
      上传图片超时: 'upload image timeout',
      上传图片错误: 'upload image error',
      上传图片失败: 'upload image failed',
      插入图片错误: 'insert image error',
      一次最多上传: 'once most at upload',
      下载链接失败: 'download link failed',
      图片验证未通过: 'image validate failed',
      服务器返回状态: 'server return status',
      上传图片返回结果错误: 'upload image return results error',
      请替换为支持的图片类型: 'please replace with a supported image type',
      您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
      您刚才插入的图片链接未通过编辑器校验: 'the image link you just inserted did not pass the editor verification'
    }
  }
}
