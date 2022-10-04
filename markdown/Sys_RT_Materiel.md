# Materiels  
## Hotes  
Les hôtes: Les ordinateurs qui envoient et reçoivent des messages sur le réseau.
On distingue 2 types d'hotes:

- **Les serveurs**:
Hôtes équipés de logiciels permettant de fournir des informations, comme des
messages électroniques ou des pages Web, à d'autres hôtes sur le réseau. Chaque
service nécessite un logiciel serveur distinct.
- **Les clients**:
Ordinateurs équipés d'un logiciel qui permet de demander des informations
auprès du serveur et de les afficher.

## Supports reseaux

**Les supports réseau**: Les supports réseau interconnectent les hôtes 
et les périphériques réseaux. Ex : les câbles cuivre, les fibres optiques et les ondes radio.

### Fibre optique
La fibre optique est un support qui transmet les données via la lumiere. Elle est insensible au 
perturbation éléctromagnétique exterieur et permet un très grand débit sur de long distance 
au prix d'un cout financier plus élevé et d'une resistance moindre.  
Un cable de fibre optique est typiquement composé de plusieurs couche:  
- Une gaine PVC pour la protection exterieur du cable  
- Un materiaux de renforcement  
- Un tampon pour proteger le coeur et l'enveloppe  
- Une enveloppe pour reflechir la lumiere dans le coeur  
- Un coeur qui conduit la lumiere  

### Cable Coaxial
## Les périphériques partagés

**Les périphériques partagés**: Ils ne sont pas directement connectés au réseau, mais aux hôtes. L'hôte assure le partage des périphériques sur le réseau.

## Les périphériques réseaux

### Le concentrateur ou Hub

Ce dernier est comparable a une "*multiprise reseau*". Un hub:  

- Est doté de plusieurs ports pour connecter les hôtes au réseau  
- Ne décode pas les messages  
- Ne détermine pas l’hôte qui doit recevoir le message  
- Répète sur tout les autres ports un message lorsqu'il en recoit un  
- Est un périphérique à bande partagée. Il ne priorise aucune connexion  

Un **domaine de collision** est une zone du réseau où des collisions peuvent se produire entre des messages de différents hôtes.  
Grand nombre de collision => Grand nombre de retransmission
=> **Ralentissement du trafic**

Une collision se deroule selon le shema suivant:  

1. Deux hôtes tentent d’envoyer simultanément un message  
2. Les signaux entrent en collision (se superposent)  
3. Les messages sont alors illisibles par les hôtes  
4. Le concentrateur ne décode pas les messages  
5. Le message endommagé est répété sur tout les ports  


### Commutateurs ou Switch

Un **switch** est la **version amelioré du hub**. Au lieu de repeter un message a tout ses ports, ce dernier tient une **table d'adresses MAC** qui lui sert a rediriger les paquets vers le bon port. Il permet ainsi une economie de bande passante et la conception de reseaux locaux plus grands, au detriment d'une complexité accrue.  
Un switch:  

- Permet de connecte plusieurs hôtes au réseau  
- Permet de de décode les trames pour lire les adresses MAC  
- A une table d’adresse MAC contenant la liste des ports actifs et les adresses MAC des hôtes connectés sur chaque port  
- Oriente la trame reçue vers le port où est connecté le destinataire  
- Fait des circuits séparés, donc pas pas de collision  
- Ne gère pas les adresse IP  

Le switch met sa table MAC a jour lors du decodage de l'adresse source de la trame Ethernet d'un paquet 
entrant. Si le paquet est a destination d'une adresse MAC inconnu, alors il **inonde** tout les ports. 
C'est a dire qu'il fera comme le hub et repetera le paquet sur tout les ports. A intervalles regulieres, 
le switch oublie la table MAC pour la remettre a jour via des paquets entrants. Par ailleurs, un switch
peut abandonner un paquets dans le cas où:
- Il est corrompu  
- Il n'y a qu'un port de connecté (Hub ou machine)  

### Associer concentrateurs et commutateurs  

Lorsqu’un concentrateur est connecté à un port du commutateur:

- Le commutateur associe les adresse MAC de tous les hôtes connectés au concentrateur à ce port unique.  
- Si source et destinataire d’un message sont sur le même port, le commutateur rejette le message,  
- Si le concentrateur transfère sur ce port un message endommagé par une collision, le commutateur rejette ce message.  
- Chaque port du commutateur crée un domaine de collision distinct.  


### Routeurs

Les routeurs sont chargés de trouver le meilleur chemin pour transmettre un message au destinataire 
(en utilisant les informations d'adresses du destinataire final et de l'expéditeur d'origine). Le 
trafic dans un réseau local reste local. Le routeur ne transmet que le trafic destiné à un autre réseau.
Ce derniers:


- Permet de diviser un réseau local en plusieurs sous-réseaux (emplacement physique, sécurité, applications). Connecte des réseau, et non des hôtes.
- Décode les adresses IP (sources et destination) des trames.
- Possede une table contient des informations sur les adresses IP des réseaux connectés à chaque interface.
- Losqu'un paquet reçu est décapsulé, puis réencapsulé et réémis par l’interface où se situe le réseau de destination. C’est le routage.
- Ne transmet pas les trames adressées à l’adresse MAC de diffusion. (Seul le switch le fait).  
- Possede une IP et adresse MAC par interface.  

Un paquet par defaut ne peut faire que 128 saut. Cela evite qu'un routeur renvoit un paquet indefiniment a la route par defaut et que ce dernier 
soit perdu pour l'eternite sur le reseau.  
Dans une table de routage, la route par defaut sera definie par `0.0.0.0    0.0.0.0    <IP>` où `<IP>` correspond à la route par defaut.  

## Topologie reseaux
Il existe 2 type de topologie:
- **La topologie logique** correspond a la distribution des adresses IP. On ne regardera dans une telle topologie que l'adresse IP pour disserner qui appartient à quel reseau.  
- **La topologie physique** correspond elle a comment le reseaux est physiquement connecté. Nous pouvons citer en exemple:  
	- **Peer to peer**: Le logiciel client et le logiciel serveur sont généralement exécutés sur des ordinateurs distincts, mais un seul ordinateur peut tenir simultanément ces deux rôles. Ce type de réseau est appelé réseau peer to peer. Le plus simple est constitué de deux ordinateurs interconnectés à l'aide d'une connexion câblée ou sans fil.
	- **Accès multiple**: Chaque hôte est connecté à tout les autres. Des protocoles sont nécessaires pour contrôler l’accès au support.
	- **En anneau**: Chaque hôte n’est connecté qu’à deux autres hôtes . Les données circulent dans un seul sens.
  



