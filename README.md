////////////////////////////Le fonctionnement de l'application/////////////////////////////////////////
l'application est une calculatrice, est elle coontruit avec du HTML, Css et Javascript et contient les opérations d'addition,  de multiplication, de division et de soustraction. Le Javascript contient le code des différentes opérations. L'application etant bien construite, elle peut ainsi effectuer toutes les opérations précedement citées.

/////////////////////////////comment exécuter les tests///////////////////////////////////////////////
Pour exécuter les tests, il faut le script Jest, ensuite la creation du fichier calculator.test.js qui contient quelques calculs basics avec des reponses justes. Pour lancer le Test on utilise la comment npm test et le Test est validé lorsque les pass est au vert  ce qui signifie que  toutes les fonctions sont correstes.

//////////////////////////////construire l'image Docker//////////////////////////////////////////////
pour construire l'image docker; il faut un fichier Dockerfile dans le meme repertoire que le projet et par la suite utiliser les commandes comme docker build -t nomduprojet pour builder le projet,  docker run -p -d port nomduprojet pour lancer l'image


///////////////////////////////déployer l'application. ///////////////////////////////////////////////
Les commandes docker tag my-app kemske /my-app & docker push  kemske/my-app peuvent etre utiliser pour deployer le projet.
Mais Dans ce cas de ce projet l’image de Docker sera pousser dans le Docker hub automatiquement après avoir pusher le projet sur github.

 
