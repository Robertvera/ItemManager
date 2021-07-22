/* eslint-disable import/prefer-default-export */
import itemsDataset from './ItemsDataset';

export const mockFetch = () => Promise.resolve({
        json: () => ({
            items: itemsDataset,
            errors: []
        }),
        status: 200
    })