import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Meme from './Meme'

describe('Meme', () => {

    test('displays the meme image', () => {
        const mockMeme = { imageUrl: 'https://i.imgflip.com/2reqtg.png' };
        render(<Meme meme={mockMeme} />);
        expect(screen.getByRole('img').src).toBe(mockMeme.imageUrl)
    })

    test('display the upper text', () => {
        const mockMeme = { topText: 'Shut up' };
        render(<Meme meme={mockMeme} />);
        expect(screen.getByText(mockMeme.topText)).toBeInTheDocument();
    })

    test('display the lower text', () => {
        const mockMeme = { bottomText: 'And take my money' };
        render(<Meme meme={mockMeme} />);
        expect(screen.getByText(mockMeme.bottomText)).toBeInTheDocument();
    })

})