
class Board {
  constructor(board) {
    this._board = board;
  }
  
  /**
   * Set an element on the board to value provided
   * @param {Integer} row - row coordinates for element
   * @param {Integer} col - column coordinate for element
   * @param {Integer} value - value to be set
   * @returns {Boolean} - whether element was set
   */
  setElement(row, col, value) {
    if(value >= 0 && typeof value === 'Number' && row < this._board/length && col < this.board[0].length) {
      this.board[row][col] = value;
      return true;
    }
    return false;
  }

  /**
   * gets the middle element or the middle element with highest value
   * @returns {ArrayNum} - coords to the middle element
   */
  getMiddle() { //!!FIX!!: needs to send indexes not values Store index and value
    const middleRow = (this._board.length / 2) - 1;
    const middleCol = (this._board[0].length / 2) - 1;

    if(!Number.isInteger(middleRow)) {
      middleRow = Math.max(this._board[Math.floor(middleRow)], this._board[Math.ceil(middleRow)]);
    }
    if(!Number.isInteger(middleCol)) {
      middleCol = Math.max(this._board[Math.floor(middleCol)], this._board[Math.ceil(middleCol)]);
    }
    return [middleRow, middleCol];
  }

  /**
   * Finds sum of values of using greatest path
   * @param {Integer} row - row of current element
   * @param {Integer} col - col of current element
   * @returns {Integer} - sum of values using great path
   */
  getMaxValuePath(row, col, sum) {
    //keeping track of coords and value of possible paths
    let paths = [];
    //up
    if(this._board[row + 1][col] !== undefined) {
      paths.push({
        row: row + 1,
        col: col,
        val: this._board[row + 1][col],
      });
    }
    //down
    if(this._board[row - 1][col] !== undefined) {
      paths.push({
        row: row - 1,
        col: col,
        val: this._board[row - 1][col],
      });
    }
    //left
    if(this._board[row][col - 1] !== undefined) {
      paths.push({
        row: row,
        col: col - 1,
        val: this._board[row][col - 1],
      });
    }
    //right
    if(this._board[row][col + 1] !== undefined) {
      paths.push({
        row: row,
        col: col + 1,
        val: this._board[row][col + 1],
      });
    }

    const nextPath = paths.reduce((currBest, curr) => { return currBest.val > curr.val ? currBest : curr });

    if(nextPath.val < 0) {
      return sum;
    }

    this.setElement(row, col, 0);
    sum += nextPath.val;
    return this.getMaxValuePath(path, sum);
  }
}