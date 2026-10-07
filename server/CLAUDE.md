# Zephyrex Auth

Identity-provider server built on [ServerFramework](https://github.com/JamesonRGrieve/ServerFramework). The framework provides all infrastructure and the protocol extensions; this project boots them.

## Architecture

This is a **consumer project**, not a framework fork. It depends on `zephyrex[...]~=0.0.1` from PyPI (one extra per protocol extension) and loads the framework's identity extensions, an authentik-style split of **providers** (this server *is* the IdP), **consumers/sources** (authenticate against an external IdP) and **outposts** (proxy / forward auth):

- **oauth** — OAuth 2 authorization server that is also an OIDC OP; OAuth/OIDC sign-in against external IdPs
- **saml** — SAML 2.0 IdP + SP
- **ldap** — LDAP server + bind against an external directory
- **radius** — RADIUS server + client
- **scim** — SCIM 2.0 provisioning (push + receive)
- **webauthn** — passkeys (the provider side is parked in the framework)
- **kerberos** — SPNEGO sign-in against a realm (needs the `[kerberos]` extra; the KDC provider is parked)
- **x509** — mutual-TLS / client-certificate auth
- **proxy_auth** / **forward_auth** — reverse-proxy outposts

The extensions' code, tests and migrations live in the framework (`zephyrex.extensions.<name>`). Change them there, not here.

## Commands

```bash
pip install -e .                 # pulls zephyrex and the protocol extras from PyPI
pip install -e ".[kerberos]"     # add gssapi (needs system krb5 libs)
python app.py                    # Boot the server on port 2001
```

`FRAMEWORK_FERNET_KEY` must be set (from the secret store): the protocol extensions encrypt their stored secrets and refuse to start without it.

## How it works

`app.py` calls `zephyrex.run(extensions="oauth_provider,…,forward_auth_consumer", port=2001)`. The framework finds its bundled extensions, builds tables/REST/GraphQL, and provides core auth (User, Team, Role, Session) out of the box.
