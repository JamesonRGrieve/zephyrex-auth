# Zephyrex Auth

Identity-provider extensions built on the Zephyrex framework.

## Structure

```
server/     Python backend — IdP protocol extensions for the Zephyrex server
```

## Server

The server is a consumer of the `zephyrex` Python package. It defines the
advanced auth/identity-provider extensions (an authentik-style featureset)
as provider + consumer pairs, plus `auth_ldap`:

- `oauth_provider` / `oauth_consumer`
- `oidc_provider` / `oidc_consumer`
- `saml_provider` / `saml_consumer`
- `ldap_provider` / `ldap_consumer` (+ `auth_ldap`)
- `radius_provider` / `radius_consumer`
- `scim_provider` / `scim_consumer`
- `webauthn_provider` / `webauthn_consumer`
- `kerberos_provider` / `kerberos_consumer`
- `x509_provider` / `x509_consumer`
- `proxy_auth_provider` / `proxy_auth_consumer`
- `forward_auth_provider` / `forward_auth_consumer`

```bash
cd server
pip install -e "../../server-framework[all]"   # editable framework for local dev
pip install -e ".[dev]"
python app.py
```

## Testing

```bash
cd server && python -m pytest extensions/
```
