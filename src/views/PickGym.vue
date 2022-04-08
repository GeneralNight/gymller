<template>
    <div>
        <Header/>
        <section id="containerPickGym">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="mb-0 pickTitle">Você possui cadastro nas academias abaixo, selecione uma para ver suas fichas de treino.</p>
                        <div class="containerBoxGyms">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-lg-4 containerBox" v-for="(gym,index) in gyms" :key="index">
                                    <div class="boxGym d-flex flex-column  justify-content-between">
                                        <div>
                                            <p class="mb-0 gymName"><i class="fas fa-dumbbell mr-2"></i>{{`${gym.name} - ${gym.state}`}}</p>
                                            <p class="mb-0 gymCity"><i class="fas fa-map-marker-alt mr-2"></i>{{`${gym.city} - ${gym.neighborhood}`}}</p>
                                        </div>                                        
                                        <button class="bSelect w-100">Selecionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
name:'PickGym',
components: {
    Header
},
data() {
    return {
        gyms: [
            {
                id:1,
                name: "Cardiofísico",
                city: "Jaboticabal",
                state: "SP",
                neighborhood: "Centro"
            },
            {
                id:2,
                name: "Saúde Total",
                city: "Jaboticabal",
                state: "SP",
                neighborhood: "Jardim Tangará"
            }
        ]
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
#containerPickGym {
    padding: 50px 0;
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

    .containerBoxGyms {
        margin-top: 30px;
        .containerBox {
            margin-bottom:30px ;
        }
        .boxGym {
            background: #f6f6f6;
            height: 100%;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
            // margin-bottom: 30px;
            padding: 15px 30px;
            
            
            
            p {
                color: #454545 !important;
                & + p {
                    margin-top: 5px;
                }
            }

            button {
                margin-top: 15px;
                color: #454545;
                font-weight: 700;
                border: 2px solid #00ca8d;
                border-radius: 32px;
                font-size: 1.15rem;
                background: transparent;
                transition: .2s ;
                padding: 5px 20px;  
                &:hover {
                    background: #00ca8d;
                    color:#fff;
                    box-shadow: 0 0 5px rgba(0,0,0,.3);
                }
                @include d(xs) {
                font-size: 1rem;
                border-radius: 8px;
                padding: 8px 12px;
                }
            }
        }
    }
}
</style>