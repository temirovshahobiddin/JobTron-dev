<template>
  <div class="layout">
    <Navbar />
    <Home />
    <Reviews />
    <Tariffs />
    <Opportunities />
    <Reports />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import Reviews from "@/components/Reviews.vue";
import Tariffs from "@/components/Tariffs.vue";
import Opportunities from "@/components/Opportunities.vue";
import Reports from "@/components/Reports.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Home,
    Reviews,
    Tariffs,
    Opportunities,
    Reports,
    Footer
  },
  data: () => ({}),
};
</script>
<style lang="scss">
</style>

