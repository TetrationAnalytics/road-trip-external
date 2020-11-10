# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

# Rails.application.config.content_security_policy do |policy|
#   policy.default_src :self, :https
#   policy.font_src    :self, :https, :data
#   policy.img_src     :self, :https, :data
#   policy.object_src  :none
#   policy.script_src  :self, :https
#   policy.style_src   :self, :https

#   # Specify URI for violation reports
#   # policy.report_uri "/csp-violation-report-endpoint"
# end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator =
#   -> request { SecureRandom.base64(16) }

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true

#
# SecureHeaders gem configuration.
#

connect_src = ["'self'", 'https:']
# For development/test, additional configs are required by webpacker.
connect_src += ['http://localhost:3037', 'ws://localhost:3037'] unless Rails.env.production?

style_src = ["'self'", 'https:', "'unsafe-inline'"]
style_src += ['blob:'] if Rails.env.development?

SecureHeaders::Configuration.default do |config|
  config.csp = {
    base_uri: ["'self'"],
    default_src: ["'self'", 'https:'],
    connect_src: connect_src,
    font_src: ["'self'", 'data:', 'https:'],
    img_src: ["'self'", 'data:', 'https:'],
    object_src: ["'none'"],
    script_src: ["'self'", 'https:'],
    style_src: style_src
  }
end

SecureHeaders::Configuration.override(:tunnels) do |config|
  config.csp[:img_src] = ["'self'", 'data:']
  config.csp[:script_src] = ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'"]
end

