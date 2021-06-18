import json

with open('./done/travels.json', encoding='utf8') as travels_file :
	travels = json.load(travels_file)

with open('Operation.json', encoding='utf8') as operations_file :
	operations = json.load(operations_file)

new_evt = []
new_ope = []
for o in operations :
	ne = {}
	ne['id'] = len(new_evt)+1
	if o['type'] == 'depense' :
		ne['description'] = o['description']
	else :
		ne['description'] = 'retrait'
	ne['travel'] = o['travelId']
	ne['date'] = o['date']
	ne['order'] = o['order']
	ne['operation'] = o['_id']['$oid']
	new_evt.append(ne)
	no = {}
	no['id'] = o['_id']['$oid']
	no['travel'] = o['travelId']
	no['date'] = o['date']
	no['type'] = o['type']
	no['accountDebit'] = o['accountDebit']
	no['deviseDebit'] = o['deviseDebit']
	no['montantDebit'] = o['montantDebit']
	no['accountCredit'] = o['accountCredit']
	no['deviseCredit'] = o['deviseCredit']
	no['evenement'] = ne['id']
	new_ope.append(no)

with open('./done/operations.json', 'w', encoding='utf8') as outfile:
	json.dump(new_ope, outfile,ensure_ascii=False, indent=4)

with open('./done/evenements.json', 'w', encoding='utf8') as outfile:
	json.dump(new_evt, outfile,ensure_ascii=False, indent=4)

