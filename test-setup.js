import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from 'vitest'
import { cleanup } from "@testing-library/react";

import { setupServer } from 'msw/node'
import { http, HttpResponse } from "msw";

// prepare data
const memes = {
    data: {
        memes: [
            {
                url: 'https://i.imgflip.com/1c1uej.jpg',
            },
        ],
    },
}

// define handlers
const handlers = [
    http.get('https://api.imgflip.com/get_memes', () => {
        return HttpResponse.json(memes)
    })
]

// set up server
const server = setupServer(...handlers)

// Establish requests interception layer before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

/* 
    Clean up after all tests are done, preventing this
    interception layer from affecting irrelevant tests. 
*/
afterAll(() => server.close());

// clean up handlers
afterEach(() => {
    server.resetHandlers()
    cleanup();
});