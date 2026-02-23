//FR version

let blockNews = document.querySelector('.doc_news--ul');

let arrayContent = [
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
{	
	date: "17 septembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5374"
},
{	
	date: "12 septembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5368"
},
{	
	date: "04 septembre 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5360"
},
{	
	date: "02 septembre 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.34.0"
},
{	
	date: "14 août 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.33.0"
},
{	
	date: "06 août 2025",
	link: "/Watchdoc/A_Getting_Started/Release_611.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.1.5332"
},
{	
	date: "24 juillet 2025",
	link: "/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5318 et Watchdoc Print Client for Windows 7.0.5496"
},
{	
	date: "18 juillet 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.32.0"
},
{	
	date: "15 juillet 2025",
	link: "/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5304 et Watchdoc Print Client for Windows 7.0.5496"
},
{	
	date: "30 juin 2025",
	link: "/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.31.0"
},
{	
	date: "26 juin 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5290 et Watchdoc Print Client for Windows 7.0.5419"
},
{	
	date: "12 juin 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5276 et Watchdoc Print Client for Windows 7.0.5352"
},
{	
	date: "04 juin 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5268 et Watchdoc Print Client for Windows 7.0.5289"
},
{	
	date: "28 mai 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc, Console de Supervision 6.1.0.5262 et Watchdoc Print Client for Windows 7.0.5289"
},
{	
	date: "26 mai 2025",
	link:"/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.30.0"
},
{	
	date: "14 mai 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5249, ainsi que Watchdoc Print Client for Windows 7.0.5242"
},
{	
	date: "30 avril 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5234, ainsi que Watchdoc Print Client for Windows 7.0.5194"
},
{	
	date: "29 avril 2025",
	link:"/ScanCare/C_Release_Notes/Release_Notes.htm",
	content: "nouvelle version Watchdoc ScanCare 9.10.705"
},
{	
	date: "17 avril 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5221, ainsi que Watchdoc Print Client for Windows 7.0.4987"
},
{	
	date: "02 avril 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5206, ainsi que Watchdoc Print Client for Windows 7.0.4987"
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
