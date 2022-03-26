<template>
  <b-form class="fRegister mt-3 mt-sm-4" @submit.prevent="RegisterUser">
    <b-alert :variant="alertSignIn.variant" :show="alertSignIn.status" class="mt-4">
        <i class="fas fa-info-circle mr-2"></i>{{alertSignIn.txt}}
    </b-alert>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserName">Nome completo</label>
          <input type="text" class="form-control" id="inputUserName" placeholder="Ex: João dos Santos" required v-model="form.userName">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserCPF">CPF</label>
          <input type="text" class="form-control" id="inputUserCPF" placeholder="Ex: 000.000.000-00" required v-mask="'###.###.###-##'" v-model="form.userCPF">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserRG">RG</label>
          <input type="text" class="form-control" id="inputUserRG" placeholder="Ex: 00.000.000-0" required v-mask="'##.###.###-#'" v-model="form.userRG">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserCEP">CEP</label>
          <input type="text" class="form-control" id="inputUserCEP" placeholder="Ex: 00000-000" required v-mask="'#####-###'" v-model="form.userCEP">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserCity">Cidade</label>
          <input type="text" class="form-control" id="inputUserCity" placeholder="Ex: Campinas" required v-model="form.userCity">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserState">Estado</label>
          <b-form-select id="inputUserState" v-model="form.userState" :options="states"></b-form-select>
        </div>
      </div>
      <div class="w-100 my-1 my-md-2"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserAddress">Endereço</label>
          <input type="text" class="form-control" id="inputUserAddress" placeholder="Ex: Avenida Independência" required v-model="form.userAddress">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserNumber">Número</label>
          <input type="text" class="form-control" id="inputUserNumber"  required placeholder="Ex: 450" v-mask="'########'" v-model="form.userNumber">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserNeighborhood">Bairro</label>
          <input type="text" class="form-control" id="inputUserNeighborhood" required  placeholder="Ex: Centro" v-model="form.userNeighborhood">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserPhone">Celular</label>
          <input type="text" class="form-control" id="inputUserPhone" required placeholder="Ex: 00 00000-0000" v-mask="'(##) #####-####'" v-model="form.userPhone">
        </div>
      </div>
      <div class="w-100 my-1 my-md-2"></div>
      <div class="col-12 col-md-6">
        <div class="form-group mb-0">
          <label for="inputUserMail">E-mail</label>
          <input type="email" class="form-control" id="inputUserMail" required placeholder="Ex: seuEmail@gmail.com" v-model="form.userMail">
          <small class="d-flex flex-column mt-2">
            <div class="mb-2 hint hint-warning"><i class="fas fa-info-circle mr-2"></i>Futuras cobranças serão enviadas por aqui.</div>
            <div class="hint hint-danger"><i class="fas fa-info-circle mr-2"></i>Será preciso confirmar o e-mail para usar a conta.</div>
          </small>
        </div>
      </div>
      <div class="w-100 my-1 my-md-2"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserLogin">Usuário</label>
          <input type="text" class="form-control" id="inputUserLogin" required placeholder="" v-model="form.userLogin" @change.prevent="formatUsername">
          <div class="mt-2">
            <small class="hint hint-warning"><i class="fas fa-info-circle mr-2"></i>Espaços serão preenchidos por "-"</small>
          </div>
        </div>
      </div>
      <div class="w-100 my-1 my-md-2 d-md-none"></div>
      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="inputUserPassword">Senha</label>
          <input type="password" class="form-control" id="inputUserPassword" required placeholder="Ex: V&l@st&r419" v-model="form.userPassword">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <button :disabled="bSign.disabled" :class="{'disButton': isSigning}" class="bSign" type="submit">{{bSign.text}} <i class="fas fa-chevron-circle-right ml-2"></i></button>
    </div>
  </b-form>
</template>

