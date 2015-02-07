class Customer extends Model {
	beforeSave(errors){
		// check for errors here
	}
}
==
{
	"name": "Customer",
	"fields": {
		"name": {
			"name": "name",
			"label": "Name",
			"type": "string"
		},
		"city": {
			"name": "city",
			"label": "City",
			"type": "string"
		},
		"state": {
			"name": "state",
			"label": "State/Prov",
			"type": "string"
		},
		"phone": {
			"name": "phone",
			"type": "phone",
			"db_column": "nvarchar1",
			"label": "Phone",
			"size": 30
		},
		"email": {
			"name": "email",
			"type": "email",
			"db_column": "nvarchar2",
			"label": "Email",
			"size": 60
		}
	}
}