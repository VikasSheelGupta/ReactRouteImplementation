import { API_URL } from '../constants';

export const getAccessTokenUrl = () => `${API_URL}vendor/token?grant_type=password`;

export const getLoginUrl = () => `${API_URL}core/login/1.0.0/openlgv1`;

 export const getOtpUrl = () => `${API_URL}core/login/1.0.0/openinitotp`;
 
 export const logoutUrl = () => `${API_URL}core/reg/1.0.0/logout`;

// Registration API
export const sendOTPUrl = () => `${API_URL}core/reg/1.0.0/rgtv1`;
export const validateOTPUrl = () => `${API_URL}core/reg/1.0.0/valotpu2`;
export const forgorMpinUrl = () => `${API_URL}core/reg/1.0.0/fmpin`;
export const updateMpinUrl = () => `${API_URL}core/reg/1.0.0/umpinu2`;
export const setMpinUrl = () => `${API_URL}core/reg/1.0.0/smpinu2`;
export const changeMpinUrl = () => `${API_URL}core/cmpin/1.0.0/changempin`;


// Home screen API
export const getHomeScreen = () => `${API_URL}core/home/1.0.0/fhomescreenv4`;
export const getBlhomeUrl = () => `${API_URL}core/blhome/1.0.0/finfoscreen`;

//Mark favourite/unfavourite
export const setunsetfav = () => `${API_URL}core/fav/1.0.0/setunsetfav`;

// Service Information
export const getServiceInfoUrl = () => `${API_URL}core/sinformation/1.0.0/fusd`;

// All Services API --NOTE taken from website [production]
export const getAllServicesUrl = () => `https://web.umang.gov.in/web/api/banner`;

// Kisan Suvidha
export const getAgroAdvisoryUrl = () => `${API_URL}agroAdvisory/1.0.0/kisan`;

export const getWeatherForecastUrl = () => `${API_URL}KS/weatherForecast/1.0.0/kisan`;

export const getWeatherForecastSearchUrl = () => `${API_URL}KS/weatherForecast/1.0.0/kisan`;

export const getPesticideUrl = () => `${API_URL}KS/pesticideDealers/1.0.0/kisan`;

export const getPesticideSearchUrl = () => `${API_URL}KS/pesticideDealers/1.0.0/pesticide`;

export const getFarmMachineryUrl = () => `${API_URL}KS/farmmachinery/1.0.0/kisan`;

export const getFarmMachinerySearchUrl = () => `${API_URL}KS/farmmachinery/1.0.0/farmmachinery`;

export const getFertiliserUrl = () => `${API_URL}KS/fertilizerDealers/1.0.0/kisan`;

export const getFertiliserSearchUrl = () => `${API_URL}KS/fertilizerDealers/1.0.0/fertiliser`;

export const getSeedUrl = () => `${API_URL}KS/seedDealers/1.0.0/kisan`;

export const getSeedSearchUrl = () => `${API_URL}KS/seedDealers/1.0.0/seed`;

// Language Translation
export const getServiceTranslations = (serviceName, langCode) => `https://stgweb.umang.gov.in/${serviceName}/resources/js/i18n/${langCode}_lang.json?v=2.0`;
// export const getKisanSuvidhaStatesUrl = () => `${API_URL}agroAdvisory/1.0.0/kisan`;

// export const getDMIStatesUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/state`;

// export const getDMIDistrictsUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/district`;

// Directorate of Marketing & Inspection

export const getDMIStatesUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/state`;
export const getDMIDistrictsUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/district`;
export const getDMIMandiUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/market`;
export const getDMICommodityUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/commodity`;
export const getDMICommodityPriceUrl = () => `${API_URL}dmi/viewMarketPrice/1.0.0/commodityprice`;

// GSTN 
export const getGSTNAuthUrl = () => `${API_URL}serachTaxpayer/1.0.0/auth`;
export const getGSTNUrl = () => `${API_URL}serachTaxpayer/1.0.0/searchtaxpayer`;

