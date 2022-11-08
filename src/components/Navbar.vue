<template>
  <div class="nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-brend">
          <div class="nav-brend__logo">
            <img :src="logo" alt="" />
          </div>
          <div class="nav-brend__burger" :class="{'active' : navOpen}" @click="navOpen = !navOpen">
            <div class="line"></div>
          </div>
        </div>
        <div class="nav-main" :class="{'active' : navOpen}">
          <div class="nav-list">
            <ul class="nav-list__wrapper">
              <li class="nav-item" v-for="item in navList" :key="item.id">
                <a :href="item.link" class="nav-link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <button class="btn btn-navbar">Авторизоваться</button>
          <div class="user-block">
            <a href="#!" class="user-link">
              <i class="icofont-ui-user"></i>
            </a>

            <div class="user-block__lang">
              <select
                name="sources"
                id="sources"
                class="custom-select sources"
                placeholder="EN"
              >
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    logo: require("@/assets/img/logos/logoOrange.svg"),
    isLangOpen: false,
    langIndex: +localStorage.getItem("localeIndex") || 0, 
    navOpen: false

  }),
  computed: {
    ...mapGetters(["navList"]),
    languages: () => [
      {
        name: "RU",
        value: "ru",
      },
      { name: "O'Z", value: "uz" },
      {
        name: "EN",
        value: "en",
      },
    ],
  },
  methods: {
   
  }
};
</script>

<style>
</style>    