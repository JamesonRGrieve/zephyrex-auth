# Zephyrex Auth

Identity-provider server built on the Zephyrex framework.

## Structure

```
server/     Python app — boots the framework's identity-protocol extensions
client/     Client extensions (`zephyrex` ZephyrexClientExtension), one per server
            extension, name-for-name; apps add the ones they enable to their config
```

## Server

The server is a consumer of the `zephyrex` Python package (PyPI, `~=0.0.1`, one extra per protocol). It runs the framework's bundled identity extensions as provider + consumer pairs:

- `oauth_provider` / `oauth_consumer` (OIDC is a profile of these)
- `saml_provider` / `saml_consumer`
- `ldap_provider` / `ldap_consumer`
- `radius_provider` / `radius_consumer`
- `scim_provider` / `scim_consumer`
- `webauthn_provider` (parked) / `webauthn_consumer`
- `kerberos_provider` (parked) / `kerberos_consumer`
- `x509_provider` / `x509_consumer`
- `proxy_auth_provider` / `proxy_auth_consumer`
- `forward_auth_provider` / `forward_auth_consumer`

```bash
cd server
pip install -e .     # pulls zephyrex and the protocol extras from PyPI
python app.py
```

## Testing

The server extensions and their tests live in the framework (`server-framework`, `src/zephyrex/extensions/`).
