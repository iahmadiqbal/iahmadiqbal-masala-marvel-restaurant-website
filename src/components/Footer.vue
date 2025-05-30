<template>
  <footer class="bg-gray-900 text-white px-6 py-10">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Address -->
      <div>
        <RouterLink to="/">
          <img class="h-12 md:mx-0 mb-2" src="../assets/logo-1.png" alt="Masala Marvel" />
        </RouterLink>
        <p>
          Holiday Village Rd,<br />
          Vakil Garden City,<br />
          Bengaluru, Karnataka - 560062
        </p>
      </div>

      <!-- Contact Info -->
      <div>
        <h2 class="text-xl font-bold mb-4">Contact</h2>

        <p class="mb-3">
          <font-awesome-icon class="mr-2 text-green-500" :icon="['fas', 'phone']" />
          <a href="tel:+919786948099">
            (+91) 9786948099
          </a>
        </p>

        <p>
          <font-awesome-icon class="mr-2 text-red-600" :icon="['fas', 'envelope']" />
          <a href="mailto:masalamarvel@gmail.com" class="hover:underline">
            masalamarvel@gmail.com
          </a>
        </p>
      </div>

      <!-- Timings & Social -->
      <div>
        <h2 class="text-xl font-bold mb-2">Opening Hours</h2>
        <p>Mon - Fri: 10am - 9pm</p>
        <p>Sat & Sun: 10am - 10pm</p>

        <!-- Social Icons -->
        <div class="flex md:justify-start gap-8 mt-4 text-2xl">
          <a href="#" class="text-blue-600 hover:text-blue-900">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="text-pink-500 hover:text-pink-700">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="text-blue-400 hover:text-blue-600">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Note -->
    <div class="text-center text-sm mt-8 text-gray-400">
      Masala Marvel &copy; 2025. All rights reserved.
    </div>
  </footer>
</template>
