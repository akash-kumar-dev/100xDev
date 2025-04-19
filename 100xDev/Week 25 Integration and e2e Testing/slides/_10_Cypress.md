# Cypress

Ref - [https://www.cypress.io/](https://www.cypress.io/)

Let’s create a simpe test for [https://app.100xdevs.com/](https://app.100xdevs.com/)

*   Init ts project

```javascript
npm init -y
npx tsc --init
mkdir src
```

*   Change rootDir, outDir

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Install cypress (You might face issues here if u dont have a browser) Linux pre-requisites here - [https://docs.cypress.io/guides/getting-started/installing-cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

```javascript
npm install cypress --save-dev
```

*   Bootstrap cypress

```javascript
npx cypress open
```

*   Select default example to start with

*   Delete `2-advanced-examples`

*   Try running the `todo` test

```javascript
npx cypress run --browser chrome --headed
```

*   Update the todo test

```javascript
describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Signin to your Account').should('exist', { timeout: 10000 })
    cy.get('#email').type('harkirat.iitr@gmail.com');

    // Fill in the password field
    cy.get('#password').type('123random');

    cy.get('button').eq(4).click()

    cy.contains('View Content').should("exist", {timeout: 10000})
  })

})
```