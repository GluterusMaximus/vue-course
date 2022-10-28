import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI/index.js'

const app = createApp(App)

for (const component of components) {
  app.component(component.name, component)
}

app.mount('#app')
