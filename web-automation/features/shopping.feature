Feature: Purchase and orders

  Background:
    Given User is on the login page

  @sanity
  Scenario: [Sign in] Standard user purchases all products
    When Log in as a `standard user`
    And User adds all items to the cart
    And User navigates to the cart
    And Find third item by name, then remove it from the cart
    And Shopping cart has been updated
    And User clicks the Checkout button
    And User checks out with valid data provided
    And User finished the purchase
    Then Dispatched order screen is visible

  Scenario: [Sign in] Problem user adds an item to the cart
    When Log in as a `problem_user`
    When User adds `Sauce Labs Backpack` item to the cart
    And User adds item to the cart
    And User navigates to the cart
    Then Validate that item was added

  Scenario: [Sign in] Standard user sorts the products' list
    When Log in as a `standard user`
    When User choose the sorting option Z to A
