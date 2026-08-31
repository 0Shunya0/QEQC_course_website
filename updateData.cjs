const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/data/courseData.js', 'utf8');

const units = [1, 2, 3, 4];
units.forEach(u => {
  const dirPath = 'public/resources/unit' + u;
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.pptx') || f.endsWith('.pdf'));
  
  let unitStartStr = 'id: ' + u + ',';
  let unitStartIndex = content.indexOf(unitStartStr);
  let nextUnitIndex = content.indexOf('id: ' + (u + 1) + ',');
  if (nextUnitIndex === -1) nextUnitIndex = content.length;
  
  let unitContent = content.substring(unitStartIndex, nextUnitIndex);
  
  files.forEach((file, index) => {
    const replacement = `{
          slides: { name: '${file}', url: '/resources/unit${u}/${file}' },
          notes: { name: 'Lecture Notes', url: null },
          labNotebook: { name: 'Lab Notebook', url: null },
          questionBank: { name: 'Question Bank', url: null }
        }`;
    unitContent = unitContent.replace('createPlaceholderResources()', replacement);
  });
  
  content = content.substring(0, unitStartIndex) + unitContent + content.substring(nextUnitIndex);
});

fs.writeFileSync('src/data/courseData.js', content);
