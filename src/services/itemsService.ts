/* eslint-disable import/prefer-default-export */
 const API_ITEMS_ENDPOINT = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

const getItems = async () => fetch(API_ITEMS_ENDPOINT);

export default getItems;