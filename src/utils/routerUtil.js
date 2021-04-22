function loadGuards(guards, options) {
  const { beforeEach, afterEach } = guards
  const { router } = options
  beforeEach.forEach((guard) => {
    if (guard && typeof guard === 'function') {
      router.beforeEach((to, from, next) => guard(to, from, next, options))
    }
  })
  afterEach.forEach((guard) => {
    if (guard && typeof guard === 'function') {
      router.afterEach((to, from) => guard(to, from, options))
    }
  })
}

export { loadGuards }
