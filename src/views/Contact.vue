<template>
  <div class="px-4 py-10 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
    <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-10 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Map Section -->
        <div class="w-full h-full">
          <div class="w-full h-full rounded-lg overflow-hidden shadow-lg" :style="{ height: formHeight + 'px' }">
            <iframe
              class="w-full h-full"
              :src="formConfig.mapEmbedUrl"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div ref="formSection" class="space-y-6">
          <h2 class="text-2xl font-bold text-red-600 text-center">{{ formConfig.formTitle }}</h2>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block mb-2 font-medium text-gray-700">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium text-gray-700">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>
            <div>
          </div>
          </form>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      formHeight: 400,
      formConfig: {
        formTitle: "Loading...",
        mapEmbedUrl: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert("Form submitted!\n" + JSON.stringify(this.form, null, 2));
    },
    updateFormHeight() {
      this.formHeight = this.$refs.formSection?.offsetHeight || 400;
    },
    async loadFormConfig() {
      try {
        const res = await axios.get("/api/contact.json");
        this.formConfig = res.data;
        this.updateFormHeight();
      } catch (err) {
        console.error("Failed to load form config", err);
      }
    }
  },
  mounted() {
    this.loadFormConfig();
    window.addEventListener("resize", this.updateFormHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateFormHeight);
  }
};
</script>
