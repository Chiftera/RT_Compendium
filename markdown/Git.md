# Git
## Intro
Prise de note des differentes commandes disponible avec. La liste est non exhaustif mais permet de survire. Un [manuel complet](https://git-scm.com/book/fr/v2) est disponible en francais sur le site de [Git](https://git-scm.com/)  ainsi qu'une module en ligne de [Pierre Giraud](https://www.pierre-giraud.com/git-github-apprendre-cours/)

## Base
Etat des fichiers et de la zone de travail:  
!["Etat des fichiers Git](./media/etat-fichier-git.jpg "Etat des fichiers Git")
!["Etat du repository Git](./media/zone-travail-git.jpg "Etat de la zone de travail Git")
Le contenu de la zone d’index est ce qui sera proposé lors du prochain commit.  

## Commande
`git init`: initie un nouveau dépôt git. Il faut se placer dans le repertoire de travail pour lancer la commande et cela va crée un nouveau sous repertoire nommé `.git`  
`git status`: informe de l'etat des fichiers dans notre repertoire  
`git add`: indexe le(s) fichier(s) passé(s) en paramètre (les regex fonctionnent)  
`git commit`: Valide les fichiers indexés et les ajoutes à la base. Se base sur l'etat du fichier pour faire le commit. Un fichier non indexé via `git add` ne sera pas pris en compte  
`git clone`: Clone un dépôt. Fonctionnement similaire à la commande UNIX `cp`  
`git rm`: supprime un fichier du dépôt (désindexage et suppression)  
`git rm --cached`: supprime un fichier du dépôt (désindexage **mais pas de suppression**)  
`git reset HEAD`: L'inverse de `git add`. Désindexe le fichier. Le fichier est neanmoins toujours pris en compte par Git contrairement avec `git rm --cached` où il *n'existe plus*  
`git mv`: Renommage d'un fichier. Fonctionnement pareil a la commande UNIX `mv`  
`git log`: Affiche la liste des commits  

##Repertoires speciaux  
`.git`: Dossier pour la config et memoire de Git  
`.gitignore`: Dossier ignoré par Git  

