import { createContext, useContext } from "react";

const data = {
  imageSlider: true,
  pagination: true,
  qrGenerator: false,
  undoableCounter: true,
  codeVerification: true,
  mortgageConveter: true,
};

export const FeatureFlagContext = createContext(data)

export const FeatureFlagProvider = FeatureFlagContext.Provider

export default function useFeatureFlag(){
    return useContext(FeatureFlagContext)
}