import {createApp} from 'vue'
import App from './app.vue'
import WUi from '@web-driver-ui/components'

const app = createApp(App)

app.use(WUi).mount('#app')