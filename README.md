## **Cahier des Charges : Création d'un Blog en JavaScript**

---

### **1. Contexte et Objectifs**

#### **Contexte**
Le projet consiste à développer un blog simple pour permettre à des novices de s'initier au développement web avec JavaScript. Le blog sera entièrement développé en JavaScript, avec Express comme framework backend, une base de données traditionnelle (SQLite ou MySQL), et une fonctionnalité d'authentification pour sécuriser les opérations sensibles.

#### **Objectifs**
- Offrir une introduction pratique au développement web avec JavaScript.
- Permettre aux novices de comprendre les concepts de base du frontend, du backend, des bases de données et de l'authentification.
- Créer un blog fonctionnel avec des fonctionnalités de base (création, lecture, modification et suppression d'articles) et une gestion des utilisateurs.

---

### **2. Public Cible**
- Débutants en développement web.
- Personnes souhaitant apprendre JavaScript, Express, les bases de données et l'authentification.

---

### **3. Fonctionnalités**

#### **Fonctionnalités Frontend**
1. **Page d'accueil** :
   - Afficher la liste des articles (titre, auteur, date de publication).
   - Un lien pour lire chaque article en détail.
2. **Page de détail d'un article** :
   - Afficher le titre, le contenu, l'auteur et la date de publication.
3. **Page de connexion** :
   - Formulaire de connexion pour les utilisateurs enregistrés.
4. **Page de création/modification d'article** (réservée aux utilisateurs authentifiés) :
   - Formulaire pour créer un nouvel article (titre, contenu, auteur).
   - Formulaire pour modifier un article existant.
5. **Interface utilisateur simple et intuitive** :
   - Utilisation de HTML/CSS pour la structure et le style.
   - JavaScript pour l'interactivité (récupération des données via l'API, affichage dynamique).

#### **Fonctionnalités Backend**
1. **API RESTful** :
   - `GET /articles` : Récupérer tous les articles.
   - `GET /articles/:id` : Récupérer un article par son ID.
   - `POST /articles` : Créer un nouvel article (réservé aux utilisateurs authentifiés).
   - `PUT /articles/:id` : Mettre à jour un article existant (réservé aux utilisateurs authentifiés).
   - `DELETE /articles/:id` : Supprimer un article (réservé aux utilisateurs authentifiés).
2. **Gestion des utilisateurs** :
   - `POST /register` : Enregistrer un nouvel utilisateur.
   - `POST /login` : Authentifier un utilisateur et renvoyer un token JWT.
   - `GET /profile` : Récupérer les informations de l'utilisateur authentifié.
3. **Base de données** :
   - Table `articles` : Stocker les articles (`id`, `title`, `content`, `author`, `created_at`).
   - Table `users` : Stocker les utilisateurs (`id`, `username`, `password` (hashé), `role`).
4. **Sécurité** :
   - Hashage des mots de passe avec bcrypt.
   - Utilisation de JSON Web Tokens (JWT) pour l'authentification.
   - Validation des données côté serveur (ex : vérifier que les champs ne sont pas vides).

---

### **4. Technologies**

#### **Frontend**
- **HTML/CSS** : Structure et style des pages.
- **JavaScript** : Interactivité et communication avec l'API backend.

#### **Backend**
- **Node.js** : Environnement d'exécution JavaScript.
- **Express** : Framework pour créer le serveur backend.
- **Base de données** : SQLite (léger et facile à configurer) ou MySQL (plus traditionnel).
- **Body-parser** : Pour traiter les données JSON envoyées par le frontend.
- **Bcrypt** : Pour le hashage des mots de passe.
- **JSON Web Tokens (JWT)** : Pour l'authentification.

#### **Outils**
- **NPM** : Gestion des dépendances.
- **Postman** : Tester les API.
- **Git** : Gestion de version.

---

### **5. Architecture**

#### **Structure du Projet**
```
/blog-project/
│
├── backend/
│   ├── server.js          # Fichier principal du serveur
│   ├── routes/            # Dossier des routes API
│   ├── controllers/       # Dossier des contrôleurs
│   ├── models/            # Dossier des modèles (interaction avec la base de données)
│   ├── middleware/        # Dossier des middlewares (ex : authentification)
│   └── db/                # Dossier de configuration de la base de données
│
├── frontend/
│   ├── index.html         # Page d'accueil
│   ├── article.html       # Page de détail d'un article
│   ├── login.html         # Page de connexion
│   ├── edit.html          # Page de création/modification d'article
│   ├── styles/            # Dossier des fichiers CSS
│   └── scripts/           # Dossier des fichiers JavaScript
│
├── README.md              # Documentation du projet
└── package.json           # Fichier de configuration NPM
```

---

### **6. Fonctionnalités Techniques**

#### **Authentification**
- **Inscription** :
  - Formulaire pour enregistrer un nouvel utilisateur (username, password).
  - Hashage du mot de passe avec bcrypt.
  - Enregistrement de l'utilisateur dans la base de données.
- **Connexion** :
  - Formulaire de connexion (username, password).
  - Vérification des identifiants et génération d'un token JWT.
- **Protection des routes** :
  - Utilisation d'un middleware pour vérifier le token JWT sur les routes protégées (création, modification, suppression d'articles).

#### **Gestion des Articles**
- **Création d'un article** :
  - Formulaire accessible uniquement aux utilisateurs authentifiés.
  - Enregistrement de l'article dans la base de données.
- **Modification d'un article** :
  - Formulaire accessible uniquement aux utilisateurs authentifiés.
  - Mise à jour de l'article dans la base de données.
- **Suppression d'un article** :
  - Bouton de suppression accessible uniquement aux utilisateurs authentifiés.
  - Suppression de l'article dans la base de données.

---

### **7. Livrables**

1. **Code source** :
   - Backend (Node.js, Express, base de données, authentification).
   - Frontend (HTML, CSS, JavaScript).
2. **Documentation** :
   - Fichier `README.md` avec les instructions d'installation et d'utilisation.
   - Documentation pédagogique pour les novices.
3. **Démonstration** :
   - Une version fonctionnelle du blog hébergée localement ou sur un service comme Heroku.

---

### **8. Échéancier**

| **Étape**                     | **Durée**   |
|-------------------------------|-------------|
| Configuration de l'environnement | 1 jour      |
| Création de la base de données | 1 jour      |
| Développement du backend       | 4 jours     |
| Développement du frontend      | 3 jours     |
| Tests et débogage              | 2 jours     |
| Documentation                  | 1 jour      |
| **Total**                      | **12 jours**|

---

### **9. Évaluation**

#### **Critères de succès**
- Le blog est fonctionnel et respecte les spécifications.
- L'authentification est implémentée et sécurisée.
- Les novices comprennent les concepts de base de JavaScript, Express, SQL et l'authentification.
- La documentation est claire et complète.

---