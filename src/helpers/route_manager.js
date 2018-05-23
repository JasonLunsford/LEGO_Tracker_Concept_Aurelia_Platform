
export class RouteManager {
    myRouter(mode, aspects) {
        let { target, state, parent, child } = aspects;

        switch(mode) {
            case 'collections':
                let route = `${mode}/${target}`
                this.router.navigate(route);
                break;
        }
    }
}
