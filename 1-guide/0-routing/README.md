# Routing

#### Common `app` methods

there are middlewares, which means these methods have access to res, req, next functions and then there are route handlers which determine what to do when a user visits certain URL

- `app.get()`
- `app.post()`
- `app.route()` - can chain `.get` `.post` to it to reduce the duplication
- `app.use()` -
 