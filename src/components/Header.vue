<template>
  <nav class="bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <!-- <div class="text-2xl font-bold text-red-600">
       MASALA MARVEL
    </div> -->
    <router-link to="">
      <img class="h-12" src="../assets/logo-1.png" alt="Masala Marvel">
    </router-link>

    <!-- Nav Links -->
    <ul class="flex space-x-6 text-white font-medium">
      <li>
        <router-link to="/" class="hover:text-red-600">Home</router-link>
      </li>
      <li>
        <router-link to="/menu" class="hover:text-red-600">Menu</router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:text-red-600">Contact</router-link>
      </li>
      <li>
        <!-- Redirect Book Table to /contact -->
        <router-link
          to="/contact"
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Book Table
        </router-link>
      </li>
    </ul>
  </nav>
</template>
