class Contact extends Model {

}

==
{
	"name": "Contact",
	"db_table": "contacts",
	"fields": {
		"id": {
			"name": "id",
			"type": "objectid",
			"db_column": "nvarchar1",
			"label": "Id"
		},
		"name": {
			"name": "name",
			"type": "string",
			"db_column": "nvarchar2",
			"label": "Name",
			"size": 50
		},
		"email": {
			"name": "email",
			"type": "email",
			"db_column": "nvarchar3",
			"label": "Email",
			"size": 60
		}
	},
	"relationships": {},
	"indexes": {},
	"label": "Contact",
	"type": "model",
	"exposed": 1
}