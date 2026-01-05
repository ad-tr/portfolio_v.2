// Type definitions for project sections
interface ProjectSections {
    context: string;
    architecture?: string[];
    features?: string[];
    technicalDecisions?: string[];
    learnings?: string[];
    challenges?: string[];
    results?: string[];
    resources?: string[];
    code?: string;
}

interface Project {
    title: string;
    category: string;
    year: string;
    shortDescription: string;
    technologies: string[];
    github: string | null;
    kaggle?: string | null;
    sections: ProjectSections;
}

// Données des projets
export const projectsData: Record<string, Project> = {
    "gpt-language-model": {
        title: "Développement d'un LLM \"From Scratch\"",
        category: "Deep Learning",
        year: "2024-2025",
        shortDescription: "Implémentation complète d'un Decoder-only Transformer avec PyTorch pour comprendre les mécanismes internes des LLMs.",
        technologies: ["Python", "PyTorch", "SentencePiece"],
        github: null,
        sections: {
            context: "Plutôt que d'utiliser des APIs existantes sans comprendre leur fonctionnement, ce projet vise à implémenter un LLM entièrement from scratch : de la tokenisation à la génération de texte, en passant par les mécanismes d'attention.",
            architecture: [
                "**Decoder-only Transformer** inspiré de GPT",
                "**Tokenisation** : SentencePiece avec vocabulaire de 3000 tokens",
                "**Embeddings** : Vecteurs denses de dimension 384",
                "**Positional Encoding** : Encodage sinusoïdal",
                "**8 blocs Transformer** avec Multi-Head Attention (8 têtes)",
                "**~15 millions de paramètres**"
            ],
            learnings: [
                "Compréhension profonde du papier \"Attention Is All You Need\"",
                "Implémentation manuelle de `scaled_dot_product_attention`",
                "Gestion de l'infrastructure (GPU MPS, checkpoints, data loading)"
            ],
            challenges: [
                "**Ressources de calcul** : Training from scratch demande une puissance énorme",
                "**Volume de données** : Besoin de gigaoctets de texte pour la cohérence linguistique",
                "**Pivot vers le Fine-Tuning** : Prochaine étape avec Mistral 7B ou Llama 3"
            ],
            resources: [
                "\"Attention Is All You Need\" (théorie)",
                "Andrej Karpathy (mise en pratique)"
            ]
        }
    },
    "bpe-tokenizer": {
        title: "Tokenizer BPE avec Interface Streamlit",
        category: "NLP",
        year: "2024",
        shortDescription: "Implémentation from scratch d'un tokenizer BPE avec support des tokens spéciaux, inspiré de GPT-2.",
        technologies: ["Python", "Streamlit", "Regex"],
        github: "https://github.com/ad-tr/byte-pair-encoding-tokenizer",
        sections: {
            context: "Comprendre en profondeur les mécanismes de tokenization des LLMs modernes en reproduisant l'algorithme BPE de GPT-2.",
            features: [
                "Algorithme BPE classique",
                "Support tokens spéciaux (`<begin_of_text>`, `<im_start>`, etc.)",
                "Modes document/conversation",
                "Interface Streamlit interactive",
                "Visualisation colorée des tokens",
                "Métriques (compression ratio, temps d'encoding)"
            ],
            technicalDecisions: [
                "**Structure de données** : `List[List[int]]` pour préserver les frontières de mots",
                "**Tokens spéciaux** : Unicode Private Use Area (U+E000) comme placeholders",
                "**Regex pattern GPT-2** : Capture des unités linguistiques naturelles"
            ],
            challenges: [
                "**Challenge #1** : Intégration des special tokens dans le pipeline UTF-8 → Solution : Unicode Private Use Area",
                "**Challenge #2** : Gestion des erreurs de vocab_size → Solution : Détection early avec message explicite"
            ],
            results: [
                "~130 lignes de Python pur",
                "Compatible avec le format GPT-2",
                "Interface de visualisation complète"
            ],
            code: `from tokenizer import BytePairEncoder

tokenizer = BytePairEncoder()
tokenizer.train(text="corpus", vocab_size=512)
ids = tokenizer.encode("Hello world", mode="document")`
        }
    },
    "neural-network-images": {
        title: "Réseau de Neurones pour Classification d'Images",
        category: "Computer Vision",
        year: "2023",
        shortDescription: "Mon premier projet en deep learning : construction d'un réseau de neurones simple from scratch.",
        technologies: ["Python", "NumPy", "Matplotlib"],
        github: null,
        sections: {
            context: "Mon tout premier projet en deep learning. Plutôt que d'utiliser des frameworks comme TensorFlow ou PyTorch, j'ai voulu comprendre les bases en construisant un réseau de neurones from scratch avec uniquement NumPy. L'objectif était de classifier des images en implémentant moi-même la forward propagation, la backpropagation, et l'optimisation.",
            architecture: [
                "**Réseau dense** : 3 couches (input, hidden, output)",
                "**Fonction d'activation** : ReLU pour les couches cachées, Softmax pour la sortie",
                "**Loss function** : Cross-Entropy",
                "**Optimiseur** : Gradient Descent avec learning rate adaptatif"
            ],
            learnings: [
                "Comprendre la **backpropagation** en détail en l'implémentant from scratch",
                "Maîtriser **NumPy** pour le calcul matriciel et les opérations vectorisées",
                "Visualiser l'apprentissage avec **Matplotlib** (loss curves, accuracy)",
                "Comprendre l'importance de la **normalisation des données**"
            ],
            challenges: [
                "**Debugging de la backpropagation** : Vérifier que les gradients sont corrects avec gradient checking",
                "**Optimisation des performances** : Vectoriser les opérations pour éviter les boucles Python lentes",
                "**Overfitting** : Gérer le sur-apprentissage sans techniques avancées comme le dropout",
                "**Choix des hyperparamètres** : Learning rate, nombre de neurones, nombre d'époques"
            ],
            results: [
                "Premier modèle fonctionnel avec ~85% de précision",
                "Compréhension solide des bases du deep learning",
                "Base pour aborder des architectures plus complexes (CNN, Transformers)"
            ]
        }
    },
    "housing-prices": {
        title: "Prédiction de Prix Immobiliers - Kaggle",
        category: "Machine Learning",
        year: "2023",
        shortDescription: "Challenge Kaggle : prédire des prix immobiliers avec 1 460 entrées et 81 caractéristiques.",
        technologies: ["Python", "Scikit-Learn", "Pandas"],
        github: null,
        kaggle: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques",
        sections: {
            context: "Participation au challenge Kaggle 'House Prices - Advanced Regression Techniques'. L'objectif était de prédire le prix de vente de maisons en utilisant 79 variables explicatives (surface, nombre de chambres, quartier, etc.). Un excellent exercice pour pratiquer l'analyse exploratoire de données (EDA) et le feature engineering.",
            features: [
                "**Analyse exploratoire** : Visualisation des corrélations, distribution des variables",
                "**Feature engineering** : Création de nouvelles variables (ex: âge de la maison, surface totale)",
                "**Gestion des données manquantes** : Imputation intelligente selon le type de variable",
                "**Encodage** : One-hot encoding pour les variables catégorielles",
                "**Normalisation** : StandardScaler pour les variables numériques"
            ],
            technicalDecisions: [
                "**Modèles testés** : Linear Regression, Ridge, Lasso, Random Forest, Gradient Boosting",
                "**Validation** : Cross-validation k-fold (k=5) pour évaluer la performance",
                "**Métrique** : RMSE (Root Mean Squared Error) pour mesurer l'erreur de prédiction",
                "**Ensemble** : Moyenne pondérée des meilleurs modèles pour améliorer la prédiction"
            ],
            learnings: [
                "Pratiquer l'**analyse exploratoire de données** (EDA) avec Pandas et Seaborn",
                "Maîtriser le **feature engineering** : créer des variables pertinentes",
                "Comprendre l'importance de la **validation croisée** pour éviter l'overfitting",
                "Utiliser **Scikit-Learn** pour le preprocessing et les modèles ML"
            ],
            challenges: [
                "**Données manquantes** : ~20% des données manquantes, nécessitant une stratégie d'imputation",
                "**Feature engineering créatif** : Trouver des combinaisons de variables pertinentes",
                "**Éviter l'overfitting** : Équilibrer complexité du modèle et généralisation",
                "**Variables catégorielles** : Gérer 43 variables catégorielles avec encodage approprié"
            ],
            results: [
                "RMSE de ~0.12 sur le leaderboard Kaggle",
                "Compréhension pratique du pipeline ML complet (EDA → Feature Engineering → Modeling → Validation)",
                "Expérience concrète avec les challenges réels du ML (données manquantes, overfitting)"
            ]
        }
    }
};

export type ProjectSlug = keyof typeof projectsData;
