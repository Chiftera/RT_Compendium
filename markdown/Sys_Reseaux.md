# Reseaux

## Intro

Un reseau est composé: d'hôtes, périphériques partagés, périphériques réseau, supports réseau

## Modèle OSI et TCP/IP
Ces 2 modeles correspondent a une norme de communication permettant de separer chaque protocole entre 
eux pour les rendre plus interoperables. Le modele OSI distingue 7 partie là ou TCP/IP que 4.
Le modele le plus respecté est par ailleur ce dernier, OSI étant très strict.
![Shema modele OSI](./media/images/modele_ISO_TCPIP.png "Modèle OSI TCP/IP")
## Types of Area Networks (EN)

Common types of area networks are:

- **LAN**: Local Area Network
- **WAN**: Wide Area Network
- **WLAN**: Wireless Local Area Network
- **MAN**: Metropolitan Area Network
- **SAN**: Storage Area Network, System Area Network, Server Area Network, or sometimes Small Area Network
- **CAN**: Campus Area Network, Controller Area Network, or sometimes Cluster Area Network
- **PAN**: Personal Area Network


## Organisation d’une communication

- **Emetteur**: Dispositif codant le message pour l’émettre sur le canal.
- **Récepteur**: Dispositif qui reçoit et décode le message.
- **Canal de communication**: Support de transmission que le message empruntera pour se rendre de la source à la destination.

## Materiels

### Hotes 

Les hôtes: Les ordinateurs qui envoient et reçoivent des messages sur le réseau.
On distingue 2 types d'hotes:

- **Les serveurs**:
Hôtes équipés de logiciels permettant de fournir des informations, comme des
messages électroniques ou des pages Web, à d'autres hôtes sur le réseau. Chaque
service nécessite un logiciel serveur distinct.
- **Les clients**:
Ordinateurs équipés d'un logiciel qui permet de demander des informations
auprès du serveur et de les afficher.

### Supports reseaux

**Les supports réseau**: Les supports réseau interconnectent les hôtes et les périphériques réseaux. Ex : les câbles cuivre, les fibres optiques et les ondes radio.

### Les périphériques partagés

**Les périphériques partagés**: Ils ne sont pas directement connectés au réseau, mais aux hôtes. L'hôte assure le partage des périphériques sur le réseau.

### Les périphériques réseaux

#### Le concentrateur ou Hub

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


#### Commutateurs ou Switch

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

#### Associer concentrateurs et commutateurs  

Lorsqu’un concentrateur est connecté à un port du commutateur:

- Le commutateur associe les adresse MAC de tous les hôtes connectés au concentrateur à ce port unique.  
- Si source et destinataire d’un message sont sur le même port, le commutateur rejette le message,  
- Si le concentrateur transfère sur ce port un message endommagé par une collision, le commutateur rejette ce message.  
- Chaque port du commutateur crée un domaine de collision distinct.  


#### Routeurs

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
## Protocoles 
### Adresse MAC
L'adresse MAC correspond a un identifiant unique rataché à un materiel. Contrairement a l'IP, il ne peut être modifier. L'adresse MAC de broadcast est FF:FF:...:FF.  
![Trame MAC](./media/images/MAC.png)  
- **Organizational Unit Identifier**: L’IEEE vend aux industriels qui en font la demande un OUI (Organizational Unit Identifier) unique. Il est codé sur les 24 premiers bits de l'adresse MAC.  
- **Bit I/G**: Il indique que l’adresse est universelle (valeur 0), c’est à dire attribuée par le constructeur à sa sortie d’usine, ou locale (valeur 1) c’est à dire attribuée par l’ingénieur réseau du site.  
- **Bit U/L**: Il indique une adresse individuelle (valeur 0) c’est à dire ne référençant qu’un seul équipement sur le réseau, ou une adresse de groupe (valeur 1) c’est à dire référençant plusieurs équipements sur le réseau.  

### Adresse IP  
L'adresse IP correspond a un identifiant reseaux codé sur 4 octets pour IPv4 et 6 octets pour IPv6 et est modifiable aux grés des configurations reseaux. 
Une adresse IP doit avoir un masque reseau pour identifer le reseau auquelle il appartient. Ainsi, un masque egal à `255:255:255:000` avec un ip de 
`172.021.206.093` sera sur le reseau `172.021.206.000` (On utilise un `AND` entre les bits de masque et l'adresse hote). L'adresse broadcast est par ailleur 
`172.021.206.255`. Le protocole IP n'assure pas que le message arrive à destination. Il sert seulement à indiquer l'expediteur et le destinataire.  
### Protocole Ethernet  
Le protocole Ethernet sert a envoyer des paquets la machine prochaine auquelle on est connnecté. Si A veux 
envoyer un paquet a B mais que 3 routeur les separts, alors A envoit un paquet avec l'IP de B dans la trame IP mais 
dans la trame Ethernet, c'est **l'adresse MAC du routeur de son reseau** qui y sera inscrit. Ensuite, le routeur 1 
enverra le paquet a 2 en changeant la trame Ethernet selon le même shema, en y mettant l'adresse MAC du prochaine destinaire 
directe (le routeur 2 en l'occurence). Dans une communication purement local, A aurait mis l'adresse MAC de B par contre.    
Une trame Ethernet se constitue de la sorte:  
![Trame Ethernet](./media/images/Ethernet_TypeII.png)  
### Protocole ARP  
Le protocole ARP est utilisé dans le cas où l'on veut envoyer un paquet a un destinataire local mais qu'on n'a que son adresse IP. 
Dans ce cas, la machine envoyer un requete ARP en MAC Broadcast (FF) contenant son adresse MAC, IP et IP source. Si une machine repond, 
elle envoit une reponse ARP avec ses infos. Et là tout le monde communique c'est parfait.  

## Synchronisation et diffusion des messages
Dans un topologie d'accès multiple, des protocoles sont nécessaires pour contrôler l’accès au support.  

Si on laisse chaques hôtes émettre sans attendre son tour, mais il peut y avoir des collisions et quand 
cela arrive, un message d'arret est alors transmit et les communication sont coupées pour certains temps 
aleatoire. Le protocole Ethernet et basé sur ce systeme de conflit. En rotation chaque hôte doit attendre 
son tour pour émettre, il n’y a donc pas de collisions. Le protocole Token Ring est basé là dessus mais a 
donc le desavantage de consommer plus de bande passante par le transfere de jeton  

Il existe par ailleurs 3 type de diffusion de messages:  
- Unicast : Un hôte transmet des informations à un seul hôte (monodiffusion)  
- Multicast : Un hôte transmet des informations à groupe d’hôtes (multidiffusion)  
- Broadcast : Un hôte transmet des informations à tout les hôtes de son réseau (diffusion)  



