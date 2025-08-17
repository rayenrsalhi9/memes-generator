import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from './App'

test('updates the top text', async () => {

    // arrange
    const user = userEvent.setup()
    render(<App />)
    const topTextbox = screen.getAllByRole('textbox')[0]

    // act
    await user.clear(topTextbox)
    await user.type(topTextbox, 'A coder does not simply')

    // assert
    expect(screen.getByText('A coder does not simply')).toBeInTheDocument()

})

test('updates the bottom text', async () => {

    const user = userEvent.setup()
    render(<App />)
    const bottomTextbox = screen.getAllByRole('textbox').pop()

    await user.clear(bottomTextbox)
    await user.type(bottomTextbox, 'Code without coffee')

    expect(screen.getByText('Code without coffee')).toBeInTheDocument()

})