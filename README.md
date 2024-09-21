# OAuth2 GitLab Integration Platform
## Project Overview

The OAuth2 GitLab Integration Platform enables users to log in to a server-side rendered web application using their gitlab.lnu.se account and access a variety of GitLab-related data. The platform is designed for consuming REST and GraphQL APIs provided by GitLab, with a focus on displaying user profile data, activities, groups, projects, and commits. The OAuth2 access delegation system provides secure authentication without relying on any external libraries for OAuth support.
Core Features

* OAuth2 Authentication: Securely authenticate users via GitLab using a custom-built OAuth2 implementation.
* User Profile Information: Display basic profile information of the authenticated GitLab user.
* Recent Activities: Fetch and display the 101 most recent GitLab activities of the authenticated user.
* Group and Project Details: Retrieve information about the first three projects in each of the first five groups the user has access to, including details about the latest commit.
* REST and GraphQL API Integration: Seamless consumption of GitLab’s APIs for fetching user-specific data.

## Technology Stack
### Backend

* Node.js and Express: Used to build the backend server and manage routes.
* MySQL: Database to store user-related data.
* Sequelize: ORM for managing and querying the database.
* Inversify and Reflect-metadata: Implement dependency injection to improve scalability and maintain the MVC structure.

### Frontend

* HTML/CSS and EJS: Server-side rendered templates to provide dynamic pages for the user interface.
* JavaScript: Client-side scripting for improved interactivity and functionality.

## How to Use the Application

* User Login with GitLab:
  * Users can log in using their gitlab.lnu.se account. Once authenticated via OAuth2, the user is redirected to the application.

* View Profile Information:
  * After login, users can view their GitLab profile information, including username, email, and avatar.

* Recent GitLab Activities:
  * The application fetches the last 101 activities of the user from GitLab, displaying them on the dashboard.

* Group and Project Details:
  * Users can explore the first three projects within the first five groups they are a member of, with project details such as the latest commit available.

* API Integration:
  * The application fetches data using GitLab's REST and GraphQL APIs to provide real-time updates about groups, projects, and activities.

## Deployment Instructions
1. Clone the Repository:

``
git clone https://github.com/your-username/oauth2-gitlab-integration.git
cd oauth2-gitlab-integration
``

2. Install Dependencies:

``
npm install
``

3. Set Up Environment Variables:

````
    Create a .env file in the project root and add the following:
    GITLAB_CLIENT_ID=your-client-id
    GITLAB_CLIENT_SECRET=your-client-secret
    GITLAB_REDIRECT_URI=http://localhost:3000/auth/gitlab/callback
    SESSION_SECRET=your-session-secret
````

4. Run the Application:

``
npm start
``


## Deployed Application

You can access the live version of the OAuth2 GitLab Integration Platform here:
[OAuth2 GitLab Integration Platform - Live Application](https://cscloud8-85.lnu.se/wt1/)

## Additional Features

* Custom OAuth2 Implementation: OAuth2 flow was implemented from scratch without relying on third-party OAuth libraries, providing better control over the authentication process.
* REST and GraphQL API Consumption: The application integrates both GitLab’s REST and GraphQL APIs to fetch relevant user information.
* Scalable Code Architecture: Dependency injection using Inversify and Reflect-metadata makes the application modular and scalable for future development.

## Potential Enhancements

* API Rate Limiting: Future iterations can introduce caching or rate-limiting mechanisms to optimize API calls.
* Improved Error Handling: Enhance the user experience by implementing better error handling for failed API calls or OAuth2 flow interruptions.
* Enhanced Security: Integrate additional security measures such as token refresh handling and CSRF protection.

## Future Improvements

* Extended Group and Project Information: Further extend the functionality by displaying more detailed project and group information, such as pipelines, merge requests, and issues.
* Refactoring for Microservices: The current structure could be refactored into a microservices architecture to handle user authentication, API consumption, and data management in separate services.
* Improved OAuth Flow: Streamline the OAuth2 flow by allowing for token refresh and better session management.