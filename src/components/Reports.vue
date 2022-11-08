<template>
  <div class="reports">
    <div class="reports-wrapper container">
      <h3 class="reports-wrapper__title title">JOBTRON в цифрах</h3>
      <p class="reports-wrapper__txt">
        JOBTRON поможет каждому сотруднику компании оценить свои силы и
        почувствовать поддержку. Благодаря нашей платформе каждый новый
        работник:
      </p>
      <div class="reports-counts">
        <div
          class="reports-count"
          v-for="(b, index) in reportsCountBlocks"
          :key="index.id"
          :style="`background-color: ${reportsCountBg[index]}`"
        >
          <div class="reports-count__block">
            <h3
              class="reports-count__num"
              :style="`color: ${reportsCountColor[index]}`"
            >
              на {{ b.num }} %
            </h3>
            <div class="reports-txt__wrapper">
              <p class="reports-count__txt">{{ b.txt }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="reports-form">
        <h3 class="reports-form__title">
          Повышайте качество и эффективность работы Вашего бизнеса вместе с нами
        </h3>
        <form action="">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <button class="btn">Попробовать бесплатно</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    reportsCountBg: ["#EDF8FF", "#FFF9EA", "#F3F0FC"],
    reportsCountColor: ["#72C6F9", "#FFD86B", "#9082BB"],
    reportsCountBlocks: [
      {
        num: 3,
        txt: "В 3 раза быстрее адаптируется к работе в компании",
        color: "",
      },
      {
        num: 21,
        txt: "Повышает свою продуктивность",
        color: "",
      },
      {
        num: 22,
        txt: "Повышает свой доход уже через два месяца после начала рбаоты",
        color: "",
      },
    ],
  }),
   methods: {
    timer: function() { setInterval(this.tikTok, 1000); },
    tikTok: function() { ++this.reportsCountBlocks.num; }
  },
  mounted: function() {
      this.$nextTick(() => {
          this.timer();
      });
  }
};
</script>

<style>
</style>