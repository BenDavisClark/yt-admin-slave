import '@/utils/amiya-init'
import { changeAntdTheme, generateThemeColor } from 'dynamic-antd-theme'

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: AnyKeyProps) {},
  // 应用 render 之前触发
  async mount(props: AnyKeyProps) {
    console.log(window.localStorage.getItem('THEME'))
    changeAntdTheme(generateThemeColor(window.localStorage.getItem('THEME')))
  },
  // 应用卸载之后触发
  async unmount(props: AnyKeyProps) {}
}
