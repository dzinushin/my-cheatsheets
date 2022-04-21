db.getCollection('submissionDTO').find({"application.selectedOffer.bankId":"bank-bgf"})

db.getCollection('submissionDTO').find({"application.selectedOffer.bankId":"bank-bgf"}).sort({_id:-1})


db.getCollection('submissionDTO').find({"application.selectedOffer.bankId":"bank-bgf"}).sort({_id:-1})
 

db.getCollection('submissionDTO').find( { 
	$and: [
		{ "application.selectedOffer.bankId": "bank-bgf" }, 
		{ $where: "parseInt(this.application.selectedOffer.term) == this.application.selectedOffer.maxTerm" }
	]
})


db.getCollection('submissionDTO').find({"application.selectedOffer.bankId":"bank-bgf"}).count()

db.getCollection('submissionDTO').find( { 
	$and: [
		{ "application.selectedOffer.bankId": "bank-bgf" }, 
		{ $where: "parseInt(this.application.selectedOffer.term) == this.application.selectedOffer.maxTerm" }
	]
}).count()


db.getCollection('submissionDTO').find({"application.selectedOffer.bankId":"bank-bgf", "application.selectedOffer.term": "242"}).count()

db.getCollection('submissionDTO').find( { 
	$and: [
		{ "application.selectedOffer.bankId": "bank-bgf" }, 
		{ $where: "parseInt(this.application.selectedOffer.term) == this.application.selectedOffer.maxTerm" },
		{ "application.selectedOffer.term":  { $ne: "242"} }
	]
})
