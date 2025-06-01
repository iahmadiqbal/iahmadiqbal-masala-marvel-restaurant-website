<template>
  <div class="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#C10007] mb-10">
      Discover Our Menu
    </h1>

    <div v-for="(subItems, category) in foodItems" :key="category" class="mb-12 sm:mb-14 md:mb-16">
      <h2
        class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
        :style="category === 'Starters' || category === 'Main Course' ? { color: '#E7000B' } : {}"
      >
        {{ category }}
      </h2>

      <div v-for="(items, subCategory) in subItems" :key="subCategory" class="mb-8 sm:mb-10">
        <h3
          class="text-2xl sm:text-3xl font-bold border-b-4 pb-2 mb-4 sm:mb-6"
          :style="{
            color: '#E7000B',
            borderColor: '#E7000B'
          }"
        >
          {{ subCategory }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="rounded-xl shadow-md sm:shadow-lg overflow-hidden bg-white hover:shadow-orange-300 transition-shadow"
          >
            <img 
      
              :src="`/images/${item.src}`" 
              :alt="item.name" 
              class="w-full h-40 sm:h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div class="p-3 sm:p-4 text-center">
              <h4 class="text-base sm:text-lg font-semibold text-gray-700">{{ item.name }}</h4>
              <p class="text-xs sm:text-sm text-gray-500 mt-1">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OurMenu",
  data() {
    return {
      foodItems: {},
    };
  },
  async created() {
    try {
      const response = await axios.get("/api/menu.json");
      this.foodItems = response.data;
    } catch (error) {
      console.error("Failed to load menu data:", error);
    }
  },
};
</script>