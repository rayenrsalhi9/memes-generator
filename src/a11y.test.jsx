import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from './App'

test('ensures header image is accessible', () => {
    render(<App />)
    expect(screen.getByAltText('header icon')).toBeInTheDocument()
})