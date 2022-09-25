# C++
##Introduction
C++ est un langage compilé, typé et tout pleins de bonnes chose dont Wikipedia se fera un bonheur de vous expliquer.  
La majeur partie de ce qui suit est tiré de [The Méga Cours de C++](http://casteyde.christian.free.fr/cpp/cours/index.html) et fait plus office de note que de veritable support pour apprendre C++. Pour veritablement apprendre C++, allez voir d'autres sources mieux detaillées.

##1. Variables

La taille des types n'est spécifiée dans aucune norme. La seule chose qui est indiquée dans la norme C++, c'est que le plus petit type est le type `char`. Les tailles des autres types sont donc des multiples de celle du type char. De plus, les inégalités suivantes sont toujours vérifiées: `char ≤ short int ≤ int ≤ long int` et `float ≤ double ≤ long double`  
Par ailleurs il est possible de signer (ou non) une variable. Un type signé permet de stocker des nombre negatifs, mais ce au detriment d'une plage de valeur absolue plus petit. Ainsi un nombre codé sur 8 bits non signé aura une plage de valeur de 0~255 alors que le signé sera de -128~128. 1 bits est en effet reservé a declarer si le nombre et negatif ou non.  

###1.1. Type de variables
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


##2. Operateurs de bases
`+`, `-`, `*`: Operateur d'adition et de multiplication  
`/`, `%`: Operateur de division (division euclidienne pour les entiers et la division classique pour les flottants) et congruence (reste de la division euclidienne)  
`&`, `|`, `^`, `~`: Operateur binaire. Respectivement: AND, OR, XOR et NOT  
`<<`, `>>`: effectuent un décalage binaire vers la gauche et la droite respectivement, d'un nombre de bits égal à la valeur du second opérande.  
###2.1. Affectation composée  

`+=`, `-=`, `*=`: Affectation de la forme `<Variable1> = <Variable1> <Operation> (<Variable2>)`
###2.2. Affectation incremental, decremental

Les opérateurs d'incrémentation et de décrémentation ++ et -- s'appliquent comme des préfixes ou des suffixes sur les variables. Lorsqu'ils sont en préfixe, la variable est incrémentée ou décrémentée, puis sa valeur est renvoyée. S'ils sont en suffixe, la valeur de la variable est renvoyée, puis la variable est incrémentée ou décrémentée. Par exemple :

```c++
int i=2,j,k;
j=++i;   /* i et j valent 3. */
k=j++;   /* k vaut 3 et j vaut 4. */
```

> On prendra garde à n'utiliser les opérateurs d'incrémentation et de décrémentation postfixés que lorsque cela est réellement nécessaire. En effet, ces opérateurs doivent contruire un objet temporaire pour renvoyer la valeur de la variable avant incrémentation ou décrémentation. Si cet objet temporaire n'est pas utilisé, il est préférable d'utiliser les versions préfixées de ces opérateurs. 

###2.3 Opérateur ternaire
L'opérateur ternaire d'évaluation conditionnelle `?:` est le seul opérateur qui demande 3 paramètres (à part l'opérateur fonctionnel des fonctions, qui admet *n* paramètres). Cet opérateur permet de réaliser un test sur une condition et de calculer une expression ou une autre selon le résultat de ce test. La syntaxe de cet opérateur est la suivante :

```c++
<test> ? <expression1> : <expression2>
```

Dans cette syntaxe, test est évalué en premier. Son résultat doit être booléen ou entier. Si test est vrai (ou si sa valeur est non nulle), expression1 est calculée et sa valeur est renvoyée. Sinon, c'est la valeur de expression2 qui est renvoyée. Par exemple, l'expression :

```c++
Min=(i<j)?i:j;
```

calcule le minimum de *i* et de *j*.

###2.4 Opérateur virgule
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

##3. Fonctions

La définition des fonctions se fait comme suit :  
```c++
<type> <identificateur>(<paramètres>)
{
    ...   /* Instructions de la fonction. */
}
```
`<type>` est le type de la valeur renvoyée, `<identificateur>` est le nom de la fonction, et `<paramètres>` est une liste de paramètres l'où doit declarer nos variable de parametres et optionnelement leurs affecter une valeur par defaut  

La valeur de la fonction à renvoyer est spécifiée en utilisant la commande `return`, dont la syntaxe est `return valeur;`.  

Toute fonction doit être déclarée avant d'être appelée pour la première fois. La définition d'une fonction peut faire office de déclaration. Il peut se trouver des situations où une fonction doit être appelée dans une autre fonction définie avant elle. Comme cette fonction n'est pas définie au moment de l'appel, elle doit être déclarée. De même, il est courant d'avoir à appeler une fonction définie dans un autre fichier que le fichier d'où se fait l'appel. Encore une fois, il est nécessaire de déclarer ces fonctions.  
Le rôle des déclarations est donc de signaler l'existence des fonctions aux compilateurs afin de les utiliser, tout en reportant leur définition plus loin ou dans un autre fichier.  

### 3.1 Fonctions inline

Le C++ dispose du mot clé `inline`, qui permet de modifier la méthode d'implémentation des fonctions. Placé devant la déclaration d'une fonction, il propose au compilateur de ne pas instancier cette fonction. Cela signifie que l'on désire que le compilateur remplace l'appel de la fonction par le code correspondant. Si la fonction est grosse ou si elle est appelée souvent, le programme devient plus gros, puisque la fonction est réécrite à chaque fois qu'elle est appelée.

> Cependant, il faut se méfier. Le mot clé inline est un indice indiquant au compilateur de faire des fonctions inline. Il n'y est pas obligé. La fonction peut donc très bien être implémentée classiquement. Pire, elle peut être implémentée des deux manières, selon les mécanismes d'optimisation du compilateur. De même, le compilateur peut également inliner les fonctions normales afin d'optimiser les performances du programme.

De plus, il faut connaître les restrictions des fonctions inline :

* elles ne peuvent pas être récursives
* elles ne sont pas instanciées, donc on ne peut pas faire de pointeur sur une fonction inline. 

Si l'une de ces deux conditions n'est pas vérifiée pour une fonction, le compilateur l'implémentera classiquement (elle ne sera donc pas inline).

Enfin, du fait que les fonctions inline sont insérées telles quelles aux endroits où elles sont appelées, il est nécessaire qu'elles soient complètement définies avant leur appel.

Exemple:
```c++
inline <type> <Identifiant>(<Parametre>)
{
    <Instructions>
}
```
### 3.2 Fonctions statiques

Par défaut, lorsqu'une fonction est définie dans un fichier C/C++, elle peut être utilisée dans tout autre fichier pourvu qu'elle soit déclarée avant son utilisation. Dans ce cas, la fonction est dite externe. Il peut cependant être intéressant de définir des fonctions locales à un fichier, soit afin de résoudre des conflits de noms (entre deux fonctions de même nom et de même signature mais dans deux fichiers différents), soit parce que la fonction est uniquement d'intérêt local. On utilise donc `static` devant une fonction pour la rendre local.

Exemple:
```c++
// Déclaration de fonction statique :
static int locale1(void);

/* Définition de fonction statique : */
static int locale2(int i, float j)
{
    return i*i+j;
}
```
### 3.3 Fonctions prenant un nombre variable de paramètres

En général, les fonctions ont un nombre constant de paramètres. Pour les fonctions qui ont des paramètres par défaut en C++, le nombre de paramètres peut apparaître variable à l'appel de la fonction, mais en réalité, la fonction utilise toujours le même nombre de paramètres.

Le C et le C++ disposent toutefois d'un mécanisme qui permet au programmeur de réaliser des fonctions dont le nombre et le type des paramètres sont variables.

Pour indiquer au compilateur qu'une fonction peut accepter une liste de paramètres variable, il faut simplement utiliser des points de suspensions dans la liste des paramètres :
```
<type> <identificateur>(<paramètres>, ...)
```
Dans tous les cas, il est nécessaire que la fonction ait au moins un paramètre classique avant les points de suspensions.

La difficulté apparaît en fait dans la manière de récupérer les paramètres de la liste de paramètres dans la définition de la fonction. Les mécanismes de passage des paramètres étant très dépendants de la machine (et du compilateur), un jeu de macros a été défini dans le fichier d'en-tête stdarg.h pour faciliter l'accès aux paramètres de la liste. Il faut donc mettre:
```c++
#include <stdarg.h>
```
au début de votre programme. Cela permet d'utiliser le type `va_list` et les expressions `va_start`, `va_arg` et `va_end` pour récupérer les arguments de la liste de paramètres variable, un à un.

Le principe est simple. Dans la fonction, vous devez déclarer une variable de type va_list. Puis, vous devez initialiser cette variable avec la syntaxe suivante :

```c++
va_start(variable, paramètre);
```

où variable est le nom de la variable de type `va_list` que vous venez de créer, et paramètre est le dernier paramètre classique de la fonction. Dès que variable est initialisée, vous pouvez récupérer un à un les paramètres à l'aide de l'expression suivante :
```c++
va_arg(variable, type)
```

qui renvoie le paramètre en cours avec le type type et met à jour variable pour passer au paramètre suivant. Vous pouvez utiliser cette expression autant de fois que vous le désirez, elle retourne à chaque fois un nouveau paramètre. Lorsque le nombre de paramètres correct a été récupéré, vous devez détruire la variable variable à l'aide de la syntaxe suivante :
```c++
va_end(variable);
```
Il est possible de recommencer ces étapes autant de fois que l'on veut, la seule chose qui compte est de bien faire l'initialisation avec `va_start` et de bien terminer la procédure avec `va_end` à chaque fois.

> Il existe une restriction sur les types des paramètres des listes variables d'arguments. Lors de l'appel des fonctions, un certain nombre de traitements a lieu sur les paramètres. En particulier, des promotions implicites ont lieu, ce qui se traduit par le fait que les paramètres réellement passés aux fonctions ne sont pas du type déclaré. Le compilateur continue de faire les vérifications de type, mais en interne, un type plus grand peut être utilisé pour passer les valeurs des paramètres. En particulier, les types char et short ne sont pas utilisés : les paramètres sont toujours promus aux type int ou long int. Cela implique que les seuls types que vous pouvez utiliser sont les types cibles des promotions et les types qui ne sont pas sujets aux promotions (pointeurs, structures et unions). Les types cibles dans les promotions sont déterminés comme suit :

> * les types char, signed char, unsigned char, short int ou unsigned short int sont promus en int si ce type est capable d'accepter toutes leurs valeurs. Si int est insuffisant, unsigned int est utilisé ;
> * les types des énumérations (voir plus loin pour la définition des énumérations) et wchar_t sont promus en int, unsigned int, long ou unsigned long selon leurs capacités. Le premier type capable de conserver la plage de valeur du type à promouvoir est utilisé ;
> * les valeurs des champs de bits sont converties en int ou unsigned int selon la taille du champ de bit (voir plus loin pour la définition des champs de bits) ;
> * les valeurs de type float sont converties en double. 

Exemple:
```c++
#include <stdarg.h>

/* Fonction effectuant la somme de "compte" paramètres : */
double somme(int compte, ...)
{
    double resultat=0;      /* Variable stockant la somme. */
    va_list varg;           /* Variable identifiant le prochain
                               paramètre. */
    va_start(varg, compte); /* Initialisation de la liste. */
    while (compte!=0)       /* Parcours de la liste. */
    {
        resultat=resultat+va_arg(varg, double);
        compte=compte-1;
    }
    va_end(varg);           /* Terminaison. */
    return resultat;
}
```

### 3.4. La fonction main

La fonction main est appelée par le programme, c'est-à-dire qu'elle ne peut pas être récursive. Elle est par ailleurs la 1ere a être chargé et se termine par le retour d'un `int`. 0 en cas de reussite, sinon c'est un autre code d'erreur.


##4. Conditions et boucles

Condition IF:
```c++
if (<Condition>) <Instructions>
else if (<Condition>) <Instructions>
else <Instructions>

```
Condition SWITCH  

```c++
switch (<Variable>){
	case <Valeur>:
		<Instructions>
	case <Valeur>:
		<Instructions>
	...
}

```
Boucle WHILE:
```c++
while (<Condition>) <Instructions>

```
Boucle FOR
```c++
for (<Declaration et affectation variable>; <Condition sortie>; <Increment>){
<Instructions>
}

```

##Divers
### Bloc d'instructions
`{<Instructions>; <Instructions>; ...}` Les accolades permettent l'execution d'un ensemble d'instructions, notamment après un `if`, `while` ou pour la creation d'une fonction. Par ailleurs chaque instruction doit se terminer par un `;`. C++ n'interprete en effet pas les retours à la ligne ou les indentations, comme par exemple Python ou Nim, et tout le code peut donc en pratique s'écrire sur une seul et même ligne  

### Caracteres speciaux
`\a`: Bip sonore  
`\b`: Backspace  
`\f`: Début de page suivante  
`\r`: Retour à la ligne (sans saut de ligne)  
`\n`: Passage à la ligne  
`\t`: Tabulation  
`\v`: Tabulation verticale  
