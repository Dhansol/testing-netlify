import { render, screen } from "@testing-library/react"
import App from "./App"

it("Checks for buttons name", () => {
  render(<App />)
  const elementa = screen.getByRole("button", { name: "Inc" })

  expect(elementa).toBeInTheDocument()
})
