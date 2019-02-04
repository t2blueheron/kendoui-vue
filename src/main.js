// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  Button,
  ButtonGroup,
  ToolBar,
  ToolBarItem,
  ButtonsInstaller
} from '@progress/kendo-buttons-vue-wrapper'
import {
  Chart,
  ChartInstaller
} from '@progress/kendo-charts-vue-wrapper'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

Vue.config.productionTip = false
Vue.use(ButtonsInstaller)
Vue.use(ChartInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Button,
    ButtonGroup,
    ToolBar,
    ToolBarItem,
    Chart
  }
})
