

db.collection.getIndexes()


db.submissionData.createIndex(
  {
      "submissionId": 1
  },
  {
  	  name: "by_submission_id",
      unique: true,
      background: true
  }
)

