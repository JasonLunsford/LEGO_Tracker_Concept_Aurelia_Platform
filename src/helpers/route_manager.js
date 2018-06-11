
export class RouteManager {

    myRouter(mode, aspects = {}) {
        let { target, state, parent, child } = aspects;
        let route = `${mode}`;

        switch (mode) {
            case 'collections':
                route = `${route}/${target}`;
                break;
            case 'dashboard':
                break;
            case 'details':
                route = `${route}/${state}/${target}/${parent}`;
                switch (state) {
                    case 'edit':
                    case 'view':
                        route = `${route}/${child}`;
                        break;
                    default:
                        break;
                }
                break;
        }

        this.router.navigate(route);
    }
}
