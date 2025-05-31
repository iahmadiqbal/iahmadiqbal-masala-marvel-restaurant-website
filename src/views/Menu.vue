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
              :src="item.img" 
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
export default {
  name: 'OurMenu',
  data() {
    return {
      foodItems: {
        Starters: {
          Veg: [
            { name: "Spring Roll", img: "images/sprin-roll.jpg", description: "Crispy rolls filled with vegetables." },
            { name: "Hara Bhara Kabab", img: "images/hara-bara-kabab.jpg", description: "Healthy kababs made with spinach and peas." },
            { name: "Paneer Tikka", img: "images/paneer-tika.jpg", description: "Grilled paneer chunks marinated in spices." },
            { name: "Dahi Bhalla Chaat", img: "images/dahi-bala-chat.jpg", description: "Soft lentil balls in seasoned yogurt." },
            { name: "Veg Momos", img: "images/momos.jpg", description: "Steamed dumplings stuffed with veggies." },
            { name: "Corn Cheese Balls", img: "images/corn-cheez.jpg", description: "Crispy balls with corn and melted cheese." },
            { name: "Mini Samosas", img: "images/Minisamosa.webp", description: "Bite-sized samosas filled with spicy potatoes." },
            { name: "Stuffed Mushrooms", img: "images/StuffedMushrooms.jpg", description: "Mushrooms stuffed with cheese and herbs." }
          ],
          "Non-Veg": [
            { name: "Chilli Prawns", img: "images/Chilli-Prawns.jpg", description: "Spicy prawns tossed with bell peppers." },
            { name: "Chicken Manchurian", img: "images/Indo-Chinese.jpg", description: "Indo-Chinese chicken in tangy sauce." },
            { name: "Seekh Kebab", img: "images/Seekh-Kebab.jpg", description: "Spiced minced meat grilled on skewers." },
            { name: "Mutton Vadai", img: "images/Mutton-Vadai.jpg", description: "Crispy mutton patties deep fried to perfection." },
            { name: "Peri Peri Fish Fingers", img: "images/fish-fingers.webp", description: "Crispy fish sticks with peri peri flavor." },
            { name: "Chicken Lollipop", img: "images/Chicken-Lollipop.webp", description: "Frenched chicken wings with spicy coating." },
            { name: "Egg Pakora", img: "images/Egg-pakora.webp", description: "Boiled egg fritters with spicy batter." },
            { name: "Fish Cutlet", img: "images/fish-cutlet.webp", description: "Pan-fried fish patties seasoned with herbs." }
          ],
        },
        "Main Course": {
          Veg: [
            { name: "Paneer Gravy & Naan", img: "images/Paneer-Gravy-&-Naan.webp", description: "Creamy paneer curry with soft naan." },
            { name: "Masala Dosa", img: "images/Masala-Dovsa.jpg", description: "Crispy dosa filled with spicy potato." },
            { name: "South Meals", img: "images/South-Meals.jpg", description: "Traditional South Indian thali." },
            { name: "North Meals", img: "images/North-Meals.jpg", description: "Complete North Indian platter." },
            { name: "Idli Vada Combo", img: "images/Idli-Vada-Combo.webp", description: "Fluffy idli with crispy vada." },
            { name: "Rajma Chawal", img: "images/Rajma-Chawal.jpg", description: "Kidney bean curry served with rice." },
            { name: "Palak Paneer", img: "images/palak-paneer.webp", description: "Spinach-based curry with paneer cubes." },
            { name: "Chole Bhature", img: "images/cholo.webp", description: "Spicy chickpeas served with fried bread." }
          ]
        }
      }
    };
  }
};
</script>
