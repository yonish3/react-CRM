import { observable} from  'mobx'


export class Client {
    @observable _id
    @observable name
    @observable email
    @observable firstContact
    @observable emailType
    @observable sold
    @observable owner
    @observable country

    // constructor() {
    //     this.clientsArray = []
    // }
}