<template>
  <div>
    <FullLoader :text="loader.text" v-if="loader.visible"/>
    <b-form class="fRegister mt-3 mt-sm-4" @submit.prevent="RegisterUser">
      <b-alert :variant="alertSignIn.variant" :show="alertSignIn.status" class="mt-4">
        <i class="fas fa-info-circle mr-2"></i>{{alertSignIn.txt}}
      </b-alert>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserName">Nome completo</label>
            <input type="text" class="form-control" id="inputUserName" placeholder="Ex: João dos Santos" required v-model="form.name">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserCPF">CPF</label>
            <input type="text" class="form-control" id="inputUserCPF" placeholder="Ex: 000.000.000-00" required v-mask="'###.###.###-##'" v-model="form.cpf">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserRG">RG</label>
            <input type="text" class="form-control" id="inputUserRG" placeholder="Ex: 00.000.000-0" required v-mask="'##.###.###-#'" v-model="form.rg">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserCEP">CEP</label>
            <input type="text" class="form-control" id="inputUserCEP" placeholder="Ex: 00000-000" required v-mask="'#####-###'" v-model="form.cep" @change.prevent="loadAddress">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserCity">Cidade</label>
            <input type="text" class="form-control" id="inputUserCity" placeholder="Ex: Campinas" required v-model="form.city">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserState">Estado</label>
            <b-form-select id="inputUserState" v-model="form.state" :options="states"></b-form-select>
          </div>
        </div>
        <div class="w-100 my-1 my-md-2"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserAddress">Endereço</label>
            <input type="text" class="form-control" id="inputUserAddress" placeholder="Ex: Avenida Independência" required v-model="form.address">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserNumber">Número</label>
            <input type="text" class="form-control" id="inputUserNumber"  required placeholder="Ex: 450" v-mask="'########'" v-model="form.number">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserNeighborhood">Bairro</label>
            <input type="text" class="form-control" id="inputUserNeighborhood" required  placeholder="Ex: Centro" v-model="form.neighborhood">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserPhone">Celular</label>
            <input type="text" class="form-control" id="inputUserPhone" required placeholder="Ex: 00 00000-0000" v-mask="'(##) #####-####'" v-model="form.phone">
          </div>
        </div>
        <div class="w-100 my-1 my-md-2"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserMail">E-mail</label>
            <input type="email" class="form-control" id="inputUserMail" required placeholder="Ex: seuEmail@gmail.com" v-model="form.email">
          </div>
          <div class="infoDetail">
            <p class="mb-0"><i class="fas fa-info-circle mr-2"></i>Futuras cobranças serão enviadas por aqui.</p>
          </div>
          <div class="infoDetail">
            <p class="mb-0"><i class="fas fa-info-circle mr-2"></i>Será preciso confirmar o e-mail para usar a conta.</p>
          </div>
        </div>
        <div class="w-100 my-1 my-md-2"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserLogin">Usuário</label>
            <input type="text" class="form-control" id="inputUserLogin" required placeholder="" v-model="form.username" @change.prevent="formatUsername">
          </div>
          <div class="infoDetail">
              <p class="mb-0"><i class="fas fa-info-circle mr-2"></i>Caracteres especiais e acentos serão removidos.</p>
          </div>
          <div class="infoDetail">
              <p class="mb-0"><i class="fas fa-info-circle mr-2"></i>Espaços serão substítuidos por "-".</p>
          </div>
        </div>
        <div class="w-100 my-1 my-md-2 d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="inputUserPassword">Senha</label>
            <input type="password" class="form-control" id="inputUserPassword" required placeholder="Ex: V&l@st&r419" v-model="form.password">
          </div>
          <div class="infoDetail">
            <p class="mb-0"><i class="fas fa-info-circle mr-2"></i>No mínimo 8 caracteres.</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <button :disabled="bRegister.disabled" :class="{'disButton': isSigning}" class="bPattern withIcon mr-4" type="button" @click.prevent="goTo('/')"><i class="fas fa-reply mr-2"></i>Voltar</button>
        <button :disabled="bRegister.disabled" :class="{'disButton': isSigning}" class="bPattern withIcon" type="submit"><i class="fas fa-plus mr-2"></i> {{bRegister.text}}</button>
      </div>
    </b-form>
  </div>
</template>

