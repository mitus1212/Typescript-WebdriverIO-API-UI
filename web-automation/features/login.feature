Feature: Log in to the swag labs
    
  @sanity
  Scenario: [Sign in] Locked out user gets an error while tring to sign in
    Given User is on the login page
    When Log in as a `locked_out_user`
    Then User sees a shoping cart icon
