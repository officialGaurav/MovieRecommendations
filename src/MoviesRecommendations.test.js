import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import MovieRecommendations from "./MovieRecommendations";

describe("MovieRecommendations component", () => {
  it("should render the title", () => {
    render(<MovieRecommendations />);
    const title = screen.getByText("Movie Recommendations");
    expect(title).toBeInTheDocument();
  });

  it("should display validation error for empty genre", () => {
    render(<MovieRecommendations />);
    fireEvent.change(screen.getByLabelText(/Genre:/i), {
      target: { value: "" },
    });
    fireEvent.submit(screen.getByRole("button"));
    const error = screen.getByText(/Genre is required/i);
    expect(error).toBeInTheDocument();
  });

  it("should display validation error for invalid time format", () => {
    render(<MovieRecommendations />);
    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: "invalid" },
    });
    fireEvent.submit(screen.getByRole("button"));
    const error = screen.getByText(/Time is required/i);
    expect(error).toBeInTheDocument();
  });

  it("should show no recommendations message when no movies match criteria", async () => {
    jest.spyOn(window, "fetch").mockResolvedValueOnce(
      JSON.stringify([
        {
          name: "Movie 1",
          rating: 85,
          genres: ["Drama", "Comedy"],
          showings: ["18:00:00+11:00", "20:00:00+11:00"],
        },
      ])
    );
    render(<MovieRecommendations />);
    fireEvent.change(screen.getByLabelText(/Genre:/i), {
      target: { value: "Action" },
    });
    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: "12:00" },
    });
    fireEvent.submit(screen.getByRole("button"));
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async operations
    const message = screen.getByText(/no movie recommendations/i);
    expect(message).toBeInTheDocument();
  });
});

