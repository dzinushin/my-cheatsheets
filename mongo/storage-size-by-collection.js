var collections = db.getCollectionNames()
var result = collections.map(function (collectionName) {
    var {totalIndexSize, size, storageSize, count} = db.runCommand({collStats: collectionName, scale: 1024 * 1024});
    return {
        name: collectionName,
        size: size,
        stats: {
            totalIndexSize,
            size,
            storageSize,
            count
        }
    }
}).sort(function (a, b) {
    return a.size - b.size;
});
result.forEach(collectionStat => {
    if (collectionStat.size > 0) {
        print(`${collectionStat.name}: ${JSON.stringify(collectionStat.stats)}`)
    }
})
