<template>
  <div class="reviews">
    <img :src="ellipse" alt="" class="reviews-main__ellipse ellipse" />
    <div class="reviews-wrapper container">
      <h3 class="reviews-wrapper__title title">Отзывы</h3>

      <div class="reviews-main">
        <div class="reviews-left">
          <div class="reviews-left__btns">
            <button
              class="reviews-left__btn btn"
              v-for="b in reviewsBtns"
              :key="b.id"
            >
              {{ b.txt }}
            </button>
          </div>
          <h3 class="reviews-left__txt">
            Повышайте качество и эффективность работы Вашего бизнеса вместе с
            нами
          </h3>
          <button class="reviews-left__free btn">Попробовать бесплатно</button>
        </div>
        <div class="reviews-right">
          <div class="reviews-right__wrapper">
            <div class="reviews-right__current">
              <div class="reviews-right__play">
                <div class="review-play__wrapper">
                  <div class="review-play">
                    <img :src="bigPlay" alt="" />
                  </div>
                </div>
                <img :src="reviewsImg" alt="" />
              </div>
            </div>
            <div class="reviews-right__grid">
              <div
                class="reviews-right__play"
                v-for="img in reviewsImages"
                :key="img.id"
              >
                <div class="review-play__wrapper">
                  <div class="review-play">
                    <img :src="playImg" alt="" />
                  </div>
                </div>
                <img :src="img.reviewsImg" alt="" />
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
    reviewsBtns: [
      { idx: 1, txt: "Видеоотзывы" },
      { idx: 2, txt: "Текстовые отзывы" },
      { idx: 3, txt: "Фотоотзывы" },
    ],
    reviewsImg: require("@/assets/img/3.png"),
    reviewsImages: [
      { id: 1, reviewsImg: require("@/assets/img/3.png") },
      { id: 2, reviewsImg: require("@/assets/img/3.png") },
      { id: 3, reviewsImg: require("@/assets/img/3.png") },
    ],
    playImg: require("@/assets/img/play.png"),
    bigPlay: require("@/assets/img/big-play.png"),
    ellipse: require("@/assets/img/ellipses/block-ellipse.png"),
  }),
};
</script>

<style>
</style>