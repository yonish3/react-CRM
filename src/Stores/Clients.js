import { observable, computed, action } from  'mobx'
import axios from 'axios';


export class Clients {

    @observable clientsArray = []
    @observable showPopup = false
    @observable rowToEdit = {}
    
    @action togglePopup = (row) => {
        this.showPopup = !this.showPopup
        this.rowToEdit = row
    }

    @action getDataFromDB = async () => {
        this.clientsArray = await axios.get(`http://localhost:4001/data`)
    }

    // constructor() {
    //     this.clientsArray = []
    // }
}