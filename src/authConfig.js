/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from '@azure/msal-browser'

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */

export const b2cPolicies = {
	names: {
		signUpSignIn: process.env.REACT_APP_ADB2C_SIGNIN_SIGNUP_POLICY,
	},
	authorities: {
		signUpSignIn: {
			authority: `https://${process.env.REACT_APP_ADB2C_TENENT}.b2clogin.com/${process.env.REACT_APP_ADB2C_TENENT}.onmicrosoft.com/${process.env.REACT_APP_ADB2C_SIGNIN_SIGNUP_POLICY}`,
		},
	},
	authorityDomain: `${process.env.REACT_APP_ADB2C_TENENT}.b2clogin.com`,
}

/**
 * Configuration object to be passed to MSAL instance on crzzeation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
	auth: {
		clientId: process.env.REACT_APP_ADB2C_CLIENT_ID,
		authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
		knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
		redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
		postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
		navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
	},
	cache: {
		cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	system: {
		loggerOptions: {
			loggerCallback: (level, message, containsPii) => {
				if (containsPii) {
					return
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message)
						return
					case LogLevel.Info:
						console.info(message)
						return
					case LogLevel.Verbose:
						console.debug(message)
						return
					case LogLevel.Warning:
						console.warn(message)
						return
					default:
						return
				}
			},
		},
	},
}
