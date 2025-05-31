<template>
  <div class="px-4 py-10 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
    <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-10 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <!-- Map Section -->
        <div class="w-full h-full">
          <div class="w-full h-full rounded-lg overflow-hidden shadow-lg" :style="{ height: formHeight + 'px' }">
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160985087!2d72.7410996696507!3d33.6844201982735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9491db79e3eb%3A0x59db2b7c23d29b0!2sIslamabad!5e0!3m2!1sen!2s!4v1693484589267!5m2!1sen!2s"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div ref="formSection" class="space-y-6">
          <h2 class="text-2xl font-bold text-red-600 text-center">Contact Us</h2>

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
                class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div class="text-center">
            <button
              class="mt-4 text-white px-6 py-2 rounded-md hover:opacity-90 transition duration-300"
              style="background-color: #101828;"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      formHeight: 400,
    };
  },
  methods: {
    submitForm() {
      alert('Form submitted!\n' + JSON.stringify(this.form, null, 2));
    },
    updateFormHeight() {
      this.formHeight = this.$refs.formSection?.offsetHeight || 400;
    },
  },
  mounted() {
    this.updateFormHeight();
    window.addEventListener('resize', this.updateFormHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFormHeight);
  },
};
</script>
