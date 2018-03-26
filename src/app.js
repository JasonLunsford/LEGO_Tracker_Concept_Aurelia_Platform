export class App {
    configureRouter(config, router) {
        this.router = router;

        const handleUnknownRoutes = instruction => {
            return { route: 'four-oh-four', moduleId: 'views/four-oh-four' };
        }

        config.title = 'LEGO Tracker Dashboard';

        config.mapUnknownRoutes(handleUnknownRoutes);

        config.map([
            {   route: ['', '/'], redirect: 'dashboard' },
            {
                route:    '/dashboard',
                name:     'dashboard',
                moduleId: './views/dashboard/dashboard',
                title:    'Dashboard'
            },
            {
                route:    '/collections/:type',
                name:     'collections',
                href:     'collections',
                moduleId: './views/collections/collections',
                title:    'Collection',
                nav:      true
            },
            {
                route:    '/details/new/:type',
                name:     'new_details',
                href:     'new_details',
                moduleId: './views/details/new_details',
                title:    'New ', //refer to whatever is passed as type
                nav:      true
            },
            {
                route:    '/details/edit/:type/:id',
                name:     'edit_details',
                href:     'edit_details',
                moduleId: './views/details/edit_details',
                title:    'Edit',
                nav:      true
            },
            {
                route:    '/details/view/:type/:id',
                name:     'view_details',
                href:     'view_details',
                moduleId: './views/details/view_details',
                title:    'View',
                nav:      true
            }
        ]);
    }
}
