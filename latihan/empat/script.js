
var main = document.getElementById('main')
var insideMain=document.createElement('div')
insideMain.setAttribute('id','content')
main.appendChild(insideMain)

//sibling dengan insideContent2
var insideContent=document.createElement('div')
insideContent.setAttribute('class',"content-post")
insideMain.appendChild(insideContent)

//h1 di dalam insideContent
var h1InsideContent=document.createElement('h1')
var h1Content=document.createTextNode('Judul Post')
h1InsideContent.appendChild(h1Content)
insideContent.appendChild(h1InsideContent)

//span di dalam insideContent
var spanInsideContent = document.createElement('span')
var spanContent = document.createTextNode('Published on 12 May 2016')
spanInsideContent.appendChild(spanContent)
insideContent.appendChild(spanInsideContent)

//p di dalam insideContent
var parInsideContent=document.createElement('p')
var parContent=document.createTextNode('Lorem Ipsum Dolor Sit Amet')
parInsideContent.appendChild(parContent)
insideContent.appendChild(parInsideContent)

//button dalam insideContent
var buttonInsideContent=document.createElement('button')
var buttonContent=document.createTextNode('Share this Post')
buttonInsideContent.appendChild(buttonContent)
insideContent.appendChild(buttonInsideContent)

//sibling dengan insideContent
var insideContent2=document.createElement('div')
insideContent2.setAttribute('class',"content-post")
insideMain.appendChild(insideContent2)

//h1 di dalam insideContent
var h1InsideContent2=document.createElement('h1')
var h1Content2=document.createTextNode('Judul Post 2')
h1InsideContent2.appendChild(h1Content2)
insideContent2.appendChild(h1InsideContent2)

//span di dalam insideContent
var spanInsideContent2 = document.createElement('span')
var spanContent2 = document.createTextNode('Published on 13 May 2016')
spanInsideContent2.appendChild(spanContent2)
insideContent2.appendChild(spanInsideContent2)

//p di dalam insideContent
var parInsideContent2=document.createElement('p')
var parContent2=document.createTextNode('Lorem Ipsum Dolor Sit Amet')
parInsideContent2.appendChild(parContent2)
insideContent2.appendChild(parInsideContent2)

//button dalam insideContent
var buttonInsideContent2=document.createElement('button')
var buttonContent2=document.createTextNode('Share this Post')
buttonInsideContent2.appendChild(buttonContent2)
insideContent2.appendChild(buttonInsideContent2)