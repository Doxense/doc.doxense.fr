//FR version

let blockNews = document.querySelector('.doc_news--ul');

let arrayContent = [
{	
	date: "26 mai 2025",
	link:"/Focalist/D_NotesVersions/Notes_Versions.htm",
	content: "nouvelle version Focalist 9.28.0"
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
{
	date: "21 mars 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions de Watchdoc et Console de Supervision 6.1.0.5194, ainsi que Watchdoc Print Client for Windows 7.0.4907"
},	
{
	date: "06 mars 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions de Watchdoc et Console de Supervision 6.1.0.5178, ainsi que Watchdoc Print Client for Windows 7.0.4863"
},
	{
	date: "20 février 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions de Watchdoc et Console de Supervision 6.1.0.5164, ainsi que Watchdoc Print Client for Windows 7.0.4798"
},
{
	date: "11 février 2025",
	link:"/ScanCare/C_Release_Notes/Release_Notes.htm",
	content: "nouvelle version de Watchdoc ScanCare 9.10.625"
},
{
	date: "06 février 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
	content: "nouvelles versions de Watchdoc et Console de Supervision 6.1.0.5150, ainsi que Watchdoc Print Client for Windows 7.0.4723"
},
{	
	date: "09 janvier 2025",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5122, ainsi que Watchdoc Print Client for Windows 7.0.4631"
},
{	
	date: "12 décembre 2024",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5094, ainsi que Watchdoc Print Client for Windows 7.0.4612"
},
{	
	date: "03 décembre 2024",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5082, ainsi que Watchdoc Print Client for Windows 7.0.4586"
},
{	
	date: "14 novembre 2024",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5058"
},
{	
	date: "30 octobre 2024",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5052, ainsi que Watchdoc Print Client for Windows 7.0.4506"
},
{	
	date: "18 octobre 2024",
	link:"/Watchdoc/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5038, ainsi que Watchdoc Print Client for Windows 7.0.4506"
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
