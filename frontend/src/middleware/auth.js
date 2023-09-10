export default function auth({next, store}) {
    if (!store.getters.auth.loggedIn) {
        return next('/auth?message=login')
    }
    return next()
}
