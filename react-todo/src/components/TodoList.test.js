import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });
  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a todo"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });
  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
