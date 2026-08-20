# Zephyrex Auth

Consumer project built on [ServerFramework](https://github.com/JamesonRGrieve/ServerFramework). Provides the advanced identity-provider featureset — the framework handles all core infrastructure.

## Architecture

This is a **consumer project**, not a framework fork. It depends on `zephyrex` via pip and provides only the protocol extensions that turn the server into (or connect it to) an identity provider — mirroring an authentik-style split of **providers** (this server *is* the IdP), **consumers/sources** (authenticate against an external IdP), and **outposts** (proxy / forward auth).

Each protocol ships as a provider + consumer pair:

- **oauth** / **oidc** — OAuth2 issuer + OIDC provider; authenticate against external OAuth2/OIDC IdPs
- **saml** — SAML 2.0 IdP + SP (authenticate against an external IdP)
- **ldap** — act as an LDAP server + bind against an external directory (`auth_ldap` bundles both)
- **radius** — RADIUS server + client
- **scim** — SCIM 2.0 provisioning (push + receive)
- **webauthn** — WebAuthn/FIDO2 relying party (provider + consumer)
- **kerberos** — Kerberos/GSSAPI (provider + consumer; needs the `[kerberos]` extra)
- **x509** — mutual-TLS / client-certificate auth
- **proxy_auth** / **forward_auth** — reverse-proxy outposts

All of these depend on the framework's `auth_session` extension for session-backed
state; the base auth extensions (`auth_oauth`, `auth_mfa`, `auth_merge`,
`auth_session`, …) stay in the framework.

## Commands

```bash
pip install -e ".[dev]"      # Install with dev deps (pulls zephyrex from git)
pip install -e ".[dev,kerberos]"  # add gssapi (needs system krb5 libs)
python app.py                # Boot the server on port 2001
pytest extensions/           # Run extension tests
```

## How it works

`app.py` calls `zephyrex.run(extensions="oauth_provider,…,auth_ldap", extensions_path="./extensions")`. The framework discovers `BLL_*.py` models under `./extensions/<name>/`, auto-generates SQLAlchemy tables, REST CRUD endpoints, and GraphQL schema, and provides core auth (User, Team, Role, Session) out of the box. `conftest.py` extends the `zephyrex.extensions` namespace path so tests import these extensions as `zephyrex.extensions.<name>`.
