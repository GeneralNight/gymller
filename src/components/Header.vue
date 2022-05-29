<template>
  <header class="containerHeader">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img class="logo" src="@/assets/img/Logo.png" alt="Logo">
            <h1 class="sysTitle mb-0">Gymller</h1>
        </div>
      </div>
  </header>
</template>

<script>
export default {
name: 'HeaderPage'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
.containerHeader {
    color: #fff;
    padding: 20px 50px;
    background: #333333;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    @include d(xs) {
        padding: 20px 15px;
    }
    .sysTitle {
        font-weight: bold;
        font-size: 2rem;
        @include d(md) {
            font-size: 1.75rem;
        }
        @include d(xs) {
            font-size: 1.5rem;
        }
    }
    .logo {
        margin-right: 20px;
        max-width: 100px;
        width: 100%;
        @include d(xs) {
          max-width: 80px;
        }
    }
}
</style>