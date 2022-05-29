<template>
    <div>
        <FullLoader :text="loader.text" v-if="loader.visible"/>
        <b-alert v-if="alertPickGym.status" show :variant="alertPickGym.variant">{{alertPickGym.text}}</b-alert>
        <div class="containerBoxGyms">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4 containerBox" v-for="(gym,index) in gyms" :key="index">
                    <div class="boxGym d-flex flex-column  justify-content-between">
                        <div>
                            <p class="mb-0 gymName font-weight-bold"><i class="fas fa-dumbbell mr-2"></i>{{`${gym.name} - ${gym.state}`}}</p>
                            <p class="mb-0 gymCity"><i class="fas fa-map-marker-alt mr-2"></i>{{`${gym.city} - ${gym.neighborhood}`}}</p>
                        </div>                                        
                        <button @click.prevent="goTo(`/${studentId}/${gym.slug}/dashboard`)" class="bSelect w-100">Selecionar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullLoader from '@/components/FullLoader.vue'
export default {
name: 'PickGymList',
props:["studentId"],
components: {
    FullLoader
},
data() {
    return {
        loader: {
            visible: false,
            text: ''
        },
        alertPickGym: {
            status: false,
            text: '',
            variant: ''
        },
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
},
methods: {
    /* eslint-disable */
    async loadUserGyms() {
        this.loader.visible = true
        this.loader.text = 'Carregando academias...'
        await this.$api.getUserGyms(this.studentId).then(res=> {
            if(res.data.msg == 'success') {
                this.gyms = res.data.data
            }else {
                this.alertPickGym.text = 'Não foi possível encontrar seus dados, saia e faça o login novamente!'
                this.alertPickGym.variant = 'danger'
                this.alertPickGym.status = true
            }
        }).catch(err=> {
            this.alertPickGym.text = 'Não foi possível carregar as academias cadastradas, saia e faça o login novamente!'
            this.alertPickGym.variant = 'danger'
            this.alertPickGym.status = true
        })

        this.loader.visible = false
    }
},
created() {
    this.loadUserGyms()
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
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
                color: #454545 ;
                & + p {
                    margin-top: 5px;
                }
            }

            .gymName {
                color: #00ca8d ;
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
</style>