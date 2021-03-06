export default {
  home: {
    title: 'Inicio',
    new_users: 'Nuevos usuarios',
    total_clicks: 'Total clicks',
    total_QnA: 'Total PyR',
    total_share: 'Veces Compartidas',
    total_chat: 'Mensajes Totales',
    total_pages: 'páginas Totales',
    total_interview: 'Entrevistas Totales',
    email_marketing: 'Correo Publicidad',
    affiliate_advertising: 'Publicidad Afiliada',
    video_advertising: 'Publicidad Video',
    search_engine: 'Motor de busqueda',
    users_access: 'Acceso de usuarios',
    users_activity: 'Actividad de usuarios'
  },
  example: {
    total: 'Total',
    carrier_network: 'Servicios de operador/Red',
    bank_securities: 'Banco/Valoes',
    gaming_video: 'Juegos/Video',
    catering_takeaway: 'Catering/Comida para llevar',
    courier_ecommerce: 'Mensajería/e-commerce'
  },
  login: {
    title: 'Entrar en sesion',
    form: {
      title: 'Ingresa, por favor',
      username: 'Por favor, ingrese su nombre de usuario',
      password: 'Por favor, ingrese su contraseña',
      login: 'Iniciar Sesion',
      logout: 'Cerrar Sesion'
    },
    messages: {
      error: {
        username: 'El nombre de usaurio no puede estar vacío',
        password: 'La contraseña no puede estar vacía',
        email: 'Formato de email invalido',
        wrong_user_password: 'Nombre de usuario o contraseña incorrectos',
        unauthorized: 'No se puede acceder al sistema',
        user_inactive: 'Favor de activar su cuenta',
        email_no_verified: 'Favor de verificar su correo electrónico',
        please_accept_terms: 'Favor de aceptar nuestros términos y condiciones'
      }
    },
    tips: {
      bottom: 'Captura cualquier usuario y contraseña'
    }
  },
  logout: {
    messages: {
      error: {
        unauthorized: 'Imposible salir del sistema',
        unable_logout: 'Error al cerrar sesion. No se puede salir del sistema'
      }
    }
  },
  i18n: {
    title: 'Internaciónalización',
    content: 'este es el contenido del modal.',
    modalTitle: 'Titulo Modal',
    buttonText: 'Mostrar Modal',
    tip: 'Nota: Solo esta página es multi-languaje, otras páginas no agregan contenido de lenguaje al paquete multi-languaje.',
    select_date: 'Seleccióna fecha',
    select_time: 'Seleccióna el tiempo'
  },
  join: {
    title: 'Comunidad',
    qq_number: 'QQ Numero de grupo: {number}',
    zhihu_column: 'iView conoce la columna',
    juejin: 'Juejin',
    bilibili: 'Sala de eventos en vivo',
    twitter: 'Twitter'
  },
  treeSelect: {
    update_selected_data: 'Actualizar datos selecciónados',
    update_tree_data: 'Actualizar datos del árbol'
  },
  countTo: {
    title: 'Count-to uso basico del componente',
    total: 'Total',
    times: 'de veces',
    left_right: 'Agregar texto izq. y der.',
    custom_style: 'Estilo personalizado',
    format_data: 'Formato de datos',
    convert_data: 'Convertir unidades para simplificar datos',
    custom_units: {
      title: 'Unidades personalizadas',
      raw: 'Datos sin procesar：{number} => '
    },
    async_data: 'Los datos pueden ser actualizados asyncronamente',
    example: 'Ejemplo completo',
    qty: {
      thousand: 'Mil',
      tenthousand: 'Diez mil',
      over_hundred_thousand: 'arriba de 100,000',
      over_million: 'arriba del millon',
      over_ten_million: 'arriba de diez millones',
      billion: 'Billon',
      dozen: 'Dozena',
      hundred: 'Cien'
    }
  },
  dragList: {
    toDo: 'To-Do',
    completion: 'Completion',
    operation_record: 'Operation record'
  },
  dragDrawer: {
    content: 'El componente drawer es una encapsulación del componente drawer dentro de iview. Adminte ranuras arrastrables y de pie de página con base en el soporte de todas las apis del drawer',
    direction: 'Dirección',
    left: 'Izq',
    right: 'Der',
    whether_draggable: 'Arrastrable',
    close: 'Apagar',
    open: 'Encender',
    container_drawer: 'Contenedor Drawer',
    open_fullscreen: 'Abrir en pantalla completa',
    example: {
      title: 'Este es el titulo'
    },
    show_miltilayer: 'Mostrar múltiples capas'
  },
  orgTree: {
    documentation: 'Documentación',
    menu: {
      editorial_department: 'Departamento Editorial',
      view_department: 'Ver Departamento',
      new_sector: 'Nuevo subsector',
      delete_department: 'Eliminar Departamento',
      click: 'Click en el menu \'{key}\' del nodo "{label}"'
    }
  },
  treeTable: {
    name: 'Componente Tree Table',
    based_on: 'basado en',
    develop: '',
    fixed_some: 'Varios errores arreglados',
    add_features: 'Agregadas nuevas funciónalidades',
    supported_slot: 'Soporta el uso',
    perfom_custom_column: 'para realizar renderizado de columna personalizado',
    see_documentation: 'Ver la documentación',
    columns: {
      name: 'Nombre',
      gender: 'Genero',
      score: 'Puntuación',
      likes: 'Hobbies'
    }
  },
  cropper: {
    button: 'Confirmar Envio',
    button_crop: 'Cortar',
    upload_image: 'Cargar Imagen',
    messages: {
      success: {
        upload: 'Imagen guardada~'
      }
    }
  },
  table: {
    export_csv: 'Exportar como archivo .Csv',
    columns: {
      name: 'Nombre',
      email: 'Email',
      create_time: 'Fecha de Creación',
      handle: 'Acciónes',
      delete_message: '¿Estas seguro que lo quieres eliminar?',
      delete_button: 'Eliminar personalizado'
    },
    search_placeholder: 'Buscar por palabra clave',
    search_button: 'Buscar'
  },
  richEditor: {
    button: 'Modificar contenido del editor'
  },
  icons: {
    builtin_icon: 'icono incorporado de iView',
    feature: 'El componente Icons soporta mostrar iconos personalizados. Para la creación de fuentes con iconos personalizados, por favor refiérase a la documentación.',
    feature2: 'El componente CommonIcon soporta ambos icono incorporado tipo iView y tipo personalizado. Para distinguir estos dos tipos, necesita agregar un guion-bajo al nombre del icono personalizado "_"'
  },
  uploadTable: {
    upload_csv: 'Subir archivo .Csv',
    tip_upload: 'Sube le archivo .Csv con el boton',
    utilsjs: {
      tip: 'util.js usa dos funcióneas para completar esta acción',
      get_array: 'Convierte un archivo .Csv en una matriz bidimenciónal',
      get_table: 'Convierte una matriz bidimenciónal en datos tabulares, consulta la documentación para mas detalles'
    },
    csv_first_row: 'Primera linea es cabezera',
    only_csv_files: 'Solo se pueden subir archivos .Csv',
    only_csv_files_again: 'Solo archivos .Csv son permitidos, por favor intente de nuevo.'
  },
  pasteTable: {
    paste_tip: 'Usa la tecla \'Tab\' para cambiar de columnas, usa la tecla \'Enter\' para ajustar el texto',
    show_data: 'Mostrar datos tabulares',
    messages: {
      error: {
        irregular: 'Tu contenido es irregular',
        row_irregular: 'Tu información en la fila {errorIndex} es irregular，por favor modificalo'
      }
    }
  },
  uploadExcel: {
    title: 'Importar Excel',
    upload_file: 'Subir archivos',
    success: 'Éxito',
    messages: {
      info: {
        file_deleted: 'El archivo a sido eliminado！'
      },
      error: {
        file_type: 'Tipo de archivo invalido',
        no_excel: 'Archivo：{name} no es un archivo de excel，por favor elija un archivo con extensión .xlsx o .xls。',
        reading: 'Error extrayendo información del archivo'
      },
      success: {
        read: 'Información leida correctamente'
      }
    }
  },
  exportExcel: {
    title: 'Exportar Excel',
    export_file: 'Exportar Archivo',
    example: {
      columns: {
        primary: 'Clasificación primaria',
        secondary: 'Clasificación secundaria',
        tertiary: 'Clasificación terciaria'
      },
      result: 'Lista de categorias'
    },
    messages: {
      error: {
        empty: 'El formulario no puede estar vacío！'
      }
    }
  },
  uploadPDF: {
    title: 'Importar PDF',
    upload_file: 'Subir archivos',
    success: 'Éxito',
    messages: {
      info: {
        file_deleted: '¡El archivos a sido eliminado！'
      },
      error: {
        file_type: 'Tipo de archivo invalido',
        no_pdf: 'Archivo：{name} no es un archivo de pdf，por favor elija un archivo con extensión .pdf。',
        reading: 'Error extrayendo información del archivo'
      },
      success: {
        read: 'Información leida correctamente'
      }
    }
  },
  exportPDF: {
    title: 'Exportar PDF',
    export_file: 'Exportar Archivo',
    example: {
      columns: {
        primary: 'Clasificación primaria',
        secondary: 'Clasificación secundaria',
        tertiary: 'Clasificación terciaria'
      },
      result: 'Lista de categorias'
    },
    messages: {
      error: {
        empty: 'El formulario no puede estar vacío！'
      }
    }
  },
  toolsMethods: {
    add_label: 'Agregar etiqueta',
    dynamic_routing: 'Router dynamico',
    add: 'Agregar ',
    parameter: 'Parameter',
    close_this: 'Cerrar página Tools Methods',
    close_manually: 'Cerrar página manualmente'
  },
  arguPage: {
    params: {
      close_button: 'Llama la función \'closeTag\' para cerrar esta página'
    },
    query: {
      close_button: 'Llama la función \'closeTag\' para cerrar esta página'
    }
  },
  errorStore: {
    content1: 'iview-admin automaticamente recogera errores en tu programa, puedes enviar el registro de errores al back-end para guardarlo. Si no necesitas esta mejora, elimina el atributo \'error-store\' del plugin en esta ruta \'./src/config/index.js\'.',
    content2: 'Adiciónalemnte, en el ambiente de desarrollo, los errores en tu programa seran recogidos. Esto puede no ayudarte a corregir los errores. Tu puedes cambiar \'./src/config/index.js\'\'error-store\'\'developmentOff\' y ponerlo en true.',
    content3: 'Si tu quieres recoger errores en el registro y no buscas que usuarios en sesion vean el registro de errores, puedes negarles el acceso a la vista de registros, solo agrega \'./src/config/index.js\' \'error-store\' \'ShowInHeader\' y ponerlo en false.',
    click_test_error: 'Click para probar el disparo de error',
    click_test_ajax_error: 'Click para probar la funciónalidad request de ajax respondiendo error',
    ajax_error_404: 'La interface de peticiónes ajax es una interfaz no existente para el easy-mock request, por lo tanto el servidor responera un error 404, y el mecanismo recolector de errores cachara este error. Existe un cierto retardo de red durante la prueba, por lo tanto sera recolectado despues de que le des al boton de error.'
  },
  errorLogger: {
    button_export: 'Exportar Registros',
    logger_note: 'Nota: Solo los registros mostrados aqui seran los que se guarden en el servidor, y el listado no se quedara persistente en el navegador, la información sera eliminada cuando se recargue la página',
    columns: {
      serial_number: 'Numero de Serie',
      type: 'Tipo',
      code: 'Codigo',
      information: 'Información',
      url: 'URL',
      time: 'Hora / Fecha'
    },
    file_name: 'Error log'
  },
  directives: {
    show_modal: 'Mostrar ventana emergente arrastrable',
    this_button_draggable: 'Este botón también es arrastrable',
    modal_title: 'Titulo',
    drag_here: 'Agarra aquí para arrastrar toda la ventana emergente',
    copy_button: 'Copiar',
    copy_succed: 'Copia exitosa',
    copy_failedd: 'Copia fallida',
    entered_input: 'Esto es lo que se ingresa'
  },
  multilevel: {
    level: {
      menu: 'Multi-nivel menu',
      second: 'Nivel-{second}',
      third: 'Nivel {third}-{forth}'
    }
  },
  messageCenter: {
    unread_message: 'Mensajes sin leer',
    read_message: 'Mensajes leidos',
    recycle_bin: 'Basura',
    title_delete: 'Borrar',
    title_restore: 'Restaurar'
  },
  menu: {
    components: {
      title: 'Componentes',
      submenu: {
        tree_select_page: {
          title: 'Selector tipo árbol'
        },
        count_to_page: {
          title: 'Contador'
        },
        drag_list_page: {
          title: 'Listas arrastrable'
        },
        drag_drawer_page: {
          title: 'Modal Lateral'
        },
        org_tree_page: {
          title: 'Árbol organigrama'
        },
        tree_table_page: {
          title: 'Tabla tipo árbol'
        },
        cropper_page: {
          title: 'Cortador de imagen'
        },
        tables_page: {
          title: 'Tablas'
        },
        split_pane_page: {
          title: 'Panel con división'
        },
        markdown_page: {
          title: 'Editor de marcado'
        },
        editor_page: {
          title: 'Editor texto enriquecido'
        },
        icons_page: {
          title: 'Iconos personalizados'
        }
      }
    },
    img_cropper_page: 'Editor-Imagen',
    update: {
      title: 'Actualizar',
      submenu: {
        update_table_page: {
          title: 'Cargar .CSV'
        },
        update_paste_page: {
          title: 'Pegar datos de tabla'
        }
      }
    },
    join_page: {
      title: 'Grupo QQ'
    },
    doc: {
      title: 'Documentación'
    },
    multilevel: {
      title: 'Multi-nivel',
      submenu: {
        level_1: {
          title: 'Nivel-1'
        },
        level_2: {
          title: 'Nivel-2'
        },
        level_2_1: {
          title: 'Nivel-2-1'
        },
        level_2_3: {
          title: 'Nivel-2-3'
        },
        level_2_2: {
          title: 'Nivel-2-2',
          submenu: {
            level_2_2_1: {
              title: 'Nivel-2-2-1'
            },
            level_2_2_2: {
              title: 'Nivel-2-2-2'
            }
          }
        }
      }
    },
    directive_page: {
      title: 'Directivas'
    },
    excel: {
      title: 'Excel',
      submenu: {
        'upload-excel': {
          title: 'Cargar Excel'
        },
        'export-excel': {
          title: 'Exportar Excel'
        }
      }
    },
    pdf: {
      title: 'PDF',
      submenu: {
        'upload-pdf': {
          title: 'Cargar PDF'
        },
        'export-pdf': {
          title: 'Exportar PDF'
        }
      }
    },
    tools_methods_page: {
      title: 'Métodos de herramientas'
    },
    error_store_page: {
      title: 'Colección de errores'
    },
    error_logger_page: {
      title: 'Registro de Errores'
    },
    query: 'Query',
    params: 'Params'
  },
  top: {
    message_page: {
      title: 'Centro de mensajes'
    },
    fullscreen: {
      open: 'Pantalla Completa',
      exit: 'Salir de pantalla completa'
    },
    tags: {
      close_all: 'Cerrar todo',
      close_other: 'Cerrar otras'
    }
  },
  date: {
    week: {
      Mon: 'Lun',
      Tue: 'Mar',
      Wed: 'Mie',
      Thu: 'Jue',
      Fri: 'Vie',
      Sat: 'Sab',
      Sun: 'Dom'
    }
  },
  modal: {
    close: {
      title: 'Esta seguro que quiere cerrar esta pagina?'
    }
  },
  error: {
    401: {
      desc: 'Oh! No tienes permiso para navegar a esta pagina...',
      go_home: 'Regresar a Inicio',
      go_back: 'Regresar a la página anterior'
    }
  },
  profile: {
    title: 'Mi Perfil',
    header: 'Perfil de usuario',
    card: {
      description: 'Descripción'
    },
    button: {
      add_address: 'Agregar un domicilio',
      edit_address: 'Editar',
      delete_address: 'Borrar'
    },
    personal_info: {
      title: 'Información Personal',
      first_name: 'Nombre(s)',
      name_title: {
        dr: 'Dr. (Doctor)',
        esq: 'Esq. (Esquire)',
        hon: 'Hon. (Honorable)',
        jr: 'Jr. (Junior)',
        mr: 'Mr.',
        mrs: 'Mrs.',
        ms: 'Ms.',
        msgr: 'Msgr. (Monseñor)',
        prof: 'Prof. (Profesor)',
        rev: 'Rev. (Reverendo)',
        rt_hon: 'Rt. Hon. (Derecho Honorable)',
        sr: 'Sr. (Señor)',
        st: 'St. (Santo)'
      },
      last_name: 'Apellido',
      email: 'Correo electrónico',
      phone: 'teléfono',
      gender: 'Genero',
      female: 'Femenino',
      male: 'Masculino',
      not_sure: 'No estoy seguro',
      rather_not_say: 'Prefiero no decir',
      other_pleasestate: 'Otro (por favor indicar)',
      gender_other: 'Otro',
      bday: 'Cumpleaños',
      bday_placeholder: 'Elige fecha',
      rfc: 'RFC',
      tel_oficina: 'Teléfono oficina',
      no_licencia: 'Licencia Profesional',
      profesion: 'Profesión',
      especialidad: 'Especialidad',
      biography: 'Biografía',
      address: {
        alias: 'Nombre',
        update_address: 'Actualizar domicilio',
        create_address: 'Agregar un domicilio',
        delete_address: 'Eliminar domicilio',
        delete_message: '¿Esta seguro de querer eliminar el domicilio seleccionado?',
        default: 'Favorito',
        street: 'Calle',
        city: 'Ciudad',
        suburb: 'Colonia / Asentamiento',
        township: 'Delegación / Municipio',
        exterior_number: 'N° exterior',
        interior_number: 'N° interior / Depto',
        state: 'Estado',
        country: 'País',
        directions: 'Indicaciones adicionales'
      }
    },
    account_info: {
      title: 'Información de cuenta',
      role: 'Nivel de usuario',
      active: 'Activo',
      username: 'Identifiación de usuario',
      status: 'Estatus',
      email_verified: 'Verificado',
      email_no_verified: 'Sin Verificar',
      email_verified_tooltip: 'Re-enviar correo de verificación',
      password: 'Contraseña',
      confirm_password: 'Confirmar contraseña'
    },
    messages: {
      error: {
        first_name: {
          empty_name: 'El nombre no puede estar vacío'
        },
        email: {
          empty_email: 'El correo electrónico no puede estar vacío',
          used_email: 'Correo electrónico usado en otra cuenta. Por favor intente con otro'
        },
        user_group_id: {
          wrong_user_group: 'Nivel de usuario desconocido',
          empty_group_id: 'Nivel de usuario no puede estar vacío'
        },
        username: {
          empty_username: 'Identifiación de usuario no puede estar vacío'
        },
        password: {
          empty_confirm: 'Favor de confirmar la contraseña',
          confirm_dont_match: 'Las contraseñas no coinciden',
          empty_password: 'Favor de capturar una contraseña'
        },
        not_found: 'Usuario no encontrado',
        too_much_calls: 'Demasiados intentos, espere antes de probarlo de nuevo'
      },
      success: {
        update: 'Información de usuario actualizada'
      }
    }
  },
  usersRoles: {
    title: 'Grupos de usuarios',
    tabs: {
      groups: 'Grupos',
      permissions: 'Permisos'
    },
    table: {
      name: 'Nombre',
      description: 'Descripción',
      available_online: 'Disponible en linea'
    },
    errors: {
      title: 'Error al guardar el grupo',
      name: {
        used_group_name: 'Este nombre de grupo ya esta en uso.',
        empty_group_name: 'Favor de capturar un nombre para el grupo'
      },
      create_error: 'Hubo un problema al crear el grupo.',
      load_data: 'Error al cargar los datos',
      update_switch: 'Error al actualizar: disponible en linea',
      delete_error: 'Error al borrar el grupo',
      add_error: 'Error al crear el grupo',
      edit_error: 'Error al editar el grupo',
      no_autorized: 'La session a expirado'
    },
    delete: {
      title: 'Confirmación de eliminación',
      content: '¿Esta seguro de eliminar el elemento?',
      button: 'Borrar'
    },
    add: {
      title: 'Crear nuevo grupo de usuario',
      name: 'Nombre',
      description: 'Descripción',
      available_online: 'Disponible en linea',
      button: 'Crear'
    },
    edit: {
      title: 'Editar grupo de usuario',
      button: 'Editar'
    }
  },
  users: {
    title: 'Usuarios',
    title_list: 'Lista de usuarios',
    user_count: 'usuarios',
    profile: {
      title: 'Perfil'
    },
    table: {
      name: 'Nombre',
      username: 'Usuario',
      role: 'Role',
      active: 'Estatus',
      last_login: 'Ultimo inicio de sesion',
      description: 'Descripción',
      available_online: 'Disponible en linea'
    },
    status: {
      disabled: 'Inactivo',
      active: 'Activo'
    },
    delete: {
      title: 'Confirmación de eliminación',
      content: '¿Esta seguro que desea eliminar el usuario: {username}?',
      button: 'Eliminar'
    }
  },
  settings: {
    title: 'Configuraciones',
    options: {
      general: 'General',
      users: 'Usuarios',
      groups: 'Roles'
    }
  },
  i: {
    locale: 'es-ES',
    time: {
      before: ' antes',
      after: ' despues',
      just: 'justo ahora',
      seconds: ' segundos',
      minutes: ' minutos',
      hours: ' horas',
      days: ' dias'
    },
    select: {
      placeholder: 'Selecciona',
      noMatch: 'Sin datos coincidentes',
      loading: 'Cargando'
    },
    datepicker: {
      selectDate: 'Selecciona fecha',
      selectTime: 'Selecciona tiempo',
      startTime: 'Hora de Inicio',
      endTime: 'Hora Final',
      clear: 'Limpiar',
      ok: 'OK',
      datePanelLabel: '[mmmm] [yyyy]',
      month: 'Mes',
      month1: 'Enero',
      month2: 'Febrero',
      month3: 'Marzo',
      month4: 'Abril',
      month5: 'Mayo',
      month6: 'Junio',
      month7: 'Julio',
      month8: 'Agosto',
      month9: 'Septiembre',
      month10: 'Ovtubre',
      month11: 'Noviembre',
      month12: 'Diciembre',
      year: 'Año',
      weekStartDay: '0',
      weeks: {
        sun: 'Dom',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mie',
        thu: 'Jue',
        fri: 'Vie',
        sat: 'Sab'
      },
      months: {
        m1: 'Ene',
        m2: 'Feb',
        m3: 'Mar',
        m4: 'Abr',
        m5: 'May',
        m6: 'Jun',
        m7: 'Jul',
        m8: 'Ago',
        m9: 'Sep',
        m10: 'Oct',
        m11: 'Nov',
        m12: 'Dic'
      },
      format: 'dd/MM/yyyy'
    },
    table: {
      noDataText: 'Sin datos',
      noFilteredDataText: 'Sin filtros',
      confirmFilter: 'Confirmar',
      resetFilter: 'Borrar',
      clearFilter: 'Todos'
    },
    page: {
      prev: 'Página anterior',
      next: 'Página siguiente',
      total: 'Total',
      item: 'elemento',
      items: 'elementos',
      prev5: '- 5 páginas',
      next5: '+ 5 páginas',
      page: ' x página',
      goto: 'Ir',
      p: ''
    },
    modal: {
      cancelText: 'Cancelar',
      okText: 'Aceptar'
    }
  },
  wangEditor: {
    插入: 'Insertar',
    默认: 'Predeterminado',
    创建: 'Crear',
    修改: 'Editar',
    如: 'Como',
    请输入正文: 'Por favor ingrese el texto',
    menus: {
      title: {
        标题: 'Encabezados',
        加粗: 'Negrita',
        字号: 'Tamaño de fuente',
        字体: 'Tipo de fuente',
        斜体: 'Cursiva',
        下划线: 'Subrayado',
        删除线: 'Tachado',
        缩进: 'Sangría',
        行高: 'Altura de la fila',
        文字颜色: 'Color de Texto',
        背景色: 'Color de Fondo',
        链接: 'Enlace',
        序列: 'Secuencia',
        对齐: 'Alineación',
        引用: 'Citando',
        表情: 'Emoji',
        图片: 'Imagen',
        视频: 'Video',
        表格: 'Tabla',
        代码: 'Código',
        分割线: 'División',
        恢复: 'Restaurar',
        撤销: 'Cancelar',
        全屏: 'Pantalla Completa',
        待办事项: 'Tarea'
      },
      dropListMenu: {
        设置标题: 'Titulos',
        背景颜色: 'Fondos',
        文字颜色: 'Color Texto',
        设置字号: 'Tamaño Texto',
        设置字体: 'Tipo fuente',
        设置缩进: 'Sangría',
        对齐方式: 'Alinear',
        设置行高: 'Altura de linea',
        序列: 'Lista',
        head: {
          正文: 'Normal'
        },
        indent: {
          增加缩进: 'Aumentar Sangría',
          减少缩进: 'Disminuir Sangría'
        },
        justify: {
          靠左: 'Izquierda',
          居中: 'Centro',
          靠右: 'Derecha',
          两端: 'Ajustado'
        },
        list: {
          无序列表: 'Sin ordenar',
          有序列表: 'Ordenada'
        }
      },
      panelMenus: {
        删除: 'Eliminar',
        emoticon: {
          默认: 'Predeterminado',
          新浪: 'Sina',
          emoji: 'Emoji',
          手势: 'Gesture'
        },
        image: {
          图片链接: 'Enlace de imagen',
          上传图片: 'Texto de enlace',
          网络图片: 'Enlace ed red'
        },
        link: {
          链接: 'Enlace',
          链接文字: 'Texto de Enlace',
          删除链接: 'Eliminar',
          查看链接: 'Ver',
          取消链接: 'Desconectar'
        },
        video: {
          插入视频: 'Insertar Video'
        },
        table: {
          行: 'Filas',
          列: 'Columnas',
          的: '',
          表格: '',
          添加行: 'Agregar fila',
          删除行: 'Eliminar fila',
          添加列: 'Agregar columna',
          删除列: 'Eliminar columna',
          设置表头: 'Establecer encabezado',
          取消表头: 'Cancelar encabezado',
          插入表格: 'Insertar Tabla',
          删除表格: 'Eliminar Tabla'
        },
        code: {
          删除代码: 'Borrar codigo',
          修改代码: 'Editar codigo',
          插入代码: 'Insertar codigo'
        }
      }
    },
    validate: {
      张图片: 'Imagenes',
      大于: 'Mayor que',
      图片链接: 'Enlace de imagen',
      不是图片: 'no es imagen',
      返回结果: 'devolver resultados',
      上传图片超时: 'tiempo de carga excedido',
      上传图片错误: 'error de carga de imagen',
      上传图片失败: 'fallo la carga de imagen',
      插入图片错误: 'Error al insertar imagen',
      一次最多上传: 'una vez mas en la carga',
      下载链接失败: 'fallo el enlace de descarga',
      图片验证未通过: 'fallo validacion de imagen',
      服务器返回状态: 'estado del servidor',
      上传图片返回结果错误: 'upload image return results error',
      请替换为支持的图片类型: 'please replace with a supported image type',
      您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
      您刚才插入的图片链接未通过编辑器校验: 'the image link you just inserted did not pass the editor verification'
    }
  }
}
