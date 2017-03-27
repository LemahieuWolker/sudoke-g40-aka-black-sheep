package sudoku;

import java.util.Arrays;

public class Sudoku {
    
    private static final int BOARD_WIDTH = 9;
    private static final int BOARD_HEIGHT = 9;
    private int[][] grid;

    public Sudoku() {
        grid = new int[BOARD_HEIGHT][BOARD_WIDTH];
    }

    public void consolePrintSudoku() {
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                System.out.print(grid[i][j] + " ");
            }
            System.out.println();
        }
    }
}
