<template>
  <!-- Section 1 (Original) -->
  <section class="bg-gradient-to-br from-red-50 via-red-100 to-white text-gray-800 py-16 px-6 md:px-20">
    <!-- Hero Header -->
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-extrabold text-red-600 mb-3 drop-shadow-md">
        Taste the authentic Indian cuisine
      </h1>
      <p class="text-2xl font-semibold text-gray-700 mb-6">
        Taste the Tradition, <span class="text-red-600">Love the Flavors...</span>
      </p>
      <button
        @click="$router.push('/book')"
        class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg transition"
      >
        Book a Table
      </button>
    </div>

    <!-- Info Cards -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1604908177522-df3b09278a3b"
          alt="restaurant"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Welcome to Masala Marvel</h2>
          <p class="text-gray-700">
            Bengaluru's culinary haven, where tradition meets innovation for an unforgettable Indian dining experience.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1600628422016-991487cb0c9e"
          alt="dish"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Authentic & Modern</h2>
          <p class="text-gray-700">
            Our chefs blend authentic recipes with modern twists, showcasing India's rich culinary heritage.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="ambiance"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Vibrant Ambiance</h2>
          <p class="text-gray-700">
            Immerse yourself in Bengaluru's vibrant spirit with an inviting atmosphere perfect for memorable dining moments.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section class="bg-gradient-to-br from-red-50 via-red-100 to-white text-gray-800 py-16 px-6 md:px-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="spices"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Exotic Spices</h2>
          <p class="text-gray-700">
            Experience the essence of India with our handpicked exotic spices that enrich every dish.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="chef"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Skilled Chefs</h2>
          <p class="text-gray-700">
            Our chefs bring decades of experience to the table, ensuring authenticity and quality.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
          alt="family dining"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Family Friendly</h2>
          <p class="text-gray-700">
            A warm and welcoming place perfect for family gatherings and celebrations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3 -->
  <section class="bg-gradient-to-br from-red-50 via-red-100 to-white text-gray-800 py-16 px-6 md:px-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1543352634-38be7c9b6dca"
          alt="desserts"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Delicious Desserts</h2>
          <p class="text-gray-700">
            End your meal on a sweet note with our variety of traditional Indian desserts.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1516685018646-54941598f0b6"
          alt="fresh ingredients"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Fresh Ingredients</h2>
          <p class="text-gray-700">
            We source only the freshest ingredients to maintain quality and flavor in every dish.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1514516871179-9f0f7db7bdb6"
          alt="events"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Special Events</h2>
          <p class="text-gray-700">
            Host your special occasions with us and enjoy customized menus and a perfect ambiance.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4 -->
  <section class="bg-gradient-to-br from-red-50 via-red-100 to-white text-gray-800 py-16 px-6 md:px-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2"
          alt="beverages"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Refreshing Beverages</h2>
          <p class="text-gray-700">
            Quench your thirst with our selection of authentic Indian drinks and fresh juices.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="spices"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Spice Blends</h2>
          <p class="text-gray-700">
            Discover our unique spice blends crafted to tantalize your taste buds.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1543352634-38be7c9b6dca"
          alt="desserts"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-bold text-red-600 mb-2">Cozy Seating</h2>
          <p class="text-gray-700">
            Relax and enjoy your meal in our cozy, beautifully decorated seating areas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra JS needed, same router push as before
</script>
