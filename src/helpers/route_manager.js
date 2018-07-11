
export class RouteManager {

    myRouter(mode, aspects = {}) {
        let { target, state, id } = aspects;
        let route = `${mode}`;

        switch (mode) {
            case 'collections':
                route = `${route}/${target}`;
                break;
            case 'dashboard':
                break;
            case 'details':
                route = `${route}/${state}/${target}`;
                switch (state) {
                    case 'edit':
                    case 'view':
                        route = `${route}/${id}`;
                        break;
                    default:
                        break;
                }
                break;
        }

        this.router.navigate(route);
    }
}
