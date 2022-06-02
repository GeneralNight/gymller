<template>
    <div class="row justify-content-center">
        <div class="col col-sm-10 col-md-8 col-lg-6">
            <b-alert :variant="alertLogin.variant" :show="alertLogin.status" class="mt-4"><i class="fas fa-info-circle mr-2"></i>{{alertLogin.txt}}</b-alert>
            <b-form class="fLogin" @submit.prevent="makeLogin">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="inputUser">Usuário</label>
                            <input type="text" class="form-control" id="inputUser" required v-model="form.username">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="inputPassword">Senha</label>
                            <input type="password" class="form-control" id="inputPassword" required v-model="form.password">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex justify-content-center align-items-center containerBtns">
                            <button @click.prevent="goTo('/register')" type="button" :disabled="bSubmit.disabled" class="bPattern mr-4 mr-sm-5" :class="{'disButton': bSubmit.disabled}">
                                Registrar
                            </button>
                            <button :disabled="bSubmit.disabled" type="submit" class="bPattern" :class="{'disButton': bSubmit.disabled}">
                                {{ bSubmit.text }}
                            </button>           
                        </div>
                    </div>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormLogin",
    data(){
        return{
            bSubmit: {
                disabled: false,
                text: "Entrar"
            },
            form: {
                username: "",
                password: ""
            },
            alertLogin : {
                txt: 'Usuário ou senha inválidos.',
                variant: 'danger',
                status: false
            }
        }
    },
    methods:{
        /* eslint-disable */
        goTo(route) {
            if(!this.bSubmit.disabled) {
                this.$router.push(route)
            }
        },
        async makeLogin(){
            this.alertLogin.status = false
            this.bSubmit.disabled = true
            this.bSubmit.text = "Entrando"

            await this.$api.login(this.form).then(res=> {
                if(res.data.me) {                    
                    this.$store.commit('SET_ME',res.data.me)
                    this.$router.push(`/${res.data.me.id}/pick-gym`)
                }else {
                    this.alertLogin.txt = "Usuário ou senha incorretos!"
                    this.alertLogin.variant = "danger"
                    this.alertLogin.status = true
                }
            }).catch(err=> {
                this.alertLogin.txt = "Usuário ou senha incorretos!"
                this.alertLogin.variant = "danger"
                this.alertLogin.status = true
            })
            
            this.bSubmit.disabled = false
            this.bSubmit.text = "Entrar"
        }        
    }


}
</script>

<style  lang="scss" scoped>
@import "@/assets/scss/responsive.scss";

    .fLogin {
        .containerBtns {
            margin-top: 30px;
        }
    }
    


</style>