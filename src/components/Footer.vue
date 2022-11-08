<template>
  <div class="footer">
    <div class="footer-wrapper container">
      <div class="footer-main">
        <div class="footer-brend">
          <img :src="logo" alt="" />
        </div>

        <div class="footer-first">
          <ul class="footer-list">
            <li class="footer-item" v-for="link in firstList" :key="link.id">
              <a :href="link.link" class="footer-link">{{ link.title }}</a>
            </li>
          </ul>
          <div class="footer-bottom">
            <h3 class="footer-title">Подпишитесь на новости:</h3>
            <div class="footer-socials">
              <a
                href=""
                class="footer-icon"
                v-for="svg in socailsList"
                :key="svg.id"
                ><img :src="svg.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="footer-second">
          <div class="footer-list">
            <li class="footer-item" v-for="sc in secondList" :key="sc.id">
              <a :href="sc.link" class="footer-link">{{ sc.title }}</a>
            </li>
          </div>
          <div class="footer-bottom">
            <h3 class="footer-title">Способы оплаты:</h3>
            <div class="footer-payments">
              <a
                v-for="svg in cardsList"
                :key="svg.id"
                href=""
                class="footer-card"
                ><img :src="svg.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="footer-third">
          <h3 class="footer-title">Отдел продаж:</h3>
          <div class="footer-list">
            <li class="footer-item" v-for="th in thirdList" :key="th.is">
              <a :href="th.link" class="footer-link">{{ th.title }}</a>
            </li>
          </div>
          <div class="footer-bottom">
            <div class="footer-title">Отдел продаж:</div>
            <a href="#!" class="footer-link">support@jobtron.com</a>
          </div>
        </div>
      </div>
    </div>
      <hr>

      <div class="footer-rules container">
        <h3 class="footer-rules_copy">© 2022 «Jobton», Все права защищены</h3>
        <div class="footer-rules__list">
          <a href="#!" class="footer-rules_link">Правила сайта</a>
          <a href="#!" class="footer-rules_link">Политика конфиденциальности</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logo: require("@/assets/img/logos/logoWhite.svg"),
    firstList: [
      { title: "Цены", link: "#!" },
      { title: "Отзывы", link: "#!" },
      { title: "Особенности платформы", link: "#!" },
    ],
    secondList: [
      { title: "Документы", link: "#!" },
      { title: "Информация об оплате", link: "#!" },
      { title: "Лицензионное соглашение", link: "#!" },
    ],
    thirdList: [
      { title: "8 777 788 08 00", link: "tel:+87777880800" },
      { title: "Информация об оплате", link: "tel:+87777880800" },
      { title: "Лицензионное соглашение", link: "sales@jobtron.com" },
    ],
    socailsList: [
      {
        svg: require("@/assets/img/socials/tg.svg"),
        link: "#!",
      },
      {
        svg: require("@/assets/img/socials/instagram.svg"),
        link: "#!",
      },
      {
        svg: require("@/assets/img/socials/youtube.svg"),
        link: "#!",
      },
    ],
    cardsList: [
      {
        svg: require("@/assets/img/cards/mir.svg"),
        link: "#!",
      },
      {
        svg: require("@/assets/img/cards/visa.svg"),
        link: "#!",
      },
      {
        svg: require("@/assets/img/cards/iomoney.svg"),
        link: "#!",
      },
    ],
  }),
};
</script>

<style>
</style>