import { describe, it, expect } from 'vitest'
import fetch from "node-fetch"
import { render, screen } from '@testing-library/react'
import App from './App'
// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })
const BASE_URL = "http://localhost:3001/movies";

describe("should gimme back some movies", () => {
    it("should show the first movie by ID", async() => {
        const response = await fetch(`${BASE_URL}/1`)
        const movie = await response.json();

        expect(movie).toEqual({movieId: 1})


    })

})


describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})

