#Introduction
C++ est un langage compilé, typé et tout pleins de bonnes chose dont Wikipedia se fera un bonheur de vous expliquer.  
La majeur partie de ce qui suit est tiré de [The Méga Cours de C++](http://casteyde.christian.free.fr/cpp/cours/index.html) et fait plus office de note que de veritable support pour apprendre C++. Pour veritablement apprendre C++, allez voir d'autres sources mieux detaillées.

## Variables

La taille des types n'est spécifiée dans aucune norme. La seule chose qui est indiquée dans la norme C++, c'est que le plus petit type est le type `char`. Les tailles des autres types sont donc des multiples de celle du type char. De plus, les inégalités suivantes sont toujours vérifiées: `char ≤ short int ≤ int ≤ long int` et `float ≤ double ≤ long double`  
Par ailleurs il est possible de signer (ou non) une variable. Un type signé permet de stocker des nombre negatifs, mais ce au detriment d'une plage de valeur absolue plus petit. Ainsi un nombre codé sur 8 bits non signé aura une plage de valeur de 0~255 alors que le signé sera de -128~128. 1 bits est en effet reservé a declarer si le nombre et negatif ou non.  

### Type de variables
 `int`: Integer. Nombre entier. Il est stocker sur un nombre d'octets qui varie selon l'architecture materiel (2 octets sur les architectures 16 bits et 4 octets sur les 32 bits)  
 `double`: Nombre a decimal double precision  (8 octets)  
 `float`: Nombre a decimal  (4 octets)  
 `void`: Aucun type  
 `bool`: Booléens  
 `char`: Characteres (1 octet)  
 `wchar_t`: Characteres long  

 `<Type> <Nom Variable>[<Dimension>]`: Tableau a une dimension contenant des variables du type déclaré  
 `<Type> <Nom Variable>[<Dimension>][<Dimension>]`: Matrice (tableau de tableaux)  

`const <Type> <Nom Variable>`: Declare une variable immuable  
`long` et `short`: Permettent de declarer une variable avec des tailles memoires differentes de celle par defaut. Par exemple le type `short int` est sur 2 octets et le type `long int` sur 4 octets


## Operateurs de bases
`+`, `-`, `*`: Operateur d'adition et de multiplication  
`/`, `%`: Operateur de division (division euclidienne pour les entiers et la division classique pour les flottants) et congruence (reste de la division euclidienne)  
`&`, `|`, `^`, `~`: Operateur binaire. Respectivement: AND, OR, XOR et NOT  
`<<`, `>>`: effectuent un décalage binaire vers la gauche et la droite respectivement, d'un nombre de bits égal à la valeur du second opérande.  
###2.1. Affectation composée  

`+=`, `-=`, `*=`: Affectation de la forme `<Variable1> = <Variable1> <Operation> (<Variable2>)`
### Affectation incremental, decremental

Les opérateurs d'incrémentation et de décrémentation ++ et -- s'appliquent comme des préfixes ou des suffixes sur les variables. Lorsqu'ils sont en préfixe, la variable est incrémentée ou décrémentée, puis sa valeur est renvoyée. S'ils sont en suffixe, la valeur de la variable est renvoyée, puis la variable est incrémentée ou décrémentée. Par exemple :

```c++
int i=2,j,k;
j=++i;   /* i et j valent 3. */
k=j++;   /* k vaut 3 et j vaut 4. */
```

> On prendra garde à n'utiliser les opérateurs d'incrémentation et de décrémentation postfixés que lorsque cela est réellement nécessaire. En effet, ces opérateurs doivent contruire un objet temporaire pour renvoyer la valeur de la variable avant incrémentation ou décrémentation. Si cet objet temporaire n'est pas utilisé, il est préférable d'utiliser les versions préfixées de ces opérateurs. 

### Opérateur ternaire
L'opérateur ternaire d'évaluation conditionnelle `?:` est le seul opérateur qui demande 3 paramètres (à part l'opérateur fonctionnel des fonctions, qui admet *n* paramètres). Cet opérateur permet de réaliser un test sur une condition et de calculer une expression ou une autre selon le résultat de ce test. La syntaxe de cet opérateur est la suivante :

```c++
<test> ? <expression1> : <expression2>
```

Dans cette syntaxe, test est évalué en premier. Son résultat doit être booléen ou entier. Si test est vrai (ou si sa valeur est non nulle), expression1 est calculée et sa valeur est renvoyée. Sinon, c'est la valeur de expression2 qui est renvoyée. Par exemple, l'expression :

```c++
Min=(i<j)?i:j;
```

calcule le minimum de *i* et de *j*.

### Opérateur virgule
L'opérateur virgule, quant à lui, permet d'évaluer plusieurs expressions successivement et de renvoyer la valeur de la dernière expression. La syntaxe de cet opérateur est la suivante :  
```c++
<expression1>,<expression2>,<expression3>
```

où `<expression1>`, `<expression2>`, etc. sont les expressions à évaluer. Les expressions sont évaluées de gauche à droite, puis le type et la valeur de la dernière expression sont utilisés pour renvoyer le résultat. Par exemple, à l'issue des deux lignes suivantes :

```c++
double r = 5;
int i = r*3,1;
```
*r* vaut 5 et *i* vaut 1. *r**3 est calculé pour rien.
