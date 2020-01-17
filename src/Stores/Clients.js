import { observable, computed, action } from  'mobx'


export class Clients {

    @observable clientsArray = []
    @observable showPopup = false
    @observable rowToEdit = {}
    
    @action togglePopup = (row) => {
        this.showPopup = !this.showPopup
        this.rowToEdit = row
    }

    // constructor() {
    //     this.clientsArray = []
    // }
}