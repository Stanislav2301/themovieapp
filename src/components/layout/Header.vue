<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header__logo logo">the<span class="logo__movie">movie</span>app</div>
      <form class="header__searchbar">
        <input type="text" class="header__search" placeholder="Search..." />
        <button type="submit" class="header__search-btn"></button>
      </form>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 80px;
    background-color: #D4D2D5;
    padding: 30px 15px;

    &__searchbar {
      position: relative;
    }

    &__logo {
      font-family: Montserrat, sans-serif;
    }

    .logo__movie {
      font-weight: 700;
    }

    &__search {
      max-width: 200px;
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 10px;
      font-family: inherit;

      &-btn {
        background-image: url('/src/assets/icons8-search.svg');
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        border: 0;
        outline: none;
        background-color: transparent;
        position: absolute;
        top: 1%;
        left: 80%;
      }

      &::placeholder {
        font-family: Montserrat, sans-serif;
      }

      &:focus {
        outline: #6C698D;
        box-shadow: 2px 2px 5px 2px #919191;
      }
    }
  }
</style>