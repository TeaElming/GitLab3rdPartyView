import fetch from 'node-fetch'
import 'reflect-metadata'

/**
 * ProfileService is a class that fetches profile data from the GitLab API.
 */
export class ProfileService {
  /**
   * Get the profile data.
   *
   * @param {object} req - The HTTP request object, which contains the session.
   * @returns {Promise} - The profile data.
   */
  async getProfile (req) {
    const token = req.session.token
    console.log('Token:', token)
    const query = `
      query {
        currentUser {
          username
          avatarUrl
          name
          publicEmail
          lastActivityOn
        }
      }
    `

    const response = await fetch('https://gitlab.lnu.se/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ query })
    })

    const data = await response.json()
    console.log(data)
    return data
  }

  /**
   * Get the activities data.
   *
   * @param {object} req - The HTTP request object, which contains the session.
   * @returns {Promise} - The activities data.
   */
  async getActivities (req) {
    const token = req.session.token
    const gitlabApiUrl = 'https://gitlab.lnu.se/api/v4'
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }

    // Fetch the first 100 activities
    const first100Response = await fetch(`${gitlabApiUrl}/events?per_page=100`, { headers })
    const first100Activities = await first100Response.json()

    // Double check that we do have more than 100 activities
    if (first100Activities.length < 100) {
      console.log('Less than 100 activities found:', first100Activities)
      return first100Activities
    }

    // Fetch one more activity, this can be altered later to fetch more than 101 activities
    const oneMoreResponse = await fetch(`${gitlabApiUrl}/events?per_page=1&page=2`, { headers })
    const oneMoreActivity = await oneMoreResponse.json()

    const all101Activities = first100Activities.concat(oneMoreActivity)

    console.log('All 101 activities:', oneMoreActivity)
    return all101Activities
  }
}
