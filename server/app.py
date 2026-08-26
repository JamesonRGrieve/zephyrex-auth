"""Zephyrex Auth — a consumer app built on ServerFramework.

Provides the advanced identity-provider featureset (an authentik-style set of
providers, consumers/sources and outposts) as pluggable extensions. All
infrastructure (core auth, sessions, DB, REST, GraphQL, migrations) comes from
the framework; this project only supplies the protocol extensions.

    python app.py              # boot with uvicorn
    python -c "from app import create; create()"  # programmatic
"""
import os

os.environ.setdefault("APP_NAME", "Zephyrex Auth")
os.environ.setdefault("DATABASE_TYPE", "sqlite")
os.environ.setdefault("DATABASE_NAME", "zephyrex_auth")
os.environ.setdefault("SEED_DATA", "true")
os.environ.setdefault("JWT_SECRET", "dev-only-change-in-production-32chars!")

from zephyrex import run

EXTENSIONS = (
    "oauth_provider,oauth_consumer,"
    "oidc_provider,oidc_consumer,"
    "saml_provider,saml_consumer,"
    "ldap_provider,ldap_consumer,"
    "radius_provider,radius_consumer,"
    "scim_provider,scim_consumer,"
    "webauthn_provider,webauthn_consumer,"
    "kerberos_provider,kerberos_consumer,"
    "x509_provider,x509_consumer,"
    "proxy_auth_provider,proxy_auth_consumer,"
    "forward_auth_provider,forward_auth_consumer,"
    "auth_ldap,"
    "auth_oauth2_server"
)

if __name__ == "__main__":
    run(
        extensions=EXTENSIONS,
        extensions_path="./extensions",
        port=2001,
    )


def create():
    """Return a FastAPI app instance for testing or ASGI mounting."""
    from zephyrex import instance, set_extensions_root

    set_extensions_root("./extensions")
    return instance(extensions=EXTENSIONS)
