import { test, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Input from './Input'

describe('Input', () => {

    const mockMeme = {
        topText: 'Shut up',
        bottomText: 'And take my money'
    }

    test('displays two labels', () => {
        render(<Input meme={mockMeme} />)
        expect(screen.getByText('Top Text')).toBeInTheDocument()
        expect(screen.getByText('Bottom Text')).toBeInTheDocument()
    })

    test('displays two input fields', () => {
        render(<Input meme={mockMeme} />)
        expect(screen.getByPlaceholderText('Shut up')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('And take my money')).toBeInTheDocument()
    })

    test('displays the get meme button', () => {
        render(<Input meme={mockMeme} />)
        expect(screen.getByRole('button').textContent).toBe('Generate Meme')
    })

})