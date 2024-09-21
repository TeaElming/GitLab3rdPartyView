import fetch from 'node-fetch'
import 'reflect-metadata'

/**
 * Class representing the AuthService.
 */
export class AuthService {
  /**
   * Exchange the authorization code for an access token.
   *
   * @param {string} code - The code to exchange for a token.
   * @param {object} req - The HTTP request object.
   * @returns {Promise} - The data from the token exchange.
   */
  async exchangeCodeForToken (code, req) {
    const response = await fetch('https://gitlab.lnu.se/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.appID,
        client_secret: process.env.appSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.callbackUrl
      })
    })

    if (!response.ok) {
      throw new Error('Failed to exchange code for token')
    }

    const data = await response.json()
    req.session.token = data.access_token
    return data
  }

  /**
   * Get token from session.
   *
   * @param {object} req - The HTTP request object.
   * @returns {string} - The token from the session.
   */
  getToken (req) {
    return req.session.token
  }

  /**
   * Logs the user out.
   *
   * @param {object} req - The HTTP request object.
   */
  logout (req) {
    req.session.token = null
  }
}
