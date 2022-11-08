<template>
  <div class="home">
    <div class="home-ellipses ellipse">
      <img :src="secondEllipse" alt="" />
      <img :src="firstEllipse" alt="" />
    </div>

    <div class="home-wrapper container">
      <h3 class="home-wrapper__title title">
        JOBTRON: удобно для сотрудников, полезно для бизнеса
      </h3>

      <div class="home-list">
        <ul class="home-list__wrapper">
          <li class="home-item" v-for="list in homeList" :key="list.id">
            <a :href="list.link" class="home-link" @click="isActive">{{
              list.name
            }}</a>
          </li>
        </ul>
      </div>
      <div class="home-main">
        <div class="home-left">
          <div class="home-left__block">
            <h3 class="home-left__title">Полезно для сотрудника:</h3>
            <div
              class="home-block__row"
              v-for="b in homeBlockByEmployee"
              :key="b.id"
            >
              <img :src="b.img" alt="" />
              <p class="home-left__txt">{{ b.txt }}</p>
            </div>
          </div>
          <div class="home-left__block">
            <h3 class="home-left__title">Полезно для сотрудника:</h3>
            <div
              class="home-block__row"
              v-for="b in homeBlockByDistributor"
              :key="b.id"
            >
              <img :src="b.img" alt="" />
              <p class="home-left__txt">{{ b.txt }}</p>
            </div>
          </div>
        </div>
        <div class="home-right">
          <img :src="leftScreem" alt="" class="home-right__img" />
        </div>
      </div>
      <div class="home-about">
        <h3 class="home-about__title title">
          Компании, использующие JOBTRON, отмечают:
          <img :src="titleEllipse" alt=""  class="ellipse"/>
        </h3>

        <div class="home-counts">
          <div
            class="home-count"
            v-for="(b, index) in homeCountBlocks"
            :key="index.id"
            :style="`background-color: ${homeCountBg[index]}`"
          >
            <div class="home-count__block">
              <h3
                class="home-count__num"
                :style="`color: ${homeCountColor[index]}`"
              >
                на {{ b.num }} %
              </h3>
              <div class="home-txt__wrapper">
                <p class="home-count__txt">{{ b.txt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    homeList: [
      {
        id: 1,
        name: "Личный профиль",
        link: "#!",
      },
      {
        id: 2,
        name: "База знаний",
        link: "#!",
      },
      {
        id: 3,
        name: "KPI",
        link: "#!",
      },
      {
        id: 4,
        name: "Курсы",
        link: "#!",
      },
      {
        id: 5,
        name: "Структура компании",
        link: "#!",
      },
      {
        id: 6,
        name: "Новости и чат",
        link: "#!",
      },
    ],
    homeBlockByEmployee: [
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "все заработанные деньги видны на экране",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "% выполнения KPI в реальном времени",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "премии, бонусы, электронные награды и сертификаты",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "оценка эффективности собственной работы",
      },
    ],
    homeBlockByDistributor: [
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "повышение эффективности каждого сотрудника",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "много инструментов мотивации персонала",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "увеличение вовлеченности",
      },
      {
        img: require("@/assets/img/ellipses/sma.png"),
        txt: "цифровые SMART цели",
      },
    ],
    homeCountBg: ["#EDF8FF", "#FFF9EA", "#F3F0FC"],
    homeCountColor: ["#72C6F9", "#FFD86B", "#9082BB"],
    homeCountBlocks: [
      {
        num: 29,
        txt: "Снизилась текучка сотрудников",
        color: "",
      },
      {
        num: 15,
        txt: "Увеличилось число активных работников, предлагающих нестандартные решения",
        color: "",
      },
      {
        num: 25,
        txt: "Увеличилось вовлеченность сотрудников в жизнь компании",
        color: "",
      },
    ],
    titleEllipse: require("@/assets/img/ellipses/title-img.png"),
    firstEllipse: require("@/assets/img/ellipses/homeElipse.png"),
    secondEllipse: require("@/assets/img/ellipses/homeEllipse2.png"),
    leftScreem: require("@/assets/img/screens/homeScreen.png"),
  }),
  methods: {
    isActive() {},
  },
};
</script>

<style>
</style>