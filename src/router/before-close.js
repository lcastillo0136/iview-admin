import { Modal } from 'iview'

const beforeClose = {
  before_close_normal: (vm) => {
    return new Promise(resolve => {
      Modal.confirm({
        title: vm.$t('modal.close.title'),
        onOk: () => {
          resolve(true)
        },
        onCancel: () => {
          resolve(false)
        }
      })
    })
  }
}

export default beforeClose
