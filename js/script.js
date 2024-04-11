// MILESTONE :zero::
// // Creare l’array di oggetti con le informazioni fornite.
// // MILESTONE :uno:
// // Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
// // MILESTONE :due::
// // Stampare le stesse informazioni su DOM sottoforma di stringhe
// *************************************************************************************************************
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE :zero::
// Creare l’array di oggetti con le informazioni fornite.

const team = [
	{
		name: "Wayne Barnett",
		role: "Founder & CEO",
		photo: "wayne-barnett-founder-ceo.jpg",
	},
	{
		name: "Angela Caroll",
		role: "Chief Editor",
		photo: "angela-caroll-chief-editor.jpg",
	},
	{
		name: "Walter Gordon",
		role: "Office Manager",
		photo: "walter-gordon-office-manager.jpg",
	},
	{
		name: "Angela Lopez",
		role: "Social Media Manager",
		photo: "angela-lopez-social-media-manager.jpg",
	},
	{
		name: "Scott Estrada",
		role: "Developer",
		photo: "scott-estrada-developer.jpg",
	},
	{
		name: "Barbara Ramos",
		role: "Graphic Designer",
		photo: "barbara-ramos-graphic-designer.jpg",
	},
];

for (let i = 0; i < team.length; i++){
	let curItem = team[i]
	console.log(curItem);
}