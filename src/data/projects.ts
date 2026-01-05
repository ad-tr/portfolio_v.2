// Type definitions for project sections

interface Project {
    title: string;
    category: string;
    year: string;
    shortDescription: string;
    technologies: string[];
    github: string | null;
    kaggle?: string | null;
}

// Données des projets
export const projectsData: Record<string, Project> = {
    "mistral-finetuning-rag": {
        title: "Fine-Tuning Mistral & RAG",
        category: "LLM Engineering",
        year: "2025 (En cours)",
        shortDescription: "Spécialisation de Mistral 7B via Fine-Tuning (LoRA/QLoRA) et implémentation d'un pipeline RAG pour une expertise dans domaine ciblée.",
        technologies: ["Python", "Mistral 7B", "LoRA", "RAG"],
        github: null
    },
    "gpt-language-model": {
        title: "Développement d'un LLM \"From Scratch\"",
        category: "Deep Learning",
        year: "2025",
        shortDescription: "Implémentation complète d'un Decoder-only Transformer avec PyTorch pour comprendre les mécanismes internes des LLMs.",
        technologies: ["Python", "PyTorch", "SentencePiece"],
        github: "https://github.com/ad-tr/financial-language-model"
    },
    "bpe-tokenizer": {
        title: "Tokenizer BPE avec Interface Streamlit",
        category: "NLP",
        year: "2025",
        shortDescription: "Implémentation from scratch d'un tokenizer BPE avec support des tokens spéciaux, inspiré de GPT-2.",
        technologies: ["Python", "Streamlit", "Regex"],
        github: "https://github.com/ad-tr/byte-pair-encoding-tokenizer"
    },
    "neural-network-images": {
        title: "Réseau de Neurones pour Classification d'Images",
        category: "Computer Vision",
        year: "2023",
        shortDescription: "Mon premier projet en deep learning : construction d'un réseau de neurones simple pour la classification d'images.",
        technologies: ["Python", "NumPy", "Matplotlib"],
        github: null
    },
    "housing-prices": {
        title: "Prédiction de Prix Immobiliers - Kaggle",
        category: "Machine Learning",
        year: "2024-2025",
        shortDescription: "Pour mon second projet en machine learning, j'ai participé au challenge Kaggle pour prédire des prix immobiliers et j'ai réussi à finir dans le top 35% des participants.",
        technologies: ["Python", "Scikit-Learn", "Pandas"],
        github: null,
        kaggle: "https://www.kaggle.com/code/adrientcht/housing-prices-score-14000"
    }
};

export type ProjectSlug = keyof typeof projectsData;
