import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from './App'

describe('Accessibility', () => {

    test('ensures header image is accessible', () => {
        render(<App />)
        expect(screen.getByAltText('header icon')).toBeInTheDocument()
    })

    test('ensures the meme image is accessible', () => {
        render(<App />)
        expect(screen.getByAltText('Shut Up')).toBeInTheDocument()
    })

})