//FR version

let blockNews = document.querySelector('.doc_news--ul');

let arrayContent = [
{
	date: "06 février 2025",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions de Watchdoc et Console de Supervision 6.1.0.5150, ainsi que Watchdoc Print Client for Windows 7.0.4723"
	},
{	
	date: "09 janvier 2025",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5122, ainsi que Watchdoc Print Client for Windows 7.0.4631"
},
{	
	date: "12 décembre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5094, ainsi que Watchdoc Print Client for Windows 7.0.4612"
},
{	
	date: "03 décembre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5082, ainsi que Watchdoc Print Client for Windows 7.0.4586"
},
{	
	date: "14 novembre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5058"
},
{	
	date: "30 octobre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5052, ainsi que Watchdoc Print Client for Windows 7.0.4506"
},
{	
	date: "18 octobre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5038, ainsi que Watchdoc Print Client for Windows 7.0.4506"
},
{	
	date: "19 septembre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.5025, ainsi que Watchdoc Print Client for Windows 7.0.4499"
},
{	
	date: "06 septembre 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.4996, ainsi que Watchdoc Print Client for Windows 7.0.4458"
},
{	
	date: "19 août 2024",
	link:"/fr/Watchdoc/Content/A_Getting_Started/Release_610.htm",
    content: "nouvelles versions Watchdoc et Console de Supervision 6.1.0.4980, ainsi que Watchdoc Print Client for Windows 7.0.4438"
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
