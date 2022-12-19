export interface Universidad {
    nombre:      string;
    ciudad:      string;
    pais:        Pais;
    codigo_pais: CodigoPais;
}

export enum CodigoPais {
    Es = "ES",
    GB = "GB",
    Pt = "PT",
}

export enum Pais {
    España = "España",
    Portugal = "Portugal",
    ReinoUnido = "Reino Unido",
}
