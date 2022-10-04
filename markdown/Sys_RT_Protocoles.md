# Protocoles 
## Adresse MAC
L'adresse MAC correspond a un identifiant unique rataché à un materiel. Contrairement a l'IP, il ne peut être modifier. L'adresse MAC de broadcast est FF:FF:...:FF.  
![Trame MAC](./media/images/MAC.png)  
- **Organizational Unit Identifier**: L’IEEE vend aux industriels qui en font la demande un OUI (Organizational Unit Identifier) unique. Il est codé sur les 24 premiers bits de l'adresse MAC.  
- **Bit I/G**: Il indique que l’adresse est universelle (valeur 0), c’est à dire attribuée par le constructeur à sa sortie d’usine, ou locale (valeur 1) c’est à dire attribuée par l’ingénieur réseau du site.  
- **Bit U/L**: Il indique une adresse individuelle (valeur 0) c’est à dire ne référençant qu’un seul équipement sur le réseau, ou une adresse de groupe (valeur 1) c’est à dire référençant plusieurs équipements sur le réseau.  

## Adresse IP  
L'adresse IP correspond a un identifiant reseaux codé sur 4 octets pour IPv4 et 6 octets pour IPv6 et est modifiable aux grés des configurations reseaux. 
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
