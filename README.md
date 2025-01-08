# 2048 Game

A fully functional implementation of the classic **2048 game**, built using **React**, **CSS**, and **JavaScript**. This project provides a smooth and responsive gameplay experience with a clean and intuitive interface.

## Features

- **Responsive Gameboard**: A 4x4 grid designed flexibly using CSS and React.
- **Dynamic Tile Merging**: Merges identical tiles, increasing their value (2, 4, 8, etc.) until the goal of 2048 is achieved.
- **Random Tile Generation**: New tiles (2 or 4) appear randomly at empty grid positions after each valid move.
- **Keyboard Navigation**: Use arrow keys to move the tiles up, down, left, or right.
- **Score Tracking**: Keeps track of the user's score, increasing upon successful tile merges.
- **Restart Functionality**: A "New Game" button to restart the game at any time.

## Screenshots

> Add relevant screenshots of the game interface, preferably showcasing dynamic gameplay and scoring.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org) (preferably latest version)
- A package manager like `npm` or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/2048-game.git
   cd 2048-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Project Structure

Here’s an overview of the main files and components:

- **`App.jsx`**: Main entry point of the application, rendering the header, game board, and footer components.
- **`GameBoard.jsx`**: The core game logic, including grid initialization, tile merging, and player input handling.
- **`Header.jsx`**: Displays the score and other header elements.
- **`App.css`**: Styling for the app, including grid layout, button styles, and tile themes.
- **`index.html`**: The HTML template for the game.

### Controls

- **Arrow Keys**: Move tiles in the respective direction:
   - **Up**: Combines and moves tiles upward.
   - **Down**: Combines and moves tiles downward.
   - **Left**: Combines and moves tiles to the left.
   - **Right**: Combines and moves tiles to the right.

### Game Rules

- Combine two tiles of the same value to merge them into a tile with double the value.
- After each move, a new tile (worth 2 or 4) will appear at a random empty spot on the board.
- The game ends when there are no empty tiles and no possible moves.
- The goal is to create a tile with the value `2048`.

## Further Development Ideas

Here are some features and improvements you could implement in the future:

1. **Undo Feature**:
   - Allow players to undo their last move, storing previous board states.

2. **High Score Tracking**:
   - Use localStorage to save and display the highest score across sessions.

3. **Animations and Visual Feedback**:
   - Add smooth animations when tiles merge or appear to improve the game's visual quality.

4. **Mobile Optimization**:
   - Add swipe gestures to enable gameplay on mobile devices.

5. **Custom Board Size**:
   - Allow players to choose different board sizes (e.g., 3x3, 5x5).

6. **Victory Check**:
   - Automatically display a congratulatory popup or screen when the player achieves a 2048 tile.

7. **Global Leaderboard**:
   - Connect the game to a backend server to store and display leaderboard data for high scores.

8. **Theme Customization**:
   - Add options for players to select different color themes or tile styles.

9. **Error Handling**:
   - Add validations for unsupported key presses or alerts when no valid moves are left.

## Technologies Used

- **React**: Frontend framework for building the UI.
- **JavaScript**: Core language for game logic implementation.
- **CSS**: Custom styling for the grid, tiles, and other components.
- **Vite**: Development environment for fast and efficient builds.

## Acknowledgments

- Inspired by the original **2048 game** developed by [Gabriele Cirulli](https://gabrielecirulli.com/).
- Color schemes and themes are adapted from the classic 2048 interface.

## Contributions

Contributions are welcome! Feel free to fork this repository and create a pull request with enhanced functionalities or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
