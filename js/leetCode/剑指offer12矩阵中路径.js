// arr [[a,b,c],[d,e,f],[g,h,i]]
// str abeh

function findTrace(board, str) {
  let n = board.length
  let m = board[0].length

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if (board[i][j] === str[0]) {
        if (dfs(i, j, 0)) {
          return true
        }
      }
    }
  }

  function dfs(i, j, k) {
    if (i >= n || i < 0 || j >= m || j < 0 || board[i][j] !== str[k]) {
      return false
    }
    if (k === str.length - 1) {
      return true
    }
    board[i][j] = '*'
    let res = dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1) || dfs(i - 1, j, k + 1)
    board[i][j] = str[k]
    return res
  }
  return false
}