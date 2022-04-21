

db.events.aggregate([
    { 
        $match: { type: 'User_OS_NBO_PRESS_BTN_SUBMIT' }
    },
    {
        $group: {
            '_id': { 'bankId:': '$payload.offer.bankId' },
            'count': { $sum: 1 }
        }
    }
])


db.events.aggregate([
    { 
        $match: { type: 'User_OS_NBO_PRESS_BTN_SUBMIT' }
    },
    {
        $project: {
            year: { $year: "$timestamp" },
            month: { $month: "$timestamp" },
            day: { $dayOfMonth: "$timestamp" },
            bankId: '$payload.offer.bankId'
        }
    }
])

