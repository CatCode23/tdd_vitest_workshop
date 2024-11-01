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
// describe("should gimme back some movies", () => {
//     it("should show the first movie by ID", async() => {
//         const response = await fetch(`${BASE_URL}`)
//         const movie = await response.json();

//         expect(movie).toEqual({movieId: 1})


//     })

// })


describe('App', () => {
  it('renders the App component', async () => {
    render(<App />)
    
    screen.debug(); 
    

    const starWarsImage = await screen.findByRole('img', { name: /Star Wars: Episode IV - A New Hope/i });
    expect(starWarsImage).toHaveAttribute('src', "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg");  })
})

  it('should render a button', () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should fetch movies when button is clicked', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /fetch movies/i })
    
    userEvent.click(button)
    
    const starWarsImage = await screen.findByRole('img', { name: /Star Wars: Episode IV - A New Hope/i })
    expect(starWarsImage).toBeInTheDocument()
  })

