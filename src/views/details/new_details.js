export class NewDetails {
    constructor() {

    }

    activate(params) {
        this.type = params.type;

        // promise to resolve entry details here
    }

    attached() {
        this.message = `New Entry Details for ${this.type} Displayed Here`;
    }

    detached() {}
}