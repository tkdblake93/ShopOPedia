import { createApp, getTransitionRawChildren } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { auth } from './utility/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'
import router from './router/routes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useThemeStore } from './stores/themeStore'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
app.use(pinia)
app.use(router)

const themeStore = useThemeStore()
if (themeStore.theme) {
  const bodyElement = document.body
  bodyElement.setAttribute('data-bs-theme', themeStore.theme)
}

let isMounted = false

onAuthStateChanged(auth, async (user) => {
  if (!isMounted) {
    app.mount('#app')
    isMounted = true
  }
})
