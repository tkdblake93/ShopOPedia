<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: APP_ROUTE_NAMES.HOME }">
        <img src="../../assets/logo.png" style="width: 40px" class="mx-3" alt="ShopOPedia" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.HOME }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.PRODUCT_LIST }"
              >Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.CONTACT_US }"
              >Contact Us</router-link
            >
          </li>
        </ul>
        <ul class="d-flex navbar-nav">
          <li class="nav-link" v-if="authStore.isAuthenticated">
            Welcome, {{ authStore.user?.email }}
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-laptop"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <button @click="themeStore.setTheme('light')" class="dropdown-item">
                  <i class="bi bi-sun"></i>
                  &nbsp;&nbsp;Light
                </button>
              </li>
              <li>
                <button @click="themeStore.setTheme('dark')" class="dropdown-item">
                  <i class="bi bi-moon-stars-fill"></i>
                  &nbsp;&nbsp;Dark
                </button>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="!authStore.isAuthenticated">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.SIGN_IN }"
              >Sign In</router-link
            >
          </li>
          <li class="nav-item" v-if="!authStore.isAuthenticated">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: APP_ROUTE_NAMES.SIGN_UP }"
              >Sign Up</router-link
            >
          </li>
          <li class="nav-item" v-if="authStore.isAuthenticated">
            <button
              class="nav-link"
              @click="[authStore.signOutUser(), router.push({ name: APP_ROUTE_NAMES.HOME })]"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/themeStore'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const themeStore = useThemeStore()
const router = useRouter()
</script>
