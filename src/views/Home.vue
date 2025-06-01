<template>
  <div class="max-w-7xl mx-auto p-6 space-y-20">
    <section
      v-for="(section, secIndex) in sections"
      :key="secIndex"
      class="space-y-10"
    >
      <h2
        class="text-3xl font-bold text-center mb-6"
        :style="highlightTitles.includes(section.sectionTitle) ? 'color: #C10007;' : ''"
      >
        {{ section.sectionTitle }}
      </h2>

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
import axios from "axios";

export default {
  name: "MasalaMarvel",
  data() {
    return {
      highlightTitles: [],
      sections: []
    };
  },
  mounted() {
    axios
      .get("/api/home.json")
      .then((res) => {
        this.highlightTitles = res.data.highlightTitles;
        this.sections = res.data.sections;
      })
      .catch((err) => {
        console.error("Failed to load data.json:", err);
      });
  },
  methods: {
    splitDescription(desc) {
      return desc.split(".").filter(Boolean).map(line => line.trim() + ".");
    }
  }
};
</script>
