## Lancer l'API
```
mvn spring-boot:run
```

## Insertions à effectuer
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```
##Routes de l'API :

	- POST : /apiCashManager/auth/signin -> Se connecter
	- POST : /apiCashManager/auth/signup -> S'inscrire

	- GET  : /apiCashManager/users -> Récupérer tous les utilisateurs
	- GET  : /apiCashManager/users/{id} -> Récupérer un utilisateur
	- POST : /apiCashManager/users -> Créer un utilisateur
	- PUT  : /apiCashManager/users/{id} -> Mettre à jour un utilisateur
	- DELT : /apiCashManager/users/{id} -> Supprimer un utilisateur

	- GET  : /apiCashManager/articles -> Récupérer tous les articles
	- GET  : /apiCashManager/articles/{id} -> Récupérer un article
	- POST : /apiCashManager/articles -> Créer un article
	- PUT  : /apiCashManager/articles/{id} -> Mettre à jour un article
	- DELT : /apiCashManager/articles/{id} -> Supprimer un article

	- GET  : /apiCashManager/payments -> Récupérer tous les paiements
	- GET  : /apiCashManager/payments/{id} -> Récupérer un paiement
	- POST : /apiCashManager/payments -> Créer un paiement
	- PUT  : /apiCashManager/payments/{id} -> Mettre à jour un paiement
	- DELT : /apiCashManager/payments/{id} -> Supprimer un paiement
