
export class RouteManager {

    myRouter(mode, aspects = {}) {
        let { target, state, parent, child } = aspects;
        let route;

        switch(mode) {
            case 'collections':
                route = `${mode}/${target}`;
                this.router.navigate(route);
                break;
            case 'dashboard':
                route = `${mode}`;
                this.router.navigate(route);
                break;
        }
    }
}
