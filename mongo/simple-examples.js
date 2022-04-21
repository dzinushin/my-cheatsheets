

//
// select between dates
db.events.find({
    type:'User_OS_SUBMIT_OFFER_SUCCEEDED',
    timestamp: {
        $gte: ISODate("2019-06-27T00:00:00.000Z"),
        $lt: ISODate("2019-06-28T00:00:00.000Z")
    }
})

db.getCollection('queueItem').find({
    bank: 'bank-sovcom',
    deleted: false,
    queuedAt: {
        $gte: ISODate("2020-05-31T00:00:00.000Z"),
        $lt: ISODate("2020-06-01T00:00:00.000Z")
    }
})

db.getCollection('submissionQueueDTO').find({
    bankId: 'bank-1',
    deleted: false,
    queuedAt: {
        $lt: ISODate("2020-06-01T00:00:00.000Z")
    }
})

//
db.getCollection('scoreApplication').find({
    banks: "bank-sovcom",
    createdAt: {
        $gte: ISODate("2020-05-31T00:00:00.000Z"),
        $lt: ISODate("2020-06-01T00:00:00.000Z")
    }
})

// кол-во decision по банку
db.getCollection('scoreDecision').find({
    bank: "bank-sovcom",
    createdAt: {
        $gte: ISODate("2020-05-31T00:00:00.000Z"),
        $lt: ISODate("2020-06-01T00:00:00.000Z")
    }
})

db.getCollection('scoreDecision').find({
    bank: "bank-sovcom",
    creationTimestamp: {
        $gte: ISODate("2020-05-31T00:00:00.000Z"),
        $lt: ISODate("2020-06-01T00:00:00.000Z")
    }
})

creationTimestamp



//
// update
//
db.getCollection('queueItem').updateMany(
    {
        bank: 'bank-1',
        queuedAt: { $lt:  ISODate("2020-06-01T00:00:00.000Z") }
    },
    { $set: { deleted: true } }
)

db.getCollection('submissionQueueDTO').updateMany(
    {
        bankId: 'bank-1',
        queuedAt: { $lt: ISODate("2020-06-01T00:00:00.000Z") }
    },
    { $set: { deleted: true } }
)