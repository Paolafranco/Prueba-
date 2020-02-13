class Pokemon {
  nombre;
  accionDeVuelo;
  accionDeDefensa;

  setaccionVuelo(accionDeVuelo){
      this.accionDeVuelo = accionDeVuelo
  }

  setaccionDefensa( accionDeDefensa){
      this. accionDeDefensa =  accionDeDefensa
  }

  
  comfly(){
      this.accionDeVuelo.fly()
    }
  
  comDefending(){
      this. accionDeDefensa.defending()
    }

}

class Vuelo extends Pokemon{
  display(){
    console.log('nooooooooo')
  }
}


class Charning extends Pokemon{
  display(){
    console.log('noooo soy')
  }
}


class VueloAlto{
  fly(){
    console.log('Estoyyyyy Volandooooo')
  }
}

class VueloRapidin{
  fly(){
    console.log('Estoy Vuela Vuelaaaa')
  }
}

class DefensaEscudo{
  defending(){
    console.log('defensaaaaaaa')
  }
}

class DefensaChick{
  defending(){
    console.log('defensaaaa and you')
  }
}

