<template>
  <div id="app">
    <router-view/>
    <div class="cover"></div>
  </div>
</template>

<style lang="scss">
*:not(i) {
  font-family: 'Open Sans' ;
  color: #fff ;
}


body 
{

background-image: url("@/assets/img/background.png");
background-size:cover;
background-repeat: no-repeat;
min-height: 100vh;
min-width: 320px;
max-width: 1920px;
margin: 0 auto;


.cover{
  position:fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background:rgba(34,34,34,.9);
  z-index: -1;
}


}
</style>
