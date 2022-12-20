//crie um classe de ' Reservas '
class Reservation {
  constructor(guest, room, days) {
    this.guest = guest
    this.room = room
    this.days = days * Reservation.baseFee
  }

  //use o 'static' para definir um valor 'padrão' para TODAS as instancias de 'Reservation'
  static baseFee = 120 

  //metodo statico para mostrar o valor da taxa 
  static showBaseFee() {
    console.log(`Base fee is ${Reservation.baseFee}`)
  }

  //utilize o 'static' com o 'get'
  static get premiumFee() {
    return Reservation.baseFee * 1.5
  }
}

Reservation.showBaseFee()

//instancias de Reservation
const reserv1 = new Reservation(3, '203',  4)
console.log(reserv1)

const reserv2 = new Reservation(2, '200', 5)
console.log(reserv2)

console.log(`Premium fee is $${Reservation.premiumFee}`)