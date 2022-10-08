# Protocoles Réseaux
## Adresse MAC
L'adresse MAC correspond a un identifiant unique rataché à un materiel. Contrairement a l'IP, il ne peut être modifier. L'adresse MAC de broadcast est FF:FF:...:FF.  
![Trame MAC](./media/images/MAC.png)  
- **Organizational Unit Identifier**: L’IEEE vend aux industriels qui en font la demande un OUI (Organizational Unit Identifier) unique. Il est codé sur les 24 premiers bits de l'adresse MAC.  
- **Bit I/G**: Il indique que l’adresse est universelle (valeur 0), c’est à dire attribuée par le constructeur à sa sortie d’usine, ou locale (valeur 1) c’est à dire attribuée par l’ingénieur réseau du site.  
- **Bit U/L**: Il indique une adresse individuelle (valeur 0) c’est à dire ne référençant qu’un seul équipement sur le réseau, ou une adresse de groupe (valeur 1) c’est à dire référençant plusieurs équipements sur le réseau.  

## Protocole IP  
Le protocole IP est un protocole pour la communication inter-réseaux.  
L'adresse IP correspond a un identifiant reseaux codé sur 4 octets pour IPv4 et 16 octets pour IPv6 et est modifiable aux grés des configurations reseaux. 
Une adresse IP doit avoir un masque reseau pour identifer le reseau auquelle il appartient. Ainsi, un masque egal à `255:255:255:000` avec un ip de 
`172.021.206.093` sera sur le reseau `172.021.206.000` (On utilise un `AND` entre les bits de masque et l'adresse hote). L'adresse broadcast est par ailleur 
`172.021.206.255`. Le protocole IP n'assure pas que le message arrive à destination. Il sert seulement à indiquer l'expediteur et le destinataire.  

## Protocole Ethernet  
Le protocole Ethernet sert a envoyer des paquets la machine prochaine auquelle on est connnecté. Si A veux 
envoyer un paquet a B mais que 3 routeur les separts, alors A envoit un paquet avec l'IP de B dans la trame IP mais 
dans la trame Ethernet, c'est **l'adresse MAC du routeur de son reseau** qui y sera inscrit. Ensuite, le routeur 1 
enverra le paquet a 2 en changeant la trame Ethernet selon le même shema, en y mettant l'adresse MAC du prochaine destinaire 
directe (le routeur 2 en l'occurence). Dans une communication purement local, A aurait mis l'adresse MAC de B par contre.    
Une trame Ethernet se constitue de la sorte:  
![Trame Ethernet](./media/images/Ethernet_TypeII.png)  
## Protocole ARP  
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

# Protocoles de transport (OSI: 4)
Les protocoles de transport définissent comment gérer la transmission des messages entre les hôtes. Les deux 
protocoles de transport les plus communs sont le protocole TCP (Transmission Control Protocol) et le protocole 
UDP (User Datagram Protocol). Ces derniers definissent un *port* pour chaque applications afin de separer les communications.  
## Protocole TCP
TCP est utilisé pour acheminer dans l'ordre est de maniere sûr chaque paquets transitant sur le réseau.

Shema honteusement piqué sur Wikipédia:
![Trame TCP](./media/images/Trame_TCP.png)  
Signification des champs :

- Port source : numéro du port source
- Port destination : numéro du port destination
- Numéro de séquence : numéro de séquence du premier octet de ce segment
- Numéro d'acquittement : numéro de séquence du prochain octet attendu
- Taille de l'en-tête : longueur de l'en-tête en mots de 32 bits (les options font partie de l'en-tête)
- Indicateurs ou Flags :
	- Réservé : réservé pour un usage futur
	- ECN/NS : signale la présence de congestion, voir RFC 31683 ; ou Nonce Signaling, voir RFC 35404
	- CWR : Congestion Window Reduced : indique qu'un paquet avec ECE a été reçu et que la congestion a été traitée
	- ECE : ECN-Echo : si SYN=1 indique la capacité de gestion ECN, si SYN=0 indique une congestion signalée par IP (voir RFC 3168)
	- URG : Signale la présence de données urgentes
	- ACK : signale que le paquet est un accusé de réception (acknowledgement)
	- PSH : données à envoyer tout de suite (push)
	- RST : rupture anormale de la connexion (reset)
	- SYN : demande de synchronisation ou établissement de connexion
	- FIN : demande la fin de la connexion
- Fenêtre : taille de fenêtre demandée, c'est-à-dire le nombre d'octets que le récepteur souhaite recevoir sans accusé de réception
- Somme de contrôle : somme de contrôle calculée sur l'ensemble de l'en-tête TCP et des données, mais aussi sur un pseudo en-tête (extrait de l'en-tête IP)
- Pointeur de données urgentes : position relative des dernières données urgentes
- Options : facultatives
- Remplissage : zéros ajoutés pour aligner les champs suivants du paquet sur 32 bits, si nécessaire
- Données : séquences d'octets transmis par l'application (par exemple : +OK POP3 server ready...)


## Protocole UDP
UDP est quant a lui utilisé pour acheminer les paquets le plus rapidement possible, quitte a ce qu'il y est des pertes. Il est 
notament employé pour le streaming video.

# Protocole web
## HTTP (OSI:7)
Le navigateur web client utilise l'adresse IP et le port 80 pour demander des services web. Cette requête 
est envoyée au serveur à l'aide du protocole de transfert hypertexte (HTTP). Le serveur repondra généralement 
en renvoyant la page web (HTML, CSS, etc). Les requêtes HTTP sécurisées (HTTPS) sont envoyées au port 443

## FTP (OSI:7)
FTP est un protocole pour le transfere de fichier courament utilisé pour géré les fichier sur une serveur web 
present chez un tier. Par convention, deux ports sont attribués pour les connexions FTP : le port 21 pour les 
commandes et le port 20 pour les données. Pour le FTPS (FTP via TLS ou SSL) dit implicite, les ports conventionnels 
sont le 990 pour les commandes et le 989 pour les données.  

# Protocole Mails  
## SMTP (OSI:7)
SMTP est utilisé par un client de messagerie pour envoyer des messages à son serveur de messagerie local. 
Le serveur local décide ensuite si le message est destiné à une boîte aux lettres locale ou s'il est adressé 
à une boîte aux lettres se trouvant sur un autre serveur.  

Si le serveur doit envoyer le message à un serveur différent, SMTP est également utilisé entre les deux serveurs. 
Les requêtes SMTP sont envoyées au port 25.  

## POP (OSI:7)
Lorsque le client se connecte au serveur de messagerie, les messages sont téléchargés vers le client. Par défaut, 
les messages ne sont pas conservés sur le serveur une fois que le client y a accédé. Les clients contactent les 
serveurs POP3 sur le port 110.  

## IMAP (OSI:7)
IMAP conserve les messages dans les boîtes aux lettres sur le serveur, sauf si ceux-ci sont supprimés par l'utilisateur. 
La version la plus répandue d'IMAP, IMAP4, écoute les requêtes des clients sur le port 143.




