<template>
  <div>
      <Header :clientId="studentId" :slug="slug"/>
      <section id="containerWorkoutList">
          <div class="container">
              <div class="row">
                  <div class="col">
                      <p class="workoutListTitle mb-0">Suas fichas de trino</p>
                      <div class="containerList">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 containerBox" v-for="(workout,index) in workouts" :key="index">
                                <div class="boxWorkout">
                                    <p class="workoutName">{{workout.name}}</p>
                                    <p class="workoutExercises">{{workout.exercises.length}} Exercícios</p>
                                    <p class="workoutLast">Última excecução: {{new Date(workout.lastExecution).toLocaleDateString('pt-BR')}}</p>
                                    <button @click.prevent="selectThisExercise(workout)" class="bSelect w-100">Selecionar</button>
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
name: 'DashboardPage',
props:['slug','studentId'],
components: {
    Header
},
data() {
    return {
        workouts: [
            {
                id:1,
                name: "Perna e ombro",
                exercises: [
                    {id:1,name:"Adutora"},
                    {id:2,name:"Redutora"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                ],
                lastExecution: '2022-04-07T09:57'
            },
            {
                id:2,
                name: "Perna e ombro",
                exercises: [
                    {id:1,name:"Adutora"},
                    {id:2,name:"Redutora"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                ],
                lastExecution: '2022-04-07T09:57'
            },
            {
                id:3,
                name: "Perna e ombro",
                exercises: [
                    {id:1,name:"Adutora"},
                    {id:2,name:"Redutora"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                    {id:3,name:"panturilha"},
                ],
                lastExecution: '2022-04-07T09:57'
            }
        ]
    }
},
methods: {
    /* eslint-disable */
    selectThisExercise(workout) {
        this.$router.push(`/${this.studentId}/${this.slug}/dashboard/training-sheet/${workout.id}`)
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
#containerWorkoutList {
    color: #fff;
    padding: 50px 0;
    .workoutListTitle {
        font-weight: bold;
        font-size: 1.75rem;
        @include d(md) {
            font-size: 1.5rem;
        }
        @include d(xs) {
            font-size: 1.35rem;
        }
    }

    .containerList {
        margin-top: 30px;
        .containerBox {
            margin-bottom:30px ;
            .boxWorkout {
            background: #f6f6f6;
            cursor: pointer;
            height: 100%;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
            // margin-bottom: 30px;
            padding: 15px 30px;
            transition: .2s;
            &:hover {
                filter: brightness(.9);
            }
            
            
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
}
</style>