<template>
  <div>
      <Header :clientId="studentId" :slug="slug"/>
      <section id="containerWorkoutList">
          <div class="container">
              <div class="row">
                  <div class="col">
                      <div class="d-flex justify-content-end">
                          <button @click.prevent="goTo(`/${studentId}/${slug}/dashboard/`)" class="bPattern"><i class="fas fa-reply mr-2"></i>Voltar</button>
                      </div>
                      <p class="workoutListTitle mb-0">Os exercícios da ficha de treino <b>{{workouts[sheetId-1].name}}</b></p>
                      <div class="containerList">
                        <div class="row">
                            <div class="col-12 containerBox" v-for="(workout,index) in workouts[sheetId-1].exercises" :key="index">
                                <div class="boxWorkout">
                                    <div class="d-flex align-items-center">
                                        <p class="workoutNum mb-0 mr-3">{{workout.number}}</p>
                                        <p class="workoutName mb-0">{{workout.name}}</p>
                                    </div>
                                    <!-- <p class="workoutExercises">{{workout.exercises.length}} Exercícios</p> -->
                                    <!-- <p class="workoutLast">Última excecução: {{new Date(workout.lastExecution).toLocaleDateString('pt-BR')}}</p> -->
                                    <!-- <button @click.prevent="selectThisExercise(workout)" class="bSelect w-100">Selecionar</button> -->
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end">
                          <button @click.prevent="startTrain()" class="bPattern"><i class="fas fa-play mr-2"></i>Começar</button>
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
name: 'TrainingSheet',
props:['slug','studentId','sheetId'],
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
                    {number:16,id:1,name:"Adutora"},
                    {number:17,id:2,name:"Redutora"},
                    {number:18,id:3,name:"panturilha"},
                    {number:19,id:3,name:"panturilha"},
                    {number:20,id:3,name:"panturilha"},
                    {number:21,id:3,name:"panturilha"},
                    {number:33,id:3,name:"panturilha"},
                    {number:34,id:3,name:"panturilha"},
                ],
                lastExecution: '2022-04-07T09:57'
            },
            {
                id:2,
                name: "Perna e ombro",
                exercises: [
                   {number:16,id:1,name:"Adutora"},
                    {number:17,id:2,name:"Redutora"},
                    {number:18,id:3,name:"panturilha"},
                    {number:19,id:3,name:"panturilha"},
                    {number:20,id:3,name:"panturilha"},
                    {number:21,id:3,name:"panturilha"},
                    {number:33,id:3,name:"panturilha"},
                    {number:34,id:3,name:"panturilha"},
                ],
                lastExecution: '2022-04-07T09:57'
            },
            {
                id:3,
                name: "Perna e ombro",
                exercises: [
                    {number:16,id:1,name:"Adutora"},
                    {number:17,id:2,name:"Redutora"},
                    {number:18,id:3,name:"panturilha"},
                    {number:19,id:3,name:"panturilha"},
                    {number:20,id:3,name:"panturilha"},
                    {number:21,id:3,name:"panturilha"},
                    {number:33,id:3,name:"panturilha"},
                    {number:34,id:3,name:"panturilha"},
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
    },
    startTrain() {
        this.makeToast('info','Sua ficha de treino começou!')
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
#containerWorkoutList {
    padding: 50px 0;
    color: #fff;
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
                font-weight: 700;
                & + p {
                    // margin-top: 5px;
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

    .workoutNum {
        background: #00ca8d;
        border-radius: 3px;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
        padding: 8px 10px;
    }
}
</style>