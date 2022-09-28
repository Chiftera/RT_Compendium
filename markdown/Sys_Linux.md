# GNU/Linux
##Intro
GNU/Linux correspond au noyau Linux plus tout les logiciels GNU. Neanmoins par abus de langage, on dira le plus 
souvent juste Linux pour qualifier l'ensemble. Il faut par ailleurs savoir qu'il existe un tas d'autre systeme 
d'exploitation qui ne soit pas basé sur le noyau Linux. Les plus connu etant Windows et MacOS, mais il y a aussi HaikuOS, 
Redox, FreeBSD, Debian/Hurd, etc... Vous trouverez plus d'info sur [μ–kernel](http://www.microkernel.info/) et [DistroWatch](https://distrowatch.com/).  
Ce qui suis est une compilation des commandes les plus utiles ainsi que les bases du fonctionnement des systemes UNIX.  
Aussi, chaque commande à, sauf quelques exeptions, des parametre applicable. Ainsi a vous d'aller voir leur documentation via `man`, `info` ou sur le web.  
Par ailleurs la plupart des commande ci contre peuvent crée/ modifier plusieurs éléments a la fois. Neanmoins je met tout au singulier 
par flemme. Encore une fois, allez voir leur docs. Pour finir, l'un des meilleurs moyen d'apprendre étant d'experimenter (surtout en informatique) 
il est franchement recommander de tester les commandes qui suivrons.  

##Droits et fichiers
Un fichier peut avoir 512 combinaisons de droits possibles. Toute ne sont pas forcement interessante cela dit... Les droits d'un fichiers se divise en 3 
categorie elles même divisible en 3: Les droits d'ecriture, de lecture et d'execution pour le proprietaire, le groupe et les autres utilisateurs. Le plus 
généralement sur le repertoire `/home` le proprietaire aura les droits d'ecritures et de lecture, et le groupe ainsi que les autres seulement le droit 
de lecture. Il est donc bien important sur une machine avec plusieurs utilisateurs de modifier ces droits, votre vie privé étant par défaut, inexistante. 
Seul le propritaire du fichier ainsi que l'administrateur de la machine peuvent changer les droits du fichier. Par ailleurs, comme pour un reseau, 
les fichiers aussi peuvent avoir un masque! Par là il faut entendre que chaque fichier crée a tels droits par defaut et que cette affectation par defaut 
peut être modifier. Ainsi nous pouvons faire en sorte que a chaque fois que nous créeons un fichier, ce dernier ne soit pas accessible en lecture pour les autres. 
Finalement les droits sont codés sur 9 bit. les 3 premiers sont les droits de lecture/ecriture/execution pour le proprietaire, puis viennent ceux du groupe et des autres 
toujours sur le même shema. Ce qui donne quelque chose qu'on vera le plus souvent de le forme `rwxrwxrwx`. Le repertoire `/home` par defaut est `rw-r--r--` (le `-` signifie 
aucun droit)  


`chmod` : Modification des droits d'un fichier ou repertoire  
`chown` : Modification proprietaire  
`chgrp` : Modification groupe  
`umask` : Affectations automatiques des droits  

## Manipulation de fichiers et dossiers
`mkdir` : Créer un repertoire  
`rmdir` : Supprime un repertoire  
`rm` : Suppression de fichiers/ repertoire  
`cp` : Copie d'un fichier/ repertoire  
`mv` : Deplace et/ou renomme un fichier/ repertoire  
`sed` : Ecriture d'un fichier et modification de son contenue. C'est une commande bien plus complexe qu'il n'y parrait. 
Alors si vous trouvez Vi trop prise de tête, passez votre chemin  
`touch` : Modification de l'horodatage (date de derniere modification) d'un fichier en celle actuel. Si le fichier passé 
en parametre n'existe pas, alors il sera automatiquement crée  

### Droits

### Recherches et informations

`find` : Recherche d'un fichier au sein d'une arborescence  
`whereis` : Cherche les chemins de bin, man et sources d'une commande  
`grep` : Recherche un motif au sein d'un fichier  
`basename` : Extrait le nom d'un fichier d'un repertoire  
`dirname` : Extrait le nom d'un repertoire d'un repertoire  
`stat` : Affichage de l'inode d'un fichier  
`ls` : Affiche le contenue d'un repertoire (celui courant par defaut)  

### Divers

`shasum` : Verifie la somme de controle d'un fichier  

## Partitions et Systemes de Fichiers

### Partitionnement

`fdisk <Disque>` : Permet la manipulation et creation de partitions sur un disque **MBR**  
`gdisk <Disque>` : Permet la manipulation et creation de partitions sur un disque **GPT**  

### Systemes de fichiers

`mkfs` : Creation d'un système de fichiers (Ext4, Ext3, Btrfs, VFAT, etc...)  
`tune2fs` : Modification systeme de fichier en Ext  
`debugfs` : Debug d'un systeme de fichier (Btrfs vient avec ses propre outils, il faut donc les privilégié)  
`mtools` : Pour l'édition des systèmes de fichiers VFAT  

`df` :	Obtention des info sur le(s) systeme(s) de fichier(s) monté(s)  
`du` :	Obtention des info sur l'arboressence d'un repertoire  

### Memoire vive et swap
`free` : Obtention de l'etat de la RAM et Swap  
`mkswap` : Creation d'une swap sur une partition swap  
`swapon` & `swapoff` : active et desactive la swap ciblée  

### Divers

`mount` & `umount` : Montage et demontage d'une partition  
*/etc/fstab* : Dossier pour le montage de systemes de fichiers  

## Processus

`ps -aux` : Affiche tout les processus avec le nom user et date lancement  
`ps -ef` : Affiche tout les processus avec PID/PPID et autres infos  
`pstree` : Affiche tout les processus en arbre  
`top` : Affiche tout les processus en temps réel  

> [CTR]+[Z] Stop temporairement le processus en cours  
> [CTR]+[C] Stop le processus en cours

`jobs` : Liste les processus arretés et en fond  
`bg <Numero ps>` : Execute un processus en fond  
`fg <Numero ps>` : Execute un processus au premier plan  
`nohup <Commande>` : Permet l'execution du programme independament du shell  
`time` : Temps d'execution d'un processus  

> #### Elements de la colonne STAT de `ps`:  
> R Running  
> T Stoppé  
> S Endormi en attente de processus  
> D Endormi en attente de ressource (I/O, etc)  
> Z Zombie, le pere doit recuperer son code de retour  
> W Processus deplacé en espace de pagination  
>  
> N Plus petite priorité  
> < Plus grande priorité  
