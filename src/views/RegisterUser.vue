<template>
    <section id="containerRegisterUser">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-sm-end">
                        <button :class="{'disButton': isSigning}" class="bBack" @click.prevent="goTo('/')"><i class="fas fa-chevron-left mr-2"></i> Voltar</button>
                    </div>
                    <div class="d-flex align-items-center flex-column flex-sm-row">
                        <img src="@/assets/img/Logo.png" alt="" class="imgLogo">
                        <div class="containerIntro d-flex flex-column">
                            <h1 class="text-center text-sm-left registerTitle">Registro de usuário</h1>
                            <p class="mb-0 text-center text-sm-left registerText mt-1 mt-md-2">Preencha os campos do formulário abaixo para criar o seu registro.</p>
                        </div>
                    </div>
                    <FormRegister :isSigning.sync="isSigning"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FormRegister from "@/components/SignInUp/FormRegister.vue"
export default {
name: 'RegisterUser',
components:  {
    FormRegister
},
data() {
    return {
        isSigning: false
    }
},
methods: {
    goTo(route) {
        if(!this.isSigning) {
            this.$router.push(route)
        }
    },
}

}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/responsive.scss';

    #containerRegisterUser {
        padding: 50px 0;

        @include d(sm) {
            padding: 30px 0;
        }

        @include d(xs) {
            padding: 20px 0;
        }

        .imgLogo {
            max-width: 125px;
            width: 100%;
            @include d(sm) {
                // max-width: 100px;
            }
        }

        .containerIntro {
            margin-left: 40px;
            @include d(xs) {
                margin-left: 0;
                margin-top: 20px;
            }
            .registerTitle {
                font-size: 2.25rem;
                font-weight: 700;

                @include d(md) {
                    font-size: 2rem;
                }

                @include d(xs) {
                    font-size: 1.5rem;
                }
            }

            .registerText {
                font-size: 1rem;
                @include d(xs) {
                    font-size: .9rem;
                }
            }
        }

        .bBack {
            color: white;
            border: 2px solid #00ca8d;
            border-radius: 32px;
            font-size: 1rem;
            background: transparent;
            transition: .2s ;
            padding: 5px 20px 5px 20px;
            margin-bottom: 30px;

            &:hover {
                background: #00ca8d;
            }

            @include d(xs) {
                font-size: .9rem;
            }
        }

        .disButton {
            opacity: .8;
        }
    }
</style>