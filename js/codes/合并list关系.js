const list = [
  { id: 1, children: [2, 3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [6, 7] },
  { id: 4, children: [8, 9] },
  { id: 5, children: [10, 11] },
  { id: 6 },
  { id: 7, children: [12] },
  { id: 8, children: [13] },
  { id: 9 },
  { id: 10 },
  { id: 11, children: [14] },
  { id: 12 },
  { id: 13 },
  { id: 14 },
];
// 比方说这题 输出所有的 上下级汇报关系 [[1,2,5,10],[1,2,5,11,14],[1,3,6], [1,3,7,12]....]

function myList(list) {
  let res = []
  for (let i = 0; i < list.length; i++) {
   const path = [list[i].id]
   traverse(list[i], path)
  }

  function traverse(item, path) {
    if (!item.children) {
      res.push(path.slice())
      path = []
      return
    } else {
      for (let i = 0; i < item.children.length; i++) {
        const parent = findParent(item.children[i])
        path.push(parent.id)
        traverse(parent, path)
        path.pop()
      }
    }
  }

  function findParent(id) {
    let parent = {}
    list.forEach((item) => {
      if (item.id === id) {
        parent = item
        return
      }
    })
    return parent
  }
  console.log(res)
}

myList(list)