<script>
import FullLoader from '@/components/FullLoader.vue'
export default {
name: 'FormRegister',
props: ['isSigning'],
components: {
  FullLoader
},
data() {
  return {
    loader: {
      text: "",
      visible: false
    },
    alertSignIn : {
      txt: 'Usuário ou senha inválidos.',
      variant: 'danger',
      status: false
    },
    form : {
      name: '',
      cpf: '',
      rg: '',
      cep: '',
      city: '',
      state: '',
      neighborhood: '',
      address: '',
      number: '',
      email: '',
      phone: '',
      username: '',
      password: ''
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
    bRegister: {
      text: 'Cadastrar',
      disabled: this.isSigning
    }
  }
},
methods: {
  /* eslint-disable */
  cleanStr(str) {
    
    str = str.replaceAll(/[`~!@#$%+^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    str = str.replaceAll("-"," ")
    str = str.replaceAll(/[ ]/g,"-")
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return str
  },
  async RegisterUser() {
    this.$emit("update:isSigning",true)
    
    this.alertSignIn.status = false
    this.bRegister.disabled = true
    this.bRegister.text = "Cadastrando"
    this.loader.text = "Solicitando cadastro..."
    this.loader.visible = true

    if(this.form.password.length<8) {
      this.alertRegister.text = "A digitada senha não atende os requisitos."
      this.alertRegister.variant = "warning"
      this.alertRegister.status = true
      this.bRegister.text = "Cadastrar"
      this.bRegister.disabled = false
      return
    }

    this.form.username = this.cleanStr(this.form.username)
    this.form.cep = this.form.cep.replaceAll("-","")
    this.form.cpf = this.form.cpf.replaceAll('.', '');
    this.form.cpf = this.form.cpf.replaceAll('-', '');
    this.form.rg = this.form.rg.replaceAll('-', '');
    this.form.rg = this.form.rg.replaceAll('.', '');
    this.form.phone = this.form.phone.replaceAll("-", '')
    this.form.phone = this.form.phone.replaceAll(/[() ]/gi, '')

    try {
      await this.$api.registerUser(this.form).then(res=> {
        if(res.data.msg=="success") {
          this.alertSignIn.txt = "Registro feito com sucesso!"
          this.alertSignIn.variant = "success"
          this.alertSignIn.status = true
        }else if(res.data.code==1){
          this.alertSignIn.txt = "Alguma academia em nosso sistema já possui o slug que você colocou, troque-o e tente novamente"
          this.alertSignIn.variant = "warning"
          this.alertSignIn.status = true
        }else {
          this.alertSignIn.txt = "Algum erro aconteceu, tente novamente mais tarde!"
          this.alertSignIn.variant = "danger"
          this.alertSignIn.status = true
        }
      }).catch(err=> {
        this.alertSignIn.txt = "Algum erro aconteceu, tente novamente mais tarde!"
        this.alertSignIn.variant = "danger"
        this.alertSignIn.status = true
      })
    } catch (error) {
      console.log(error)
      this.alertSignIn.txt = "Algum erro aconteceu, tente novamente mais tarde!"
      this.alertSignIn.variant = "danger"
      this.alertSignIn.status = true
    }

    this.loader.visible = false
    this.bRegister.text = "Cadastrar"
    this.bRegister.disabled = false
    this.$emit("update:isSigning",false)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  },
  formatUsername() {
    var slug = this.form.username
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
      this.form.username = readyToReturn != "" ? readyToReturn : formatedName
  },
  TestaCPF(strCPF) {
        strCPF = strCPF.replaceAll('.', '');
        strCPF = strCPF.replaceAll('-', '');
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
  },
  async loadAddress() {
        this.loader.text = "Buscando CEP..."
        this.loader.visible = true
        this.alertSignIn.status = false
        var cleanCep = this.form.cep
        cleanCep = cleanCep.replaceAll("-","")
        if(cleanCep.length<8 && cleanCep!="") {
            this.alertSignIn.variant = "danger"
            this.alertSignIn.txt = "Digite um CEP válido!"
            this.alertSignIn.status = true
            return
        }
        try {
            await this.$api.getAddress(cleanCep).then(res=> {
                console.log(res.data)
                if(!res.data.erro) {
                    var cepInfo = res.data
                    this.form.city = cepInfo.localidade
                    this.form.state = cepInfo.uf
                    this.form.address = cepInfo.logradouro
                    this.form.neighborhood = cepInfo.bairro
                }else {
                    this.alertSignIn.variant = "danger"
                    this.alertSignIn.txt = "Digite um CEP válido!"
                    this.alertSignIn.status = true
                    return
                }
            })
        } catch (error) {
            console.log(error)
            this.alertSignIn.variant = "warning"
            this.alertSignIn.txt = "Erro ao obter CEP"
            this.alertSignIn.status = true
        }
        this.loader.visible = false
  }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';
  .fRegister {
    color: white;
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
  
  
  .infoDetail {
    width: fit-content;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    border-radius: 16px;
    padding: 5px 15px;
    color: #039c6e !important;
    font-weight: 700;
    font-size: .8rem;

    & + .infoDetail {
      margin-top: 15px;
    }

    &:last-child {
      margin-bottom: 15px;
    }
  }
</style>