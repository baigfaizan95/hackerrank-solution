// Designer PDF Viewer
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  let highest = 0;
  word.split('').forEach((char) => {
      highest = highest < h[char.charCodeAt() - 97] ? h[char.charCodeAt() - 97] : highest;
  });
  console.log(highest);
  return highest * word.length
}