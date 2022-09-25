#Nim

##Affectation de variable

`const <Name>: <type> = <Valeur>`: Variable immuable  
`let <Name>: <type> = <Valeur>`: Variable immuable  
`var <Name>: <type> = <Valeur>`: Variable muable  

##Sortie
`echo` print une varible, texte, etc...  
`\n`  newline charactere  
`\t`  tab charactere  
`\\`  backslash  
`r"<texte>"`  raw strings for print all text  


##Type
##Convertion possible comme en Python
`int`: nb entier  
`float`: nb a virgule  
`charUn`: unique caractere ASCII  
`string`: Une chaine de caractere  
`self.add(<texte>)`: Ajouter du texte a la variable  
`bool`: boolean  

##Conteneur
`<container>[<index>]`: Accès aux conteneur.  
`array`: Tableau a taille fixe ( `a: array[3, int] = [5, 7, 9]` )  
`seq`: Tableau a taille variable `e1: seq[int] = @[]`  
`self.add(<truc>)`  
`tulple`: Melange de tuple et de dico Python `a:tuple=(<variable>,<variable>)`  

##test et operation

`==`, `!=`, `<`, `>`, `<=`, `>=`, `and`, `or` `xor` et `not` renvoient un boolean  
`..`: Selection  
`..<`: Selection sans le dernier terme  
`mod` Reste d'une division euclidienne  
`div` Division euclidienne  


Condition if  
```nim
if <condition>:
<block>
elif <condition>:
<block>
else:
<block>
```
Condition case  
```nim
case <Variable>:
of <isVariable>:
<block>
of <isVariable>,<isVariable>,<isVariable>,<isVariable>:
<block>
of <isVariable>:
<block>
else:
<block>

discard
```
Boucle for  
```nim
for <loopVariable> in <iterable>:
<loop body>

nb ..< nb

countup(nb1,nbfin, step)

for <counterVariable>, <loopVariable> in <iterator>:
<loop body>
```
Boucle while  
```nim
while <condition>:
<loop body>
```
`inc <variable_int>`: incremente 1 a une variable  

`break`: Casse une boucle  
`continue`: Recommence la boucle  

##Fonctions


```nim
proc <name>(<p1>: <type1>, <p2>: <type2>, ...): <returnType> =
<Body>
return

###Il est possible de declarer une fonction sans son contenue
```










