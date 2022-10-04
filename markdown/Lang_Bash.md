# Bash
##Intro
[Bash](https://fr.wikipedia.org/wiki/Bourne-Again_shell) est un interpréteur en ligne de commande de type script.  
Vous pouvez retrouver un guide complet en ligne de ce dernier a cette [adresse](http://aral.iut-rodez.fr/fr/sanchis/enseignement/bash/index.html) ou en PDF [ici](http://aral.iut-rodez.fr/fr/sanchis/enseignement/IntroProgBash_2022-06-03.pdf) *([archive](./media/docs/IntroProgBash_2022-06-03.pdf))*  

## Caracteres spéciaux

`<Commande> ; <Commande>` : Chaine des commande  
`<Commande> (<Commande_1> ; <Commande_2>; <...>)` : Groupement de commande  
`<Commande> &` : Processus lancé en fond  
`<Commande> > <Canal>` : Redirection du canal (ecrasement)  
`<Commande> >> <Canal>` : Redirection du canal (ecriture à la suite)  
`<Commande> <(<Commande>)` : Enregistre la sortie de commande dans un fichier temporaire et la passe en parametre de la premiere commande  
`<Commande> && <Commande>` : Si le processus précédent renvoie 0, la commande suivante est executé  
`:` : Renvoie True (Utile? Non...)  

## Variables

`<Variable> = <Valeur>` : Affectation variable  
`$<Variable>` : Lecture de la valeur d'une variable  
`${!<Variable>}` : Indirection. (Voir manuel p.33)
`{}` : Interpretation d'une variable. Très important pour éviter les ambiguïtés.  
- `{x:-text}` : Si x=none, text prend la place de x  
- `{x:=text}` : Si x=none, x=text  
- `{x:+text}` : Si x!=none, text prend la place de x  
- `{x:?text}` : Si x=none, le message text s'affiche en tant qu'erreur et le programme interrompu  
- `{#x}` : Renvoit la longueur d'une chaine  
`$(<Comma,de>)` : Substitution de commandes. Renvoit le resultat de la commande, par exemple pour un affectatoin de variable  
`<Variable>[<Indice>]` : Tableau a une dimension (pour afficher un valeur du tableau, on utilise `echo ${<Variable>[<Indice>]}`)  
- `<Variable>[*]` : liste tous les elements  

`unset` : Suppression d'une variable  
`readonly` : Pretection en ecriture et de la suppression d'une variable  
`export` : Exporte au autre shell/script le contenu de la variable  

## Redirection

`<` : Canal entrant via un ficher/etc  
`<<` : Canal entrant en ligne  
`>` : Canal sortant vers un fichier (ecrase le fichier)  
`>>` : Canal sortant vers un fichier (ecrit a la suite du fichier)  
`<Canal> >& <Canal>` : Redirection d'un canal vers un autre  
`<Commande> | <Commande>` : Redirection du canal de sortie d'une commande vers le canal d'entré d'une autre

`exec <nombre de 3~9>`	Ouverture d'un nouveau canal  


`stdin:` : Canal standard d'entrée (descripteur 0)  
`stdout:` : Canal standard de sortie (descripteur 1)  
`stderr:` : Canal standard d'erreur (descripteur 2)  

## Conditions

`test <Option> <Fichier, Variable, etc>` : Vérifier le type d'un fichier et comparer des valeurs, (Voir `man test`)  
`exit` : Fini un programme avec un code de retour (par convention, 0 si reussi)  
`read` : Input (lecture d'une reponse de l'utilisateur, utilisation pareil quant Python)  

Test de condition basique:
```Bash
if <Condition>
then <Commande>
elif <Condition>
then <Commande>
else <Commande>
fi
``` 
Test de condition parmis une multitude de choix possibles:
```Bash
case <Variable> in
<Variable_1>) <Commande>;;
<Variable_2>) <Commande>;;
...
esac
```
(même fonctionnement qu'avec le `for` de Python):
```Bash
for <Variable> in <Variable_2> <Variable_3> ...
do
<Commande> 
done
```
  
Boucle "tant que":
```Bash
while <Condition>
do
<Commande> 
done
```

?
```Bash
until <Condition>
do
<Commande> 
done
```

Fonction Bash:
```Bash
nom_fonction ()
{
<Commande>
return
}
```

`trap <Commande> <Code Signal>` : Intercepte les signaux de l'OS et execute <Commande>  
`break <Nombre>` : Casse n boucle  
`continue <Nombre>` : Remonte de n boucle  



## Divers

`set` : Parametrage du shell  
`echo <Expression>` : Retourne une expression donné en paramètre  
`read` : Lit lit une ligne entière sur l’entrée standard  
`type` : Retourne de quel type de commande il s'agit (internet/externe) 
`history` : Historique des commandes  
`alias` : Permet la creation d'alias (alias nom="<Commande>")  
`pwd` Affiche le chemin de travail actuel
`locale` : affiche et modifier les paramètres locaux  
`wc` : Compte les lignes  
## Variables Bash
`set` : Définit ou invalide des valeurs d'options et des paramètres de position du shell (Voir manuel p.25)  
`PATH` : Variable pour les chemins d'exécutables des commandes externes  
`env` : Variables de sessions  
`PS1` : Variable definissant le prompt  
`IFS` : Du shell contient les caractères séparateurs de mots  
## Fichier Bash  
On appel *Shebang* la premiere ligne d'un fichier source de la syntaxe `#!<Chemin Binaire>`, précise au shell courant
quel interpréteur doit être utilisé pour exécuter le programme  

### Parametres Bash
Dans un fichier shell, les paramètres de position sont utilisés pour accéder aux valeurs des
arguments qui ont été passés lors de son appel : cela signifie qu’au sein du fichier shell, les
occurrences de `$1` sont remplacées par la valeur du premier argument, celles de `$2` par la valeur
du deuxième argument, etc. Le paramètre spécial $# contient le nombre d’arguments passés
lors de l’appel.  
Le paramètre de position 0 contient le nom complet du programme shell qui s’exécute. Les paramètres spéciaux `@` et `*` contiennent tous deux la liste des valeurs des paramètres de
position initialisés. Neanmoins ces deux paramètres spéciaux ont des valeurs distinctes lorsque leur référence est placée entre
des guillemets (`"$*"` et `"$@"`).  
