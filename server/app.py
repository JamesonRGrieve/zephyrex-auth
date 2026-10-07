# SPDX-License-Identifier: AGPL-3.0-or-later
"""Zephyrex Auth — an identity-provider server built on ServerFramework.

Boots the framework's bundled identity-protocol extensions (an
authentik-style set of providers, consumers/sources and outposts). All
infrastructure (core auth, sessions, DB, REST, GraphQL, migrations) and the
extensions themselves come from the ``zephyrex`` package.

kerberos_consumer needs the ``kerberos`` extra (gssapi, system krb5 libs).
kerberos_provider and webauthn_provider are parked in the framework and
provide nothing yet.

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
    "saml_provider,saml_consumer,"
    "ldap_provider,ldap_consumer,"
    "radius_provider,radius_consumer,"
    "scim_provider,scim_consumer,"
    "webauthn_provider,webauthn_consumer,"
    "kerberos_provider,kerberos_consumer,"
    "x509_provider,x509_consumer,"
    "proxy_auth_provider,proxy_auth_consumer,"
    "forward_auth_provider,forward_auth_consumer"
)

if __name__ == "__main__":
    run(extensions=EXTENSIONS, port=2001)


def create():
    """Return a FastAPI app instance for testing or ASGI mounting."""
    from zephyrex import instance

    return instance(extensions=EXTENSIONS)
