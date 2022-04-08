<template>
    <b-form class="fLogin mt-3 mt-sm-4" @submit.prevent="makeLogin">
        <b-alert :variant="alertLogin.variant" :show="alertLogin.status" class="mt-4">
            <i class="fas fa-info-circle mr-2"></i>{{alertLogin.txt}}
        </b-alert>
        <div class="form-group">
            <label for="inputUser">Usuário</label>
            <input type="text" class="form-control" id="inputUser" required v-model="form.user">
        </div>
        <div class="form-group">
            <label for="inputPassword">Senha</label>
            <input type="password" class="form-control" id="inputPassword" required v-model="form.password">
        </div>
        
        <div class="d-flex justify-content-center align-items-center containerBtns">
            <button @click.prevent="goTo('/register')" :disabled="bSubmit.disabled" class="bRegister mr-4 mr-sm-5" :class="{'disButton': bSubmit.disabled}">
                Registro
            </button>
            <button :disabled="bSubmit.disabled" class="bSubmit" :class="{'disButton': bSubmit.disabled}">
                {{ bSubmit.text }}
            </button>           
        </div>
  </b-form>
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
                user: "",
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
        goTo(route) {
            if(!this.bSubmit.disabled) {
                this.$router.push(route)
            }
        },
        makeLogin(){
            console.log(this.form.user)
            console.log(this.form.password)
            this.bSubmit.disabled = true
            this.bSubmit.text = "Entrando"
            setTimeout(() => {
                this.bSubmit.disabled = false
                this.bSubmit.text = "Entrar"
            }, 2000);
        }        
    }


}
</script>

<style  lang="scss" scoped>
@import "@/assets/scss/responsive.scss";

    .fLogin {

        .containerBtns {
            margin-top: 50px;

            @include d(lg) {
                margin-top: 40px;
            }

            @include d(xs) {
                margin-top: 30px;
            }

            .bSubmit, .bRegister {
                color: white;
                border: 2px solid #00ca8d;
                border-radius: 32px;
                padding: 5px 40px;
                font-size: 1.25rem;
                background: transparent;
                transition: .2s ;

                &:hover {
                    background: #00ca8d;
                }

                @include d(xs) {
                    font-size: 1rem;
                    padding: 5px 30px;
                }
            }
        }

        .disButton {
            opacity: .8;
        }
    }
    


</style>