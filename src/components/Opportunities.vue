<template>
  <div class="opportunities">
    <div class="opportunities-wrapper container">
      <h3 class="opportunities-wrapper__title title">
        С JOBTRON работать легко и удобно
      </h3>
      <p class="opportunities-wrapper__subtitle subtitle">
        Мы заботимся о наших клиентах и предоставляем индивидуальный подход,
        который будет полезен каждому
      </p>

      <div class="opportunities-main">
        <div
          class="opportunities-block"
          v-for="data in opportuinitesBlock"
          :key="data.id"
        >
        <img :src="data.ellipse" alt="" class="opportunities-block__ellipse ellipse">
          <img :src="data.screen" alt="" class="opportunities-block__screen"/>

          <div class="opportunities-block__part">
            <h3 class="opportunities-block__title">{{ data.title }}</h3>
            <p class="opportunities-block__txt">{{ data.txt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    opportuinitesBlock: [
      {
        ellipse: require("@/assets/img/ellipses/first.png"),
        screen: require("@/assets/img/screens/every.png"),
        title: "Интеграция с вашей  CRM-системой",
        txt: "Корпоративный портал JOBTRON может интегрироваться с разными CRM, сревисами рассылки, системами учета времени и трекинга, в также с другими многофункциональными сервисами",
      },
      {
        ellipse: require("@/assets/img/ellipses/second.png"),
        screen: require("@/assets/img/screens/every.png"),
        title: "Служба поддержки",
        txt: "Корпоративный портал JOBTRON может интегрироваться с разными CRM, сревисами рассылки, системами учета времени и трекинга, в также с другими многофункциональными сервисами",
      },
      {
        ellipse: require("@/assets/img/ellipses/third.png"),
        screen: require("@/assets/img/screens/every.png"),
        title: "Гибкие возможности",
        txt: "Корпоративный портал JOBTRON может интегрироваться с разными CRM, сревисами рассылки, системами учета времени и трекинга, в также с другими многофункциональными сервисами",
      },
    ],
  }),
};
</script>

<style>
</style>