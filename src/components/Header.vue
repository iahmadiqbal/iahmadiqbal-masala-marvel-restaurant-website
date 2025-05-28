<template>
  <nav class="bg-gray-900 shadow-md px-6 py-4">
    <div class="flex items-center justify-between">
      <router-link to="/">
        <img class="h-12" src="../assets/logo-1.png" alt="Masala Marvel" />
      </router-link>

      <!-- Mobile toggle button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-white font-medium">
        <li><router-link to="/" class="hover:text-red-600">Home</router-link></li>
        <li><router-link to="/menu" class="hover:text-red-600">Menu</router-link></li>
        <li><router-link to="/contact" class="hover:text-red-600">Contact</router-link></li>
        <li>
          <router-link
            to="/contact"
            class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Book Table
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <ul
      v-if="isOpen"
      class="md:hidden mt-4 flex flex-col space-y-4 text-white font-medium"
    >
      <li><router-link @click="isOpen = false" to="/" class="hover:text-red-600">Home</router-link></li>
      <li><router-link @click="isOpen = false" to="/menu" class="hover:text-red-600">Menu</router-link></li>
      <li><router-link @click="isOpen = false" to="/contact" class="hover:text-red-600">Contact</router-link></li>
      <li>
        <router-link
          @click="isOpen = false"
          to="/contact"
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition inline-block"
        >
          Book Table
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
