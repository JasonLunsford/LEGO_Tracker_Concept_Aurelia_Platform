export class ViewDetails {
    constructor() {

    }

    activate(params) {
        this.id = params.id;
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this.message = `View Entry Details for ${this.type} and ${this.id} Displayed Here`;
    }

    detached() {}
}
