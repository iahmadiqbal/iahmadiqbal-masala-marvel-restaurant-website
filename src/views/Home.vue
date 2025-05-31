<template>
  <div class="max-w-7xl mx-auto p-6 space-y-20">
    <section
      v-for="(section, secIndex) in sections"
      :key="secIndex"
      class="space-y-10"
    >
      <!-- Section Title -->
      <h2
        class="text-3xl font-bold text-center mb-6"
        :style="highlightTitles.includes(section.sectionTitle) ? 'color: #C10007;' : ''"
      >
        {{ section.sectionTitle }}
      </h2>

      <!-- Images Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          v-for="(imgObj, imgIndex) in section.images"
          :key="imgIndex"
          class="bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-center
                 transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            :src="`/images/${imgObj.src}`"
            :alt="imgObj.title"
            class="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">{{ imgObj.title }}</h3>
          <div class="text-gray-600 text-sm leading-6 max-h-[4.5em] overflow-hidden">
            <p
              v-for="(line, idx) in splitDescription(imgObj.description)"
              :key="idx"
            >
              {{ line }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MasalaMarvel",
  data() {
    return {
      highlightTitles: [
        "Taste the authentic Indian cuisine",
        "Welcome to Masala Marvel - Bengaluru's culinary haven",
        "Our chefs craft a menu blending authentic recipes and modern twists",
        "Immerse yourself in Bengaluru's vibrant spirit",
      ],
      sections: [
        {
          sectionTitle: "Taste the authentic Indian cuisine",
          images: [
            { src: "Taste-the-Tradition.jpg", title: "Taste the Tradition", description: "Love the Flavors of authentic Indian spices and culinary secrets passed down through generations." },
            { src: "Authentic-Spices.jpg", title: "Authentic Spices", description: "Rich and vibrant aromas that bring your taste buds alive in every bite." },
            { src: "Fresh-Ingredients.jpg", title: "Fresh Ingredients", description: "Only the best and freshest from the market, ensuring top quality in every dish." },
            { src: "Classic-Recipes (2).jpg", title: "Classic Recipes", description: "Passed down through generations, our recipes stay true to tradition and taste." },
            { src: "Modern-Twists.jpg", title: "Modern Twists", description: "Innovation on every plate that surprises and delights the palate." },
            { src: "Perfect-Presentation.jpg", title: "Perfect Presentation", description: "Delicious meets beautiful with plating that’s a feast for the eyes." },
          ],
        },
        {
          sectionTitle: "Welcome to Masala Marvel - Bengaluru's culinary haven",
          images: [
            { src: "Welcome-to-Masala Marvel.webp", title: "Welcome to Masala Marvel", description: "Where tradition meets innovation for an unforgettable Indian dining experience." },
            { src: "Elegant-Ambiance.avif", title: "Elegant Ambiance", description: "Dine in comfort and style with a welcoming atmosphere." },
            { src: "Culinary-Excellence (3).jpg", title: "Culinary Excellence", description: "Our chefs create magic every day with passion and skill." },
            { src: "Cozy-Seating.jpg", title: "Cozy Seating", description: "Perfect for family dinners or a night out with friends." },
            { src: "Vibrant-Colors.jpg", title: "Vibrant Colors", description: "Inspired décor that delights the senses and enhances your dining experience." },
            { src: "Live-Music.jpg", title: "Live Music", description: "Experience soulful vibes that complement your meal perfectly." },
          ],
        },
        {
          sectionTitle: "Our chefs craft a menu blending authentic recipes and modern twists",
          images: [
            { src: "Master-Chefs.jpg", title: "Master Chefs", description: "Experts in authentic Indian cuisine, crafting dishes with care." },
            { src: "Creative-Menus.jpg", title: "Creative Menus", description: "Innovative dishes designed to excite your palate and curiosity." },
            { src: "Locally-Sourced.jpg", title: "Locally Sourced", description: "Fresh and sustainable ingredients supporting local farmers." },
            { src: "Passion-for-Food.jpg", title: "Passion for Food", description: "Cooking with heart and soul in every bite." },
            { src: "Culinary-Heritage.jpg", title: "Culinary Heritage", description: "Rooted in tradition yet embracing new flavors." },
            { src: "Global-Flavors.jpg", title: "Global Flavors", description: "A fusion of tastes that celebrate India’s diverse regions." },
          ],
        },
        {
          sectionTitle: "Immerse yourself in Bengaluru's vibrant spirit",
          images: [
            { src: "Vibrant-Spirit.jpg", title: "Vibrant Spirit", description: "Bengaluru’s lively energy reflected in every corner." },
            { src: "Inviting-Ambiance (2).jpg", title: "Inviting Ambiance", description: "Warm and welcoming atmosphere that feels like home." },
            { src: "Memorable-Moments.jpg", title: "Memorable Moments", description: "Experience dining that creates lasting memories." },
            { src: "Artistic-Decor.jpg", title: "Artistic Decor", description: "Beautifully crafted interiors that inspire and relax." },
            { src: "Comfort-&-Style.jpg", title: "Comfort & Style", description: "Relax in elegance with thoughtfully designed seating." },
            { src: "Perfect-Evenings.jpg", title: "Perfect Evenings", description: "Create lasting memories with friends and family." },
          ],
        },
      ],
    };
  },
  methods: {
    splitDescription(desc) {
      return desc.split('.').filter(Boolean).map(line => line.trim() + '.');
    }
  }
};
</script>
