# GNU/Linux

## Fichiers et droits

### Manipulation

`mkdir` : Créer un ou plusieurs repertoire(s)  
`rmdir` : Supprime un repertoire  
`rm` : Suppression de fichiers  
`cp` : Copie fichier  
`mv` : Deplace et/ou renomme un fichier  
`sed` : Ecriture d'un fichier et modification de son contenue  
`touch` : Modification de l'horodatage d'un fichier et creation de fichier vide  

### Droits

`chmod` : Modification des droits d'un fichier ou repertoire  
`chown` : Modification proprietaire  
`chgrp` : Modification groupe  
`umask` : Affectations automatiques des droits  

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
