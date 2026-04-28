//FR version

let blockNews = document.querySelector('.doc_news--ul');

let arrayContent = [
{
	date: "16 avril 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc  6.1.1.5585, Console de Supervision 6.1.1.5584, Watchdoc Print Client for Windows 7.0.6003 et Skyprint 7.0.6002"
},
{	
	date: "9 avril 2026",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.40.0"
},
{
	date: "3 avril 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5571, Watchdoc Print Client for Windows 7.0.6003 et Skyprint 7.0.6002"
},
{
	date: "1er avril 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5570, Watchdoc Print Client for Windows 7.0.6003 et Skyprint 7.0.6002"
},
{
	date: "18 mars 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5556, Watchdoc Print Client for Windows 7.0.5999 et Skyprint 7.0.5998"
},
{
	date: "10 mars 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5548, Watchdoc Print Client for Windows et Skyprint 7.0.5983"
},
{
	date: "04 mars 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5543, Watchdoc Print Client for Windows et Skyprint 7.0.5983"
},
{
	date: "23 février 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5533, Watchdoc Print Client for Windows 7.0.5979 et Skyprint 7.0.5979"
},

{
	date: "18 février 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5528, Watchdoc Print Client for Windows 7.0.5979 et Skyprint 7.0.5979"
},
{
	date: "04 février 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5514, Watchdoc Print Client for Windows 7.0.5973 et Skyprint 7.0.5973"
},
{
	date: "21 janvier 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5500, Watchdoc Print Client for Windows 7.0.5957 et Skyprint 7.0.5957"
},
{
	date: "08 janvier 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5487, Watchdoc Print Client for Windows 7.0.5944 et Skyprint 7.0.5947"
},
{
	date: "07 janvier 2026",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5486, Watchdoc Print Client for Windows 7.0.5944 et Skyprint 7.0.5947"
},
{	
	date: "19 décembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelle version de Watchdoc 6.1.1.5465"
},
{
	date: "11 décembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions de Watchdoc, Console de Supervision 6.1.1.5458, Watchdoc Print Client for Windows 7.0.5912 et Skyprint 7.0.5911 "
},
{	
	date: "04 décembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelle version Watchdoc 6.1.1.5452"
},
{	
	date: "27 novembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5444, Watchdoc Print Client for Windows 7.0.5880 et Skyprint 7.0.5881"
},
{	
	date: "24 novembre 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.37.1"
},
{	
	date: "17 novembre 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.37.0"
},	
{	
	date: "12 novembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5430 et Watchdoc Print Client for Windows 7.0.5821"
},	
{	
	date: "12 novembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5430 et Watchdoc Print Client for Windows 7.0.5821"
},	
	{	
	date: "31 octobre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5417 et Watchdoc Print Client for Windows 7.0.5821"
},	
{	
	date: "20 octobre 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.36.0"
},
{	
	date: "15 octobre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5402 et Watchdoc Print Client for Windows 7.0.5802"
},
{	
	date: "03 octobre 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.35.0"
},
{	
	date: "1er octobre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5388 et Watchdoc Print Client for Windows 7.0.5727"
},
]

arrayContent.forEach(c => {
    blockNews.innerHTML += `<li class="doc_news__content--li">
        ${c.date} :
   ${

          c.link

            ? `<a href="${c.link}" class="doc_news__content--quote">${c.content}</a>

        `

            : `<span class="doc_news__content--span">${c.content}</span>`

        }
    </li>
  `
})
