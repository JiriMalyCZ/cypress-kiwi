describe('Primary passenger - high priority tests and positive scenarios', () => {
  beforeEach(() => {
    // Go to booking page before every test
    //due to clean code/best practices is better to call booking token via cypress request methods, then parse booking_token from json body in response
    //then booking token save in enviroment variable and then use asi part of url/base url -> draft of solution is at the bottom of this class as commented code
    cy.visit('https://www.kiwi.com/booking?token=DkS8MsWEcx4upAUWnxGjK0Ys-3RyjpdgdkKZHkuoOqRZChzSiY9u1M-3u-tpmZ-KAYJjhydNDaSAUFrWQaI-WFGgCaHUDhob_ZgCljdG6FTZ3kX0anB9vAvnv3aZFNSQ8tUp0ZRlyFVJq22vMCepHAreo71nEISqDIB1Wjqry-0kBCf1d3AdaWS7k9cG6NNzSx4YASUScp_xFBvmJ2H-8Ecsh8Yw_tSXxB9zPg3-a6qyJbaEJ8SVjThW6Y3bbxHw6Mgvtwrqomze1KalOU4Mh0w6KDF5acd_9w4u3fVxn84x5n0QYUZEEpwe5kdU0zAiv9BymH9YvgdrBFwJLcujoFvdeJtHKHyyha3Iz1qjU7kmR9WyNuDN5jeELM_a3zXCB-mlXsMhrhIJg19J8U5S-qiT2U8lCBy9TvNWarhLR1XSmOemmA6I-TGvw_t_00SLYdutu7uHm4qfLGU7t3qcy988wzLNzBAPKfbM8zGjMJfSj0CMDU5OWr3SeE-uEETcthwbmljFSzWze052HBu4FDsvstQ5kaZgybT2OL3a_jT8XQlii1OqHisvAPDAhE7aS')
      cy.get('button[class="ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 gUUZvS"]').click()
  })

  it('Fill valid first name and surname -> values are filled correctly', () => {
    cy.get('input[name="firstname"]').type('Jiri').should('have.value','Jiri')
    cy.get('input[name="lastname"]').type('Maly').should('have.value','Maly')
  })

  it('Select valid nationality and genre -> values are selected correctly', () => {
    cy.get('select[name="nationality"]').select('Czech Republic').should('have.value','cz')
    cy.get('select[name="title"]').select('Male').should('have.value','mr')
  })

  it('Fill valid date of birth -> values are filled correctly', () => {
    cy.get('input[name="birthDay"]').type('14').should('have.value','14')
    cy.get('select[name="birthMonth"]').select('12').should('have.value','12')
    cy.get('input[name="birthYear"]').type('1990').should('have.value','1990')  
  })

  it('Fill valid passport/ID number -> values are filled correctly', () => {
    cy.get('input[name="idNumber"]').type('CZ012345').should('have.value','CZ012345')
  })

  it('Fill valid date of expiration -> values are filled correctly', () => {
    cy.get('input[name="idExpirationDay"]').type('22').should('have.value','22')
    cy.get('select[name="idExpirationMonth"]').select('10').should('have.value','10')
    cy.get('input[name="idExpirationYear"]').type('2025').should('have.value','2025') 
  })

  })



//beforeEach(() => {
 //cy.request('https://api.skypicker.com/flights?fly_from=PRG&fly_to=RMF&partner=cypress')
 //.then((response) => {
 //const body = (response.body)
  //token = body['booking_token']
  //cy.visit('https://www.kiwi.com/en/booking?token={{booking_token}}')
  //cy.get('button[class="ButtonPrimitive__StyledButtonPrimitive-sc-1lbd19y-0 gUUZvS"]').click()