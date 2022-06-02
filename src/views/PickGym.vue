<template>
    <div>
        <Header :clientId="studentId"/>
        <section id="containerPickGym">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="mb-0 pickTitle">Você possui cadastro nas academias abaixo, selecione uma para ver suas fichas de treino.</p>
                        <PickGymList :studentId="studentId"/>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PickGymList from '@/components/PickGym/PickGymList.vue'
export default {
name:'PickGym',
props: ["studentId"],
components: {
    Header,
    PickGymList
},
data() {
    return {
        
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
#containerPickGym {
    padding: 50px 0;
    color: #fff;
    .pickTitle {
    font-weight: bold;
    font-size: 1.75rem;
    @include d(md) {
      font-size: 1.5rem;
    }
    @include d(xs) {
      font-size: 1.35rem;
    }
    }

    
}
</style>