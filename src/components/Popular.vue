<template>
  <div class="container">
    <section class="row row-cols-4 gap-3 justify-content-center">
    <div class="movie-card col" v-for="movie in popular" :key = "popular.id">
      <img class="movie-card__poster" a :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
      <h3 class="movie-card__title">{{ movie.title }}</h3>
      <span class="movie-card__rate">{{movie.vote_average }}</span>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Popular",
  props: ['popular']
}
</script>

<style lang="scss" scoped>

.movie-card {
  border-radius: 10px;
  overflow: hidden;
  max-width: 120px;
  width: 100%;
  background-color: rgba(20, 33, 61, .5);
  position: relative;
  padding: 0;
  box-shadow: 2px 2px 5px 2px #919191;
  transition: .2s;
  opacity: 0.8;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  &__poster {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__title {
    font-family: 'Montserrat';
    font-size: 10px;
    text-align: center;
    margin-top: 20px;
    color: #FFFFFF;
  }

  &__rate {
    position: absolute;
    top: -20px;
    left: -31px;
    font-size: 8px;
    background-color: rgba(58, 134, 255, .7);
    color: #FFFFFF;
    padding: 30px 30px 5px;
    transform: rotate(-45deg);
  }
}

</style>