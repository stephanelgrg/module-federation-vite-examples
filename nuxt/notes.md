# Testing module federation for Nuxt ✨

## Useful links:

- https://github.com/module-federation
- https://github.com/gioboa/module-federation-vite-examples
- https://github.com/module-federation/nuxt

## Checklist

Getting started:

- [ ] Is CSR OK?
- [ ] Is SSR OK? (check hydration)

Managing libs:

- [ ] How many nuxt / vue instances do we have?

- [ ] What if we use different versions of the same lib (like Nuxt)?

Runtime:

- [ ] What about plugin / middleware usage?
  - Example with auth

Configuration:

- [ ] How to define when we use remote or host config (especially for SSR components)?

- [ ] Config
  - i18n (fetch keys)
  - what if we use singleton = false in host config or different versions?

Security

- [ ] CORS is set to true in the examples: https://vite.dev/config/server-options#server-cors
