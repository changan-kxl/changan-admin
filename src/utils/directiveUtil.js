export const loadDirective = function (directives, options) {
  const { app } = options;
  if (!directives) {
    return;
  }
  for (let d of Object.keys(directives)) {
    app.directive(d, directives[d]);
  }
};
