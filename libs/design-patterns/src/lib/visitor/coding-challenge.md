# Visitor Pattern - Coding Challenge

## Challenge Summary

You are tasked with creating a simple application that models a system with different types of shapes (e.g., Circle, Square, Rectangle). Each shape should be able to accept "visitors" that perform specific operations on them (like calculating area, drawing the shape, or generating a description). Implement the visitor pattern to decouple the operations from the shape classes themselves.

## Requirements

1. **Shapes**: Define at least three types of shapes (e.g., Circle, Square, Rectangle). Each shape should have its own properties (e.g., radius for Circle, width and height for Rectangle, etc.).
2. **Visitors**: Create at least two different visitors. Each visitor should perform a distinct operation on the shapes. For example:

- A visitor that calculates the area of the shape.
- A visitor that generates a string description of the shape.

## Acceptance Criteria

1. **Decoupling**: The logic for calculating the area or generating descriptions must reside within the visitors, not inside the shape classes themselves.
2. **Visitor Interface**: You must define a common interface for visitors that all the visitors will implement.
3. **Visitable Interface**: Each shape class should implement an interface that allows it to accept visitors.
4. **Polymorphism**: The visitors should be able to process each shape using polymorphism, without checking for the specific type of shape (no `if` or `switch` statements based on shape type).
5. **Testability**: Write test cases to validate that the correct visitor operations are applied to the different shapes.

## Bonus

- Add an additional visitor that exports the shape data in JSON format.
- Ensure that your code follows SOLID principles, especially the Open-Closed Principle (OCP).
