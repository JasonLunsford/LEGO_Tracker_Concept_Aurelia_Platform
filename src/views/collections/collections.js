export class Collections {
    constructor() {

    }

    activate(params) {
        this.type = params.type;

        // promise to resolve collection details here
    }

    attached() {
        this.message = `Collection Details for ${this.type} Displayed Here`;
    }

    detached() {}
}
