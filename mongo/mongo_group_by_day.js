
db.events.aggregate([
    { 
        $match: { type: 'User_OS_NBO_PRESS_BTN_SUBMIT' }
    },
    {
        $group: {
            '_id': { 
                year: { $year: "$timestamp" },
                month: { $month: "$timestamp" },
                day: { $dayOfMonth: "$timestamp" }
            },
            'count': { $sum: 1 }
        }
    },
    {
        $sort : { _id: 1 }
    }
])

db.events.aggregate([
    { 
        $match: { type: 'User_OS_NBO_PRESS_BTN_SUBMIT' }
    },
    {
        $group: {
            '_id': { 
                year: { $year: "$timestamp" },
                month: { $month: "$timestamp" },
                day: { $dayOfMonth: "$timestamp" },
                bankId: '$payload.offer.bankId'
            },
            'count': { $sum: 1 }
        }
    },
    {
        $sort : { _id: 1 }
    }
])