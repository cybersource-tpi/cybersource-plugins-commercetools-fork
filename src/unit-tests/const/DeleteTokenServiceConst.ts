import deleteToken from '../JSON/deleteToken.json';
export const customerTokenObj = {
  alias: deleteToken.alias,
  value: deleteToken.value,
  cardType: deleteToken.cardType,
  cardName: deleteToken.cardName,
  cardNumber: deleteToken.cardNumber,
  cardExpiryMonth: deleteToken.cardExpiryMonth+'delete',
  cardExpiryYear: deleteToken.cardExpiryYear
  }

  export const customerTokenObject = {
    alias: 'sp2',
    value: 'D3CD8072D10089FEE053AF598E0AA',
    cardType: '001',
    cardName: '001',
    cardNumber: '411111XXXXXX1111',
    cardExpiryMonth: '01delete',
    cardExpiryYear: '2024'
  }