<script>
export default {
name: 'FormRegister',
props: ['isSigning'],
data() {
  return {
    alertSignIn : {
      txt: 'Usuário ou senha inválidos.',
      variant: 'danger',
      status: false
    },
    form : {
      userName: '',
      userCPF: '',
      userRG: '',
      userCEP: '',
      userCity: '',
      userState: '',
      userAddress: '',
      userNumber: '',
      userNeighborhood: '',
      userPhone: '',
      userMail: '',
      userLogin: '',
      userPassword: ''
    },
    states: [
      {value:'AC',text:'Acre (AC)'},
      {value:'AL',text:'Alagoas (AL)'},
      {value:'AM',text:'Amazonas (AM)'},
      {value:'AP',text:'Amapá (AP)'},
      {value:'BA',text:'Bahia (BA)'},
      {value:'CE',text:'Ceará (CE)'},
      {value:'DF',text:'Distrito Federal (DF)'},
      {value:'ES',text:'Espírito Santo (ES)'},
      {value:'GO',text:'Goiás (GO)'},
      {value:'MA',text:'Maranhão (MA)'},
      {value:'MG',text:'Minas Gerais (MG)'},
      {value:'MS',text:'Mato Grosso do Sul (MS)'},
      {value:'MT',text:'Mato Grosso (MT)'},
      {value:'PA',text:'Pará (PA)'},
      {value:'PB',text:'Paraíba (PB)'},
      {value:'PE',text:'Pernambuco (PE)'},
      {value:'PI',text:'Piauí (PI)'},
      {value:'PR',text:'Paraná (PR)'},
      {value:'RJ',text:'Rio de Janeiro (RJ)'},
      {value:'RN',text:'Rio Grande do Norte (RN)'},
      {value:'RO',text:'Rondônia (RO)'},
      {value:'RR',text:'Roraima (RR)'},
      {value:'RS',text:'Rio Grande do Sul (RS)'},
      {value:'SC',text:'Santa Catarina (SC)'},
      {value:'SE',text:'Sergipe (SE)'},
      {value:'SP',text:'São Paulo (SP)'},
      {value:'TO',text:'Tocantins (TO)'},
    ],
    bSign: {
      text: 'Cadastrar',
      disabled: this.isSigning
    }
  }
},
methods: {
  RegisterUser() {
    this.$emit("update:isSigning",true)
    console.log(this.form)
    this.$emit("update:isSigning",false)
  },
  // formatSlug() {
  //     var slug = this.form.academySlug
  //     // eslint-disable-next-line no-useless-escape
  //     var formatedName = slug.replaceAll(/[`~!@#$%+^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
  //     formatedName = formatedName.replaceAll("-"," ")
  //     formatedName = formatedName.replaceAll(/[ ]/g,"-")
  //     formatedName = formatedName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  //     var readyToReturn = ""
  //     // for(var i=0;i<formatedName.length;i++) {
  //     //     if(formatedName[i]=="-" && formatedName[i+1]=="-") {
  //     //         readyToReturn = formatedName
  //     //         readyToReturn = readyToReturn.slice(0,i) + readyToReturn.slice(i+1);
  //     //     }
  //     // }
  //     this.form.academySlug = readyToReturn != "" ? readyToReturn : formatedName
  // },
  formatUsername() {
    var slug = this.form.userLogin
      // eslint-disable-next-line no-useless-escape
      var formatedName = slug.replaceAll(/[`~!@#$%+^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      formatedName = formatedName.replaceAll("-"," ")
      formatedName = formatedName.replaceAll(/[ ]/g,"-")
      formatedName = formatedName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      var readyToReturn = ""
      // for(var i=0;i<formatedName.length;i++) {
      //     if(formatedName[i]=="-" && formatedName[i+1]=="-") {
      //         readyToReturn = formatedName
      //         readyToReturn = readyToReturn.slice(0,i) + readyToReturn.slice(i+1);
      //     }
      // }
      this.form.userLogin = readyToReturn != "" ? readyToReturn : formatedName
  }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
  .fRegister {
    .bSign {
      color: white;
      border: 2px solid #00ca8d;
      border-radius: 32px;
      font-size: 1.15rem;
      background: transparent;
      transition: .2s ;
      padding: 5px 20px 5px 20px;
      margin-bottom: 30px;

      &:hover {
        background: #00ca8d;
      }

      @include d(xs) {
        font-size: 1rem;
      }
    }

    .disButton {
      opacity: .8;
    }
  }
  .hint {
    width: fit-content;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: 700;
  }

  .hint-danger {
    color: #fc1616 !important;
    background: #fff;
    i{
      color: #fc1616;
    }
  }

  .hint-warning {
    color: #9c6716 !important;
    background: rgb(255, 255, 255);
    i{
      color: #9c6716;
    }
  }
</style>