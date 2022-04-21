

db.events.find({
    type:'User_OS_SUBMIT_OFFER_SUCCEEDED', 
    timestamp: { 
        $gte: ISODate("2019-06-27T00:00:00.000Z"), 
        $lt: ISODate("2019-06-28T00:00:00.000Z")
    }
})