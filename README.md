# be-client

This is the #be JavaScript client.

It conveniently wraps the #be API for easy access.
It is currently used in the mobile apps.

# How to use the REPL

Ensure that the `origin` parameter of `BeClient` points to the server
you are using.

Then:

    $ npm run repl
    $> api.login('username', 'password')
    { token: 'asdasd' }
    Set token to asdasd
    $> api.me.get()
    { id: 42,
      full_name: 'User',
      ... }

