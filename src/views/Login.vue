<template>
    <section id="containerForm">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <img class="logo" src="../assets/img/Logo.png" alt="">
                        <p class="sysName">Gymller</p>
                    </div>
                    <FormLogin/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FormLogin from "@/components/SignInUp/FormLogin.vue"
export default {
    name: 'Login-Page',
    components: {
        FormLogin
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/responsive.scss";
#containerForm {
    padding: 50px 0;
    color: white;;
    @include d(xs) {
        padding: 25px 0;
    }

    .logo {
        max-width: 200px;
        position: relative;
            
        @include d(lg) {
        max-width: 150px;
        }
    }

    .sysName {
        margin-top: 20px;
        font-size: 2rem;
        font-weight: 700;

        @include d(xs) {
            font-size: 1.75rem;
            margin-top: 15px;
        }
    }
}
</style>