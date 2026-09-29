// SPDX-License-Identifier: AGPL-3.0-or-later
// Client counterparts of this project's server extensions (server/extensions/*), kept
// name-for-name so each maps 1:1 to its server extension. Register the ones an app
// enables in its ZephyrexConfig `extensions` list.
import type { ZephyrexClientExtension } from 'zephyrex';
import { createExtension } from 'zephyrex/extensions';

export const authLdapExtension = createExtension('auth_ldap', { displayName: 'LDAP Authentication' });
export const authOauth2ServerExtension = createExtension('auth_oauth2_server', {
  displayName: 'OAuth2 Authorization Server',
});
export const forwardAuthConsumerExtension = createExtension('forward_auth_consumer');
export const forwardAuthProviderExtension = createExtension('forward_auth_provider');
export const kerberosConsumerExtension = createExtension('kerberos_consumer');
export const kerberosProviderExtension = createExtension('kerberos_provider');
export const ldapConsumerExtension = createExtension('ldap_consumer', { displayName: 'LDAP Consumer' });
export const ldapProviderExtension = createExtension('ldap_provider', { displayName: 'LDAP Provider' });
export const oauthConsumerExtension = createExtension('oauth_consumer', { displayName: 'OAuth Consumer' });
export const oauthProviderExtension = createExtension('oauth_provider', { displayName: 'OAuth Provider' });
export const oidcConsumerExtension = createExtension('oidc_consumer', { displayName: 'OIDC Consumer' });
export const oidcProviderExtension = createExtension('oidc_provider', { displayName: 'OIDC Provider' });
export const proxyAuthConsumerExtension = createExtension('proxy_auth_consumer');
export const proxyAuthProviderExtension = createExtension('proxy_auth_provider');
export const radiusConsumerExtension = createExtension('radius_consumer', { displayName: 'RADIUS Consumer' });
export const radiusProviderExtension = createExtension('radius_provider', { displayName: 'RADIUS Provider' });
export const samlConsumerExtension = createExtension('saml_consumer', { displayName: 'SAML Consumer' });
export const samlProviderExtension = createExtension('saml_provider', { displayName: 'SAML Provider' });
export const scimConsumerExtension = createExtension('scim_consumer', { displayName: 'SCIM Consumer' });
export const scimProviderExtension = createExtension('scim_provider', { displayName: 'SCIM Provider' });
export const webauthnConsumerExtension = createExtension('webauthn_consumer', { displayName: 'WebAuthn Consumer' });
export const webauthnProviderExtension = createExtension('webauthn_provider', { displayName: 'WebAuthn Provider' });
export const x509ConsumerExtension = createExtension('x509_consumer', { displayName: 'X.509 Consumer' });
export const x509ProviderExtension = createExtension('x509_provider', { displayName: 'X.509 Provider' });

export const identityProviderExtensions: readonly ZephyrexClientExtension[] = [
  authLdapExtension,
  authOauth2ServerExtension,
  forwardAuthConsumerExtension,
  forwardAuthProviderExtension,
  kerberosConsumerExtension,
  kerberosProviderExtension,
  ldapConsumerExtension,
  ldapProviderExtension,
  oauthConsumerExtension,
  oauthProviderExtension,
  oidcConsumerExtension,
  oidcProviderExtension,
  proxyAuthConsumerExtension,
  proxyAuthProviderExtension,
  radiusConsumerExtension,
  radiusProviderExtension,
  samlConsumerExtension,
  samlProviderExtension,
  scimConsumerExtension,
  scimProviderExtension,
  webauthnConsumerExtension,
  webauthnProviderExtension,
  x509ConsumerExtension,
  x509ProviderExtension,
];
