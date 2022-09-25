# Bash

[Bash](https://fr.wikipedia.org/wiki/Bourne-Again_shell) est un interpréteur en ligne de commande de type script.  
Vous pouvez retrouver un guide complet en ligne de ce dernier a cette [adresse](http://aral.iut-rodez.fr/fr/sanchis/enseignement/bash/index.html) ou en PDF [ici](http://aral.iut-rodez.fr/fr/sanchis/enseignement/IntroProgBash_2022-06-03.pdf) *([archive](./media/docs/IntroProgBash_2022-06-03.pdf))*

## Caracteres spéciaux

`<Commande> ; <Commande>` : Chaine des commande  
`<Commande> (<Commande_1> ; <Commande_2>; <...>)` : Groupement de commande  
`<Commande> &` : Processus lancé en fond  
`<Commande> > <Canal>` : Redirection du canal (ecrasement)  
`<Commande> >> <Canal>` : Redirection du canal (ecriture a la suite)  
`<Commande> && <Commande>` : Si le processus précédent renvoie 0, la commande suivante est executé  
`:` : Renvoie True (Utile? Non...)  

## Variables

`<Variable> = <Valeur>` : Affectation variable  
`$<Variable>` : Lecture de la valeur d'une variable  

`{}` : Interpretation d'une variable  
- `{x:-text}` : Si x=none, text prend la place de x  
- `{x:=text}` : Si x=none, x=text  
- `{x:+text}` : Si x!=none, text prend la place de x  
- `{x:?text}` : Si x=none, le message text s'affiche en tant qu'erreur et le programme interrompu  
- `{#x}` : Renvoit la longueur d'une chaine  

`<Variable>[<Indice>]` : Tableau a une dimension (pour afficher un valeur du tableau, on utilise `echo ${<Variable>[<Indice>]}`)  
- `<Variable>[*]` : liste tous les elements  

`unset`Suppression d'une variable  
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
`type` : Retourne de quel type de commande il s'agit  
`history` : Historique des commandes  
`alias` : Permet la creation d'alias (alias nom="<Commande>")  
`env` : Affiche pleins de truc utile sur la session utilisateur  
`pwd` Affiche le chemin de travail actuel

## Variables par défauts
`PATH` : Variable pour les chemins d'exécutables  

> On appel *Shebang* la premiere ligne d'un fichier source de la syntaxe `#!<Chemin Binaire>`, correspondant généralement au chemin du binaire du compilateur.

