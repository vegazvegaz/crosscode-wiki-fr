# 🌀 Système des Éléments (Complet)

Les éléments sont des modes de combat que Lea débloque dans les Temples de Shadoon. Chaque élément change les statistiques, les Arts de Combat et les interactions environnementales.

---

## ⚙️ Mécaniques de Base

### ⚖️ Système d'Opposition
Les éléments sont divisés en deux paires opposées. Utiliser un élément contre son opposé déclenche des interactions spécifiques :
* **Feu (Heat) ↔ Glace (Cold)**
* **Foudre (Shock) ↔ Onde (Wave)**

**Multiplicateurs de Dégâts :**
* **Avantage Élémentaire :** Infliger des dégâts avec l'élément opposé à la faiblesse de l'ennemi augmente les dégâts de **1.5x** et accélère le remplissage de la jauge de **Rupture**.
* **Désavantage de Lea :** Lorsque Lea utilise un élément, elle subit **1.5x** de dégâts supplémentaires provenant de l'élément opposé.

### ⚠️ Surcharge (Overload)
L'utilisation prolongée d'un élément remplit la jauge de Surcharge.
* **Génération de Surcharge :**
  * Rester en mode élémentaire : +0.5% par seconde.
  * Arts de Combat : +10% à +35% selon le niveau de l'Art.
  * Dash / Garde élémentaire : +2% par action.
* **État de Surcharge :** Lorsque la jauge atteint 100%, Lea entre en surcharge pendant **10 secondes**.
  * **Effets :** Retour forcé au mode Neutre, impossibilité de changer d'élément, impossibilité d'utiliser des Arts de Combat.
* **Récupération :** * Mode Neutre : -5% par seconde.
  * Élément Opposé : -15% par seconde.

---

## ⚪ Mode Neutre
Le mode par défaut sans propriétés élémentaires.
* **Modificateurs de Stats :** Aucun (100%).
* **Consommation de PS :** Taux de base.
* **Effets :** Ne génère aucune surcharge. Permet la récupération naturelle des circuits.

## 🔥 Feu (Heat)
* **Déblocage :** Temple de Bergen.
* **Stats :** ATQ +10%, DEF -5%.
* **Effet de Statut : Brûlure (Burn)**
  * **Dégâts :** Inflige 10% de l'Attaque de Lea toutes les 0.5s.
  * **Durée :** 5 secondes (10 ticks).
  * **Cumul :** L'application répétée rafraîchit la durée mais n'augmente pas les dégâts par tick.
* **Propriétés :** Allume les mèches, fond la glace, active les interrupteurs thermiques.

## ❄️ Glace (Cold)
* **Déblocage :** Temple de Faj'ro.
* **Stats :** DEF +10%, FOC -5%.
* **Effet de Statut : Gel (Chilled)**
  * **Effet :** Réduit la vitesse de déplacement et d'attaque de l'ennemi de 50%.
  * **Durée :** 7 secondes.
* **Propriétés :** Gèle l'eau, refroidit les conduits de vapeur, éteint les incendies.

## ⚡ Foudre (Shock)
* **Déblocage :** Temple de Zir'vitar.
* **Stats :** FOC +15%, ATQ -5%.
* **Effet de Statut : Paralysie (Jolt)**
  * **Effet :** 20% de chances à chaque tick d'annuler l'attaque ou le mouvement de l'ennemi.
  * **Durée :** 6 secondes.
* **Propriétés :** Alimente les batteries, se propage dans l'eau, active les aimants.

## 🌊 Onde (Wave)
* **Déblocage :** Temple du Grand Abysse.
* **Stats :** Récupération PV +20%, DEF -5%.
* **Effet de Statut : Marque (Marked)**
  * **Effet :** Lea récupère 5% des dégâts infligés à l'ennemi marqué sous forme de PV.
  * **Durée :** 8 secondes.
* **Propriétés :** Traverse les murs "Onde", téléportation via les portails, détection d'objets.

## 📐 Calcul des Altérations
La chance d'appliquer un effet de statut ($P_{status}$) est calculée comme suit :

$$P_{status} = (Base \times \frac{FOC_{Lea}}{DEF_{Ennemi}}) \times (1 - Res_{Elem})$$

* **Base :** Taux d'application propre à chaque attaque (indiqué dans l'onglet Arts de Combat).
* **FOC :** Statistique de Concentration.
* **Res_Elem :** Résistance élémentaire spécifique de l'ennemi (0.0 à 1.0).

---
*Cette page contient l'intégralité des données du Wiki Fandom anglais, traduites selon le mod French-CC.*