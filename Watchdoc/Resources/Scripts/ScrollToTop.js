<?xml version="1.0" encoding="utf-8"?>
<html xmlns:MadCap="http://www.madcapsoftware.com/Schemas/MadCap.xsd">
    <head>
    </head>
    <body>
        <p>// ==UserScript==</p>
        <p>// @name         Scroll to Top Button for Doxense Docs</p>
        <p>// @namespace    http://tampermonkey.net/</p>
        <p>// @version      1.0</p>
        <p>// @description  Ajoute un bouton pour remonter en haut de la page sur doc.doxense.fr</p>
        <p>// @author       Céline</p>
        <p>// @match        https://doc.doxense.fr/*</p>
        <p>// @grant        none</p>
        <p>// ==/UserScript==</p>
        <p>(function() {</p>
        <p>'use strict';</p>
        <p>// Création du bouton</p>
        <p>const btn = document.createElement("button");</p>
        <p>btn.innerHTML = "↑";</p>
        <p>btn.id = "scrollToTopBtn";</p>
        <p>document.body.appendChild(btn);</p>
        <p>// Style du bouton</p>
        <p>const style = document.createElement("style");</p>
        <p>style.innerHTML = `</p>
        <p>#scrollToTopBtn {</p>
        <p>position: fixed;</p>
        <p>bottom: 20px;</p>
        <p>right: 20px;</p>
        <p>width: 50px;</p>
        <p>height: 50px;</p>
        <p>background-color: orange;</p>
        <p>color: white;</p>
        <p>border: none;</p>
        <p>border-radius: 50%;</p>
        <p>font-size: 24px;</p>
        <p>cursor: pointer;</p>
        <p>display: none;</p>
        <p>box-shadow: 0 2px 6px rgba(0,0,0,0.3);</p>
        <p>z-index: 9999;</p>
        <p>}</p>
        <p>#scrollToTopBtn:hover {</p>
        <p>background-color: darkorange;</p>
        <p>}</p>
        <p>`;</p>
        <p>document.head.appendChild(style);</p>
        <p>// Affichage du bouton après scroll</p>
        <p>window.addEventListener("scroll", () =&gt; {</p>
        <p>btn.style.display = (document.documentElement.scrollTop &gt; 100) ? "block" : "none";</p>
        <p>});</p>
        <p>// Action au clic</p>
        <p>btn.addEventListener("click", () =&gt; {</p>
        <p>window.scrollTo({ top: 0, behavior: 'smooth' });</p>
        <p>});</p>
        <p>})();</p>
    </body>
</html>