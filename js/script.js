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

const teamMembers = [
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

const teamElement = document.getElementById("team");

for (let i = 0; i < teamMembers.length; i++) {
	const teamMember = teamMembers[i];
	console.log(teamMember);
	teamElement.innerHTML += `
				<div class="col-4 py-4">
					<div class="card"">
						<img src="./img/${teamMember.photo}" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">${teamMember.name}</h5>
							<p class="card-text">${teamMember.role}</p>
							
						</div>
					</div>
				</div>`;
}
