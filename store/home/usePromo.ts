import { create } from "zustand";

export interface PromoType {
    promoImage: string,
    promoHeader: string,
    promoContent: PromoContentType
}

export interface PromoContentType {
    promoImageFull: string,
    promoTitle: string,
    promoDesc: string,
    promoDetail: string,
    promoDetailImage: string,
}

interface PromoStore {
    selectedPromo: PromoType | null;
    setSelectedPromo: (selectedPromo: PromoType | null) => void;
}

export const usePromoStore = create<PromoStore>((set) => ({
    selectedPromo: null,
    setSelectedPromo: (promo) =>
        set( { selectedPromo: promo })
}))