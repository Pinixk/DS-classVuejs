import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routes/index'
import axios from 'axios'

createApp.config.productionTip = false
createApp.prototype.$http = axios

const app = createApp({
   render: h => h(App),
   router,
})

app.mount('#app')
