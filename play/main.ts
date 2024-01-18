import {createApp} from 'vue'
import App from './app.vue'
import WUi from '@web-drive-ui/components'

const app = createApp(App)

app.use(WUi).mount('#app')