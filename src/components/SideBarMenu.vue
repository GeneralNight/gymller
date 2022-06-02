<template>
    <b-sidebar id="sidebarMenu" backdrop bg-variant="dark" text-variant="light" shadow>
        <div class="d-flex flex-column align-items-center">
            <img src="@/assets/img/Logo.png" alt="logo" class="logo">
            <p class="sysName mb-0">Gymller</p>
        </div>
        <div class="containerMenu">
            <nav>
                <ul>
                    <li>
                        <router-link :to="`/${clientId}/pick-gym`"><i class="fas fa-home mr-2"></i> Trocar academia</router-link>
                    </li>
                    <li v-if="this.$route.name!='PickGym'">
                        <router-link :to="`/${clientId}/${slug}/dashboard`"><i class="fas fa-user mr-2"></i>Fichas de treino</router-link>
                    </li>
                    <li>
                        <router-link :to="`/`"><i class="fas fa-power-off mr-2"></i>Sair</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </b-sidebar>
</template>

<script>
export default {
name: "SideBarMenu",
props:["slug","clientId"]
/* eslint-disable */
}
</script>

<style lang="scss" scoped>
#sidebarMenu {
    .logo {
        max-width: 100px;
    }

    .sysName {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 15px;
    }

    .containerMenu {
        nav {
            margin-top: 30px;
            ul {
                list-style: none;
                padding: 0;
                li {
                    &:hover {
                        background: #00ca8d;
                    }
                    a {
                        padding: 10px 0px 10px 20px;
                        color: #fff;
                        font-weight: 700;
                        font-size: 1.5rem;
                        width: 100%;
                        text-decoration: none;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 1.25rem;
                        }
                    }
                }
            }
        }
    }
}
</style>