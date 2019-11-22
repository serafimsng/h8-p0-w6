var body= document.body
var bodyChildren=body.children

console.log(bodyChildren)

var divEldest= document.getElementById("eldest-parent")
var divEldestChild=divEldest.children

divEldestChild[0].innerHTML='Diakses Melalui Eldest Parent'

var divMiddle=document.getElementById('a-child')

divMiddle.previousElementSibling.innerHTML='Diakses Melalui a Child'
divMiddle.nextElementSibling.innerHTML='Diakses Melalui a Child'

var firstParent=divMiddle.parentNode
var grandParentDivMiddle=firstParent.parentNode
grandParentDivMiddle.nextElementSibling.innerHTML='Diakses Melalui a Child'
