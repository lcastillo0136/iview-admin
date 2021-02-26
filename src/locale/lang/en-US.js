export default {
  home: {
    title: 'Home',
    new_users: 'New Users',
    total_clicks: 'Total Clicks',
    total_QnA: 'Total Q&A',
    total_share: 'Total Share',
    total_chat: 'Total Chat',
    total_pages: 'Total Pages',
    total_interview: 'Total Interviews',
    email_marketing: 'Email Marketing',
    affiliate_advertising: 'Affiliate Advertising',
    video_advertising: 'Video Advertising',
    search_engine: 'Search Engine',
    users_access: 'Users Access',
    users_activity: 'Users Activity'
  },
  example: {
    total: 'Total',
    carrier_network: 'Carrier/Network Services',
    bank_securities: 'Bank/Securities',
    gaming_video: 'Gaming/Video',
    catering_takeaway: 'Catering/Takeaway',
    courier_ecommerce: 'Courier/e-commerce'
  },
  login: {
    title: 'Login',
    form: {
      title: 'Login please',
      username: 'Please enter your username',
      password: 'Please enter your password',
      login: 'Login',
      logout: 'Logout'
    },
    messages: {
      error: {
        username: 'Username cannot be empty',
        password: 'Password cannot be empty',
        email: 'Invalid email format',
        wrong_user_password: 'Wrong username or password',
        unauthorized: 'Unauthorized. You can\'t access',
        user_inactive: 'Please activate your account',
        email_no_verified: 'Please validate your email',
        please_accept_terms: 'Please accept our terms and conditions'
      }
    },
    tips: {
      bottom: 'Enter any username and password'
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
    title: 'Internationalization',
    modalTitle: 'Modal Title',
    content: 'This is the modal box content.',
    buttonText: 'Show Modal',
    tip: 'Note: Only this page is multi-language, other pages do not add language content to the multi-language package.',
    select_date: 'Select date',
    select_time: 'Select time'
  },
  join: {
    title: 'Community',
    qq_number: 'QQ Group number: {number}',
    zhihu_column: 'iView meet the column',
    juejin: 'Juejin',
    bilibili: 'Event Live Room',
    twitter: 'Twitter'
  },
  treeSelect: {
    update_selected_data: 'Update selected data',
    update_tree_data: 'Update tree data'
  },
  countTo: {
    title: 'Count-to component basic usage',
    total: 'Total',
    times: 'times',
    left_right: 'Add left and right text',
    custom_style: 'Custom style',
    format_data: 'Format he data',
    convert_data: 'Convert units to simplify data',
    custom_units: {
      title: 'Custom units',
      raw: 'Raw data：{number} => '
    },
    async_data: 'Data can be updated asynchronously',
    example: 'Comprehensive example',
    qty: {
      thousand: 'Thousand',
      tenthousand: 'Ten thousand',
      over_hundred_thousand: 'Over 100,000',
      over_million: 'Over a million',
      over_ten_million: 'Over ten million',
      billion: 'Billion',
      dozen: 'Dozen',
      hundred: 'Hundred'
    }
  },
  dragList: {
    toDo: 'To-Do',
    completion: 'Completion',
    operation_record: 'Operation record'
  },
  dragDrawer: {
    content: 'drawer component is an encapsulation of the iview\'s drawer component. It supports draggable and footer bottom slots on the basis of supporting all apis of the drawer',
    direction: 'Direction',
    left: 'left',
    right: 'Right',
    whether_draggable: 'Whether draggable',
    close: 'Shutdown',
    open: 'Turn On',
    container_drawer: 'Container Drawer',
    open_fullscreen: 'Open fullscreen',
    example: {
      title: 'This is the title'
    },
    show_miltilayer: 'Show multiple layers'
  },
  orgTree: {
    documentation: 'Documentation',
    menu: {
      editorial_department: 'Editorial Department',
      view_department: 'View Department',
      new_sector: 'New sub-sector',
      delete_department: 'Delete department',
      click: 'Clicked on the \'{key}\' menu of the "{label}" node'
    }
  },
  treeTable: {
    name: 'Tree table component',
    based_on: 'based on',
    develop: 'develop',
    fixed_some: 'Fixed some bugs',
    add_features: 'Added some new attributes',
    supported_slot: 'Supported use',
    perfom_custom_column: 'Perform custom column rendering',
    see_documentation: 'See the documentation',
    columns: {
      name: 'Name',
      gender: 'Gender',
      score: 'Score',
      likes: 'Likes'
    }
  },
  cropper: {
    button: 'Confirm Submit',
    button_crop: 'Crop',
    upload_image: 'Upload Image',
    messages: {
      success: {
        upload: 'Upload success~'
      }
    }
  },
  table: {
    export_csv: 'Export as Csv file',
    columns: {
      name: 'Name',
      email: 'Email',
      create_time: 'Create-Time',
      handle: 'Handle',
      delete_message: 'Are you sure you want to delete?',
      delete_button: 'Custom delete'
    },
    search_placeholder: 'Enter keyword search',
    search_button: 'Search For'
  },
  richEditor: {
    button: 'Modify editor content'
  },
  icons: {
    builtin_icon: 'iView built-in icon',
    feature: 'The Icons component supports the display of custom icons. For the creation of custom icon font files, please refer to the document.',
    feature2: 'CommonIcon component supports both iView built-in icon type and custom icon type. In order to distinguish these two types, you need to underline the custom icon name"_"'
  },
  uploadTable: {
    upload_csv: 'Upload Csv file',
    tip_upload: 'Click to upload Csv file',
    utilsjs: {
      tip: 'util.js provides two methods to achieve this function',
      get_array: 'Parsing a Csv file into a two-dimensional array',
      get_table: 'Convert two-dimensional arrays into tabular data, see the documentation for details'
    },
    csv_first_row: 'First row is header',
    only_csv_files: 'Can only upload Csv files',
    only_csv_files_again: 'Only Csv files can be uploaded, please upload again'
  },
  pasteTable: {
    paste_tip: 'Use the Tab key to change columns, use the Enter key to wrap',
    show_data: 'Show tabular data',
    messages: {
      error: {
        irregular: 'Your content is irregular',
        row_irregular: 'Your {errorIndex} row data is irregular, please modify'
      }
    }
  },
  uploadExcel: {
    title: 'Import Excel',
    upload_file: 'Upload files',
    success: 'Success',
    messages: {
      info: {
        file_deleted: 'The uploaded file has been deleted！'
      },
      error: {
        file_type: 'File type error',
        no_excel: 'File：{name} not an excel file，please select an excel file with a .xlsx or .xls extension。',
        reading: 'File reading error'
      },
      success: {
        read: 'File read successfully'
      }
    }
  },
  exportExcel: {
    title: 'Export Excel',
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
    add_label: 'Add Label',
    dynamic_routing: 'Dynamic routing',
    add: 'Add ',
    parameter: 'parameter',
    close_this: 'Close the tool method page',
    close_manually: 'Close the page manually'
  },
  arguPage: {
    params: {
      close_button: 'Call closeTag method to close this page'
    },
    query: {
      close_button: 'Call closeTag method to close this page'
    }
  },
  errorStore: {
    content1: 'iview-admin will automatically collect errors in your program, you can send the error log to the backend to save it. If you do not need this feature, delete the \'error-store\' attribute of the plugin in \'./src/config/index.js\'.',
    content2: 'In addition, in the development environment, errors in your program will be collected. This may not help you troubleshoot errors. You can change \'./src/config/index.js\'\'error-store\'\'developmentOff\' is set to true.',
    content3: 'If you just want to collect error logs and don\'t want logged in users to see the error logs, you can not provide an entry to view the logs, just add \'./src/config/index.js\' \'error-store\' \'ShowInHeader\' is set to false.',
    click_test_error: 'Click test trigger error',
    click_test_ajax_error: 'Click test triggers ajax interface request error',
    ajax_error_404: 'The ajax interface request is a non-existing interface for the easy-mock request, so the server will report a 404 error, and the error collection mechanism will collect this error. There is a certain network delay during the test, so it will be collected after you click the button. error.'
  },
  errorLogger: {
    button_export: 'Export logging',
    logger_note: 'Note: Only the error log saved to the server will be displayed here, and the page error log will not be stored persistently in the browser, and the page will be lost when refresh',
    columns: {
      serial_number: 'Serial Number',
      type: 'Type',
      code: 'Code',
      information: 'Information',
      url: 'URL',
      time: 'Time'
    },
    file_name: 'Error log'
  },
  directives: {
    show_modal: 'Show draggable popup',
    this_button_draggable: 'This button is also draggable',
    modal_title: 'Title',
    drag_here: 'Drag here to drag the entire popup',
    copy_button: 'Copy',
    copy_succed: 'Copy succeeded',
    copy_failedd: 'Copy failed',
    entered_input: 'This is what is entered'
  },
  multilevel: {
    level: {
      menu: 'Multi-level menu',
      second: 'Level-{second}',
      third: 'Level {third}-{forth}'
    }
  },
  messageCenter: {
    unread_message: 'Unread messages',
    read_message: 'Read messages',
    recycle_bin: 'Recycle Bin',
    title_delete: 'Delete',
    title_restore: 'Restore'
  },
  menu: {
    components: {
      title: 'Components',
      submenu: {
        tree_select_page: {
          title: 'Tree Selector'
        },
        count_to_page: {
          title: 'Count-to'
        },
        drag_list_page: {
          title: 'Drag-list'
        },
        drag_drawer_page: {
          title: 'Draggable Drawer'
        },
        org_tree_page: {
          title: 'Org Tree'
        },
        tree_table_page: {
          title: 'Tree Table'
        },
        cropper_page: {
          title: 'Cropper'
        },
        tables_page: {
          title: 'Table'
        },
        split_pane_page: {
          title: 'Split-pane'
        },
        markdown_page: {
          title: 'Markdown-editor'
        },
        editor_page: {
          title: 'Rich-Text-Editor'
        },
        icons_page: {
          title: 'Custom-icon'
        }
      }
    },
    img_cropper_page: 'Image-editor',
    update: {
      title: 'Update',
      submenu: {
        update_table_page: {
          title: 'Update .CSV'
        },
        update_paste_page: {
          title: 'Paste Table Data'
        }
      }
    },
    join_page: {
      title: 'QQ Group'
    },
    doc: {
      title: 'Document'
    },
    multilevel: {
      title: 'Multilevel',
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
      title: 'Directive'
    },
    excel: {
      title: 'Excel',
      submenu: {
        'upload-excel': {
          title: 'Upload Excel'
        },
        'export-excel': {
          title: 'Export Excel'
        }
      }
    },
    pdf: {
      title: 'PDF',
      submenu: {
        'upload-pdf': {
          title: 'Upload PDF'
        },
        'export-pdf': {
          title: 'Export PDF'
        }
      }
    },
    tools_methods_page: {
      title: 'Tools Methods'
    },
    error_store_page: {
      title: 'Error Collection'
    },
    error_logger_page: {
      title: 'Error Logger'
    },
    query: 'Query',
    params: 'Params'
  },
  top: {
    message_page: {
      title: 'Message Center'
    },
    fullscreen: {
      open: 'Fullscreen',
      exit: 'Exit fullscreen'
    },
    tags: {
      close_all: 'Close All',
      close_other: 'Close Others'
    }
  },
  date: {
    week: {
      Mon: 'Mon',
      Tue: 'Tue',
      Wed: 'Wed',
      Thu: 'Thu',
      Fri: 'Fri',
      Sat: 'Sat',
      Sun: 'Sun'
    }
  },
  modal: {
    close: {
      title: 'Are you sure you want to close this page?'
    }
  },
  error: {
    401: {
      desc: 'Oh! You don\'t have access to navegate to this page...',
      go_home: 'Go back home',
      go_back: 'Go back last page'
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
        update: 'User account updated'
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
        empty_group_name: 'Please input an name for the user group'
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
      name: 'Name',
      description: 'Description',
      available_online: 'Available Online',
      button: 'Create'
    },
    edit: {
      title: 'Edit user group',
      button: 'Edit'
    }
  },
  permissions: {
    title: 'Permissions',
    button: {
      open_modal: 'Permissions'
    },
    controllers: {
      ManagePermission: 'Permissions Managment',
      UserGroups: 'Users Groups',
      Users: 'Users'
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
      format: 'MM/dd/yyyy'
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