// Pharma Sahi Daam
export const getMedSearchUrl = () => `${API_URL}Pharmasahidaam/searchmed/1.0.0/search`;
export const getMedDetailsUrl = () => `${API_URL}Pharmasahidaam/searchmed/1.0.0/detail`;
export const getBrandMRPSch = ()  => `${API_URL}Pharmasahidaam/searchmed/1.0.0/brandmrpsch`;
export const getBMRPNonSch = ()  => `${API_URL}Pharmasahidaam/searchmed/1.0.0/bmrpnonsch`;
export const getBrandMRP = ()  => `${API_URL}Pharmasahidaam/searchmed/1.0.0/brandmrp`;
export const getDetailsGeneric = ()  => `${API_URL}Pharmasahidaam/searchmed/1.0.0/detailgeneric`;
export const getNNPPA = ()  => `${API_URL}Pharmasahidaam/searchmed/1.0.0/price`;

// Track your PAN Card
export const getPANUrl = ()  => `${API_URL}trackPan/1.0.0/trackpan`;

// Soil Health Card
export const getSHCStatesUrl = () => `${API_URL}shc/ul/1.0.0/hcgst`;
export const getSHCDistrictsUrl = () => `${API_URL}shc/ul/1.0.0/getdistrict`;
export const getSHCSubDistrictUrl = () => `${API_URL}shc/ul/1.0.0/getsubdis`;
export const getSHCVillageUrl = () => `${API_URL}shc/ul/1.0.0/getvillage`;
export const getSHCDetailsUrl = () => `${API_URL}shc/ul/1.0.0/getsch`;
export const getSHCTestingUrl = () => `${API_URL}shc/ul/1.0.0/hcghr`;
export const getSHCFertlizerUrl = () => `${API_URL}shc/ul/1.0.0/hcfrsid`;
export const getSHCNutrientsUrl = () => `${API_URL}shc/ul/1.0.0/cmhnid`;
export const getMbnDetailsUrl = () => `${API_URL}shc/umb/1.0.0/hcmob`;
export const getMbnTestingUrl = () => `${API_URL}shc/umb/1.0.0/hcghr`;
export const getMbnFertlizerUrl = () => `${API_URL}shc/umb/1.0.0/hcfrsid`;
export const getMbnNutrientsUrl = () => `${API_URL}shc/umb/1.0.0/cmhnid`;

// EPFO 
export const getEpfoOtp = () => `${API_URL}epfo/vpassbook/1.0.0/loginnew`;
export const validateEpfoOtp = () => `${API_URL}epfo/vpassbook/1.0.0/validateotp`;
export const getFmid = () => `${API_URL}epfo/vpassbook/1.0.0/fmid`;
export const getFpassbook = () => `${API_URL}epfo/vpassbook/1.0.0/fpassbook`;
export const epfoLogout = () => `${API_URL}epfo/vpassbook/1.0.0/logout`;

// AICTE
export const getaicteYear = () => `${API_URL}aict/apvd/1.0.0/year`;
export const getaictefetchHintStub = () => `${API_URL}aict/apvd/1.0.0/fetchHintStub`;
export const getaictefetchInstitutions = () => `${API_URL}aict/apvd/1.0.0/fetchInstitutions`;
export const getaictefetchCourse= () => `${API_URL}aict/apvd/1.0.0/fetchCourse`;
export const getaictefetchFaculty= () => `${API_URL}aict/apvd/1.0.0/fetchFaculty`;

// Extension Reforms
export const getERState = () => `${API_URL}ersApi/viewExtensionFunctionaries/1.0.0/state`;
export const getERDistrict= () => `${API_URL}ersApi/viewExtensionFunctionaries/1.0.0/district`;
export const getERBlock= () => `${API_URL}ersApi/viewExtensionFunctionaries/1.0.0/block`;
