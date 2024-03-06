var concepts = dv.current().file.inlinks.map(i => dv.page(i))
  .sort(c => -c.file.ctime);

function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name})`
  }
  return `[${p.file.name}](${p.file.name})`
}

function getPages(c) {
  return dv.pages(`"notes"`)
    .filter(p => p.file.outlinks.includes(c))
    .map(p => getTitle(p) + " | " + generateStatus(p))
}

function generateStatus(p) {
  if (p.status == "finished") {
    return "✅"
  } else if (p.status == "draft") {
    return "✏️"
  } else if (p.status == "archived") {
    return "📂"
  }
}

function getFile(pl) {
  // regex to get the file name (`file_name in `[[path/to/file_name|title]]`)
  const file_path = pl.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]
  const file = dv.page(`${file_path}`)
  if (!file) {
    return `${file_path} ❌`
  }
  return `[${file.title}](${file_path})`
}

// function unique(arr) {
// 	// remove duplicate concepts
// 	// new array to store the unique concepts
// 	var newArr = [];
// 	// store the appeared topics. if a topic has appeared, skip it.
// 	var appearedTopicsTiel = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (appearedTopicsTiel.includes(arr[i].toString())) {
// 			continue;
// 		}
// 		appearedTopicsTiel.push(arr[i].toString());
// 		newArr.push(arr[i]);
// 	}
// 	return newArr;
// }

// concepts = unique(concepts)

dv.table(["Concepts Involved", "Also under", "Notes Related"],
  concepts.map(c => [
    getTitle(c),
    c.file.outlinks.map(pl => getFile(pl)),
    getPages(c.file.link),
  ])
)