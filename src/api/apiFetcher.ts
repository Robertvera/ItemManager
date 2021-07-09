const ENDPOINT = 'https://thatcopy.pw/catapi/rest/';

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export const fetchItems = async (): Promise<Array<Item>|string> => {
    try {
        const response = await fetch(ENDPOINT)
        const { items } = await response.json()
        return items
    } catch (error) {
        return error && error.message
    }
